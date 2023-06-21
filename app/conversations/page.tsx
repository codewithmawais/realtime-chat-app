'use client';

import EmptyState from '../components/EmptyState';

const Home = () => {
    return (
        <div className='hidden h-full lg:block lg:pl-80'>
            <EmptyState />
        </div>
    );
};

export default Home;