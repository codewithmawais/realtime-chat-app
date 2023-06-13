import React from "react";
import getConversations from "../actions/getConverations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getSession from '../actions/getSession';
import { redirect } from 'next/navigation'

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode,
    }) {

    const session = await getSession();

    if (!session) {
        redirect('/');
    };

    const conversations = await getConversations();
    const users = await getUsers();

    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <ConversationList
                    users={users}
                    initialItems={conversations}
                />
                {children}
            </div>
        </Sidebar>
    )
}