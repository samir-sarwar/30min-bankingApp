import React, { useState } from 'react';
import { Send, ArrowRight, History, User, ArrowLeftRight } from 'lucide-react';
import Card from '../components/Card';
import { ACCOUNTS } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';

const TransferMoney = () => {
    const [transferType, setTransferType] = useState<'recipient' | 'account'>('recipient');
    const [formData, setFormData] = useState({
        fromAccount: ACCOUNTS[0].id,
        toAccount: ACCOUNTS[1]?.id || ACCOUNTS[0].id,
        toRecipient: '',
        amount: '',
        note: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Transfer submitted (fake):', formData);

        if (transferType === 'account') {
            const fromAcc = ACCOUNTS.find(a => a.id === formData.fromAccount);
            const toAcc = ACCOUNTS.find(a => a.id === formData.toAccount);
            alert(`Transfer of $${formData.amount} from ${fromAcc?.name} to ${toAcc?.name} submitted!`);
        } else {
            alert(`Transfer of $${formData.amount} to ${formData.toRecipient} submitted!`);
        }

        setFormData({ ...formData, toRecipient: '', amount: '', note: '' });
    };

    const recentTransfers = [
        { id: 1, name: 'Audrey Johnson', date: 'Oct 24', amount: 120.00, avatar: 'AJ' },
        { id: 2, name: 'Sarah Smith', date: 'Oct 20', amount: 50.00, avatar: 'SS' },
        { id: 3, name: 'Mike Brown', date: 'Oct 15', amount: 1250.00, avatar: 'MB' },
        { id: 4, name: 'Emma Wilson', date: 'Oct 12', amount: 35.00, avatar: 'EW' },
    ];

    return (
        <AnimatedPage>
            <div className="space-y-8 animate-fade-in">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Transfer Money</h1>
                    <p className="text-zinc-400">Send money securely to friends and family.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Transfer Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Transfer Type Toggle */}
                                <div className="flex gap-2 p-1 bg-zinc-800/50 rounded-xl border border-white/10">
                                    <button
                                        type="button"
                                        onClick={() => setTransferType('recipient')}
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${transferType === 'recipient'
                                            ? 'bg-gold text-black shadow-[0_0_20px_rgba(255,188,0,0.2)]'
                                            : 'text-zinc-400 hover:text-white'
                                            }`}
                                    >
                                        <User size={18} />
                                        To Recipient
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setTransferType('account')}
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${transferType === 'account'
                                            ? 'bg-gold text-black shadow-[0_0_20px_rgba(255,188,0,0.2)]'
                                            : 'text-zinc-400 hover:text-white'
                                            }`}
                                    >
                                        <ArrowLeftRight size={18} />
                                        Between Accounts
                                    </button>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">From Account</label>
                                    <select
                                        value={formData.fromAccount}
                                        onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
                                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                                    >
                                        {ACCOUNTS.map(acc => (
                                            <option key={acc.id} value={acc.id}>
                                                {acc.name} ({acc.currency} ${acc.balance.toLocaleString()})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {transferType === 'recipient' ? (
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">To Recipient</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-3.5 text-zinc-500" size={20} />
                                                <input
                                                    type="text"
                                                    placeholder="Name or Email"
                                                    value={formData.toRecipient}
                                                    onChange={(e) => setFormData({ ...formData, toRecipient: e.target.value })}
                                                    className="w-full bg-zinc-800 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-2">To Account</label>
                                            <select
                                                value={formData.toAccount}
                                                onChange={(e) => setFormData({ ...formData, toAccount: e.target.value })}
                                                className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                                                required
                                            >
                                                {ACCOUNTS.filter(acc => acc.id !== formData.fromAccount).map(acc => (
                                                    <option key={acc.id} value={acc.id}>
                                                        {acc.name} ({acc.currency} ${acc.balance.toLocaleString()})
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-400 mb-2">Amount</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3.5 text-zinc-500 font-medium">$</span>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                min="0.01"
                                                step="0.01"
                                                value={formData.amount}
                                                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                                className="w-full bg-zinc-800 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Note (Optional)</label>
                                    <textarea
                                        rows={3}
                                        placeholder="What's this for?"
                                        value={formData.note}
                                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-zinc-600 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold hover:bg-gold-400 text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,188,0,0.2)] hover:shadow-[0_0_30px_rgba(255,188,0,0.4)] hover:scale-[1.01]"
                                >
                                    <Send size={20} />
                                    Send Money
                                </button>
                            </form>
                        </Card>
                    </div>

                    {/* Recent Transfers */}
                    <div className="lg:col-span-1">
                        <Card className="h-full">
                            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <History className="text-gold" size={20} />
                                Recent Transfers
                            </h2>
                            <div className="space-y-4">
                                {recentTransfers.map((transfer) => (
                                    <div key={transfer.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gold font-bold text-sm border border-gold/20 group-hover:border-gold transition-colors">
                                                {transfer.avatar}
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">{transfer.name}</p>
                                                <p className="text-xs text-zinc-500">{transfer.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-mono text-white group-hover:text-gold transition-colors">
                                                -${transfer.amount.toFixed(2)}
                                            </p>
                                            <ArrowRight size={14} className="ml-auto text-zinc-600 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-2 text-sm text-zinc-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                                View All History
                            </button>
                        </Card>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default TransferMoney;
