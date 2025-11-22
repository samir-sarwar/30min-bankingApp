import { useState } from 'react';
import { Filter } from 'lucide-react';
import Card from '../components/Card';
import { TRANSACTIONS, ACCOUNTS } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';

const SpendingAnalytics = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Calculate category totals
    const categoryTotals = TRANSACTIONS.reduce((acc, tx) => {
        if (tx.amount < 0) {
            const amount = Math.abs(tx.amount);
            acc[tx.category] = (acc[tx.category] || 0) + amount;
        }
        return acc;
    }, {} as Record<string, number>);

    const totalSpending = Object.values(categoryTotals).reduce((a, b) => a + b, 0);
    const categories = Object.keys(categoryTotals);
    const maxCategoryAmount = Math.max(...Object.values(categoryTotals));

    return (
        <AnimatedPage>
            <div className="space-y-8 animate-fade-in">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Spending Analytics</h1>
                    <p className="text-zinc-400">Track your spending by category and time.</p>
                </div>

                {/* Spending Chart */}
                <Card>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-white">Spending by Category</h2>
                        <div className="text-right">
                            <p className="text-sm text-zinc-500">Total Spending</p>
                            <p className="text-2xl font-bold text-gold font-mono">
                                ${totalSpending.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {categories.map((category) => {
                            const amount = categoryTotals[category];
                            const percentage = (amount / totalSpending) * 100;
                            const widthPercentage = (amount / maxCategoryAmount) * 100;

                            return (
                                <div key={category} className="group">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-zinc-300 font-medium">{category}</span>
                                        <span className="text-zinc-400 font-mono">
                                            ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} ({percentage.toFixed(1)}%)
                                        </span>
                                    </div>
                                    <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gold rounded-full relative group-hover:bg-gold-400 transition-all duration-500 ease-out"
                                            style={{ width: `${widthPercentage}%` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>

                {/* Transaction History */}
                <Card>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <h2 className="text-xl font-semibold text-white">Transaction History</h2>

                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors text-sm">
                                <Filter size={16} />
                                Filter
                            </button>
                            <select
                                className="bg-zinc-800 text-zinc-300 rounded-lg px-4 py-2 text-sm border-none focus:ring-1 focus:ring-gold outline-none cursor-pointer"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="All">All Categories</option>
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-zinc-500 text-sm border-b border-white/10">
                                    <th className="py-3 px-4 font-medium">Date</th>
                                    <th className="py-3 px-4 font-medium">Description</th>
                                    <th className="py-3 px-4 font-medium">Category</th>
                                    <th className="py-3 px-4 font-medium">Account</th>
                                    <th className="py-3 px-4 font-medium text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TRANSACTIONS.map((tx) => {
                                    const account = ACCOUNTS.find(a => a.id === tx.accountId);
                                    return (
                                        <tr key={tx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 px-4 text-zinc-400 text-sm font-mono">{tx.date}</td>
                                            <td className="py-4 px-4 text-white font-medium">{tx.description}</td>
                                            <td className="py-4 px-4">
                                                <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs border border-white/5">
                                                    {tx.category}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-zinc-400 text-sm">{account?.name || 'Unknown'}</td>
                                            <td className={`py-4 px-4 text-right font-mono font-medium ${tx.amount > 0 ? 'text-gold' : 'text-white'}`}>
                                                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </AnimatedPage>
    );
};

export default SpendingAnalytics;
