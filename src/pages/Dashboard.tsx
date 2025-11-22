
import { ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';
import Card from '../components/Card';
import { ACCOUNTS, TRANSACTIONS } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';

const Dashboard = () => {
    const totalBalance = ACCOUNTS.reduce((acc, curr) => acc + curr.balance, 0);

    return (
        <AnimatedPage>
            <div className="space-y-8 animate-fade-in">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Hi, Audrey</h1>
                        <p className="text-zinc-400">Welcome back to your premium banking dashboard.</p>
                    </div>
                    <div className="text-right relative">
                        <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Total Balance</p>
                        <div className="relative inline-block">
                            {/* Glow effect behind text */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 blur-xl opacity-30 animate-glow-pulse"></div>
                            <p className="relative text-3xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent font-mono animate-gradient-rotate">
                                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Accounts Grid */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                            <Wallet className="text-gold" size={20} />
                            Your Accounts
                        </h2>
                        <span className="text-sm text-zinc-500">{ACCOUNTS.length} Active Accounts</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ACCOUNTS.map((account) => (
                            <Card
                                key={account.id}
                                className="relative overflow-hidden group"
                            >
                                {/* Animated gradient border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-400/20 to-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate rounded-2xl"></div>

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 animate-shimmer"></div>
                                </div>

                                {/* Background icon with float animation */}
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:animate-float">
                                    <Wallet size={120} />
                                </div>

                                {/* Glow effect on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <p className="text-zinc-400 text-sm mb-1">{account.type}</p>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">{account.name}</h3>
                                        </div>
                                        <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium border border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                                            {account.currency}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white mb-2 font-mono group-hover:scale-105 transition-transform duration-300 inline-block">
                                            {account.balance < 0 ? '-' : ''}${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </p>
                                        <p className="text-xs text-zinc-500">Last updated: {account.lastUpdated}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Recent Activity */}
                {/* Your Cards */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Your Cards</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <Card hover={false} className="flex flex-col group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5 !p-4 relative overflow-visible">
                            {/* Outer glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-gradient-rotate"></div>

                            {/* Shimmer overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 animate-shimmer"></div>
                            </div>

                            <div className="relative z-10">
                                {/* Card Image */}
                                <div className="mb-4 -mx-4 relative group/image">
                                    {/* Glow behind card image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <img
                                        src="/src/assets/card.png"
                                        alt="Credit Card"
                                        className="relative w-full h-64 object-cover object-center rounded-t-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                                    />
                                </div>

                                {/* Card Label */}
                                <div className="mb-4 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-semibold text-sm">Debit Card</p>
                                            <p className="text-zinc-500 text-xs mt-0.5">•••• 3654</p>
                                        </div>
                                        <div className="bg-gold/10 text-gold px-2 py-1 rounded text-xs font-medium group-hover:bg-gold/15 group-hover:shadow-md group-hover:shadow-gold/10 transition-all duration-300">
                                            Primary
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Activity Header */}
                                <div className="mb-3">
                                    <h3 className="text-white font-semibold text-sm">Recent Activity</h3>
                                </div>

                                {/* Transactions */}
                                <div className="space-y-3 flex-1">
                                    {TRANSACTIONS.slice(0, 4).map((tx) => (
                                        <div key={tx.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group/tx cursor-pointer hover:scale-[1.02]">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg transition-all duration-200 group-hover/tx:scale-110 group-hover/tx:shadow-lg ${tx.category === 'Groceries' || tx.category === 'Dining' ? 'bg-orange-500/10 text-orange-500 group-hover/tx:bg-orange-500/20 group-hover/tx:shadow-orange-500/20' :
                                                    tx.category === 'Transport' ? 'bg-blue-500/10 text-blue-500 group-hover/tx:bg-blue-500/20 group-hover/tx:shadow-blue-500/20' :
                                                        tx.category === 'Rent' ? 'bg-purple-500/10 text-purple-500 group-hover/tx:bg-purple-500/20 group-hover/tx:shadow-purple-500/20' :
                                                            tx.category === 'Subscriptions' ? 'bg-green-500/10 text-green-500 group-hover/tx:bg-green-500/20 group-hover/tx:shadow-green-500/20' :
                                                                'bg-gold/10 text-gold group-hover/tx:bg-gold/20 group-hover/tx:shadow-gold/20'
                                                    }`}>
                                                    {tx.amount < 0 ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white text-sm group-hover/tx:text-white transition-colors duration-200">{tx.description}</p>
                                                    <p className="text-xs text-zinc-500">{tx.category}</p>
                                                </div>
                                            </div>
                                            <p className={`font-mono font-medium text-sm transition-all duration-200 group-hover/tx:scale-110 ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Card 2 */}
                        <Card hover={false} className="flex flex-col group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5 !p-4 relative overflow-visible">
                            {/* Outer glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/8 via-white/4 to-white/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-rotate"></div>

                            {/* Shimmer overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 animate-shimmer"></div>
                            </div>

                            <div className="relative z-10">
                                {/* Card Image */}
                                <div className="mb-4 -mx-4 relative group/image">
                                    {/* Glow behind card image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/8 blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
                                    <img
                                        src="/src/assets/card.png"
                                        alt="Credit Card"
                                        className="relative w-full h-64 object-cover object-center rounded-t-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                                    />
                                </div>

                                {/* Card Label */}
                                <div className="mb-4 pb-4 border-b border-white/5 group-hover:border-zinc-400/20 transition-colors duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-semibold text-sm group-hover:text-zinc-300 transition-colors duration-300">Credit Card</p>
                                            <p className="text-zinc-500 text-xs mt-0.5">•••• 2197</p>
                                        </div>
                                        <div className="bg-zinc-800 text-zinc-400 px-2 py-1 rounded text-xs font-medium group-hover:bg-zinc-700 group-hover:shadow-lg group-hover:shadow-zinc-500/20 transition-all duration-300">
                                            Secondary
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Activity Header */}
                                <div className="mb-3">
                                    <h3 className="text-white font-semibold text-sm">Recent Activity</h3>
                                </div>

                                {/* Transactions */}
                                <div className="space-y-3 flex-1">
                                    {TRANSACTIONS.slice(0, 4).map((tx) => (
                                        <div key={`card2-${tx.id}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group/tx cursor-pointer hover:scale-[1.02]">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg transition-all duration-200 group-hover/tx:scale-110 group-hover/tx:shadow-lg ${tx.category === 'Groceries' || tx.category === 'Dining' ? 'bg-orange-500/10 text-orange-500 group-hover/tx:bg-orange-500/20 group-hover/tx:shadow-orange-500/20' :
                                                    tx.category === 'Transport' ? 'bg-blue-500/10 text-blue-500 group-hover/tx:bg-blue-500/20 group-hover/tx:shadow-blue-500/20' :
                                                        tx.category === 'Rent' ? 'bg-purple-500/10 text-purple-500 group-hover/tx:bg-purple-500/20 group-hover/tx:shadow-purple-500/20' :
                                                            tx.category === 'Subscriptions' ? 'bg-green-500/10 text-green-500 group-hover/tx:bg-green-500/20 group-hover/tx:shadow-green-500/20' :
                                                                'bg-gold/10 text-gold group-hover/tx:bg-gold/20 group-hover/tx:shadow-gold/20'
                                                    }`}>
                                                    {tx.amount < 0 ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white text-sm group-hover/tx:text-white transition-colors duration-200">{tx.description}</p>
                                                    <p className="text-xs text-zinc-500">{tx.category}</p>
                                                </div>
                                            </div>
                                            <p className={`font-mono font-medium text-sm transition-all duration-200 group-hover/tx:scale-110 ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
};

export default Dashboard;
