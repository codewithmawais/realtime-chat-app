import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import UserList from './components/UserList';
import getSession from '../actions/getSession';
import { redirect } from 'next/navigation';

export default async function UsersLayout({
    children
}:{
    children: React.ReactNode,
}) {
    const session = await getSession();

     if (!session) {
        redirect('/');
    };

    const users = await getUsers();

    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    );    
}