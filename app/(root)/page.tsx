import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'
import CountUp from 'react-countup'

const Home = () => {
    const loggedIn = { firstName: 'Lennard', lastName: 'Mersch', email: 'lennard1@mersch.us'};
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently"
                />
 
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 123.50}, {currentBalance: 500.00}]} 
            />
        </section>
            
    )
}

export default Home

