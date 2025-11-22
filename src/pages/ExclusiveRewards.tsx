
import { Gift, Lock, Check, Star } from 'lucide-react';
import Card from '../components/Card';
import { REWARDS } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';

const ExclusiveRewards = () => {
    const handleRedeem = (id: string) => {
        console.log(`Redeem clicked for reward [${id}]`);
        alert(`Redeem request for reward [${id}] sent!`);
    };

    return (
        <AnimatedPage>
            <div className="space-y-8 animate-fade-in">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Exclusive Rewards</h1>
                    <p className="text-zinc-400">Thank you for banking with Beeves. Enjoy these curated perks.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REWARDS.map((reward) => {
                        const isExclusive = reward.status === 'Exclusive';
                        const isClaimed = reward.status === 'Claimed';
                        const isAvailable = reward.status === 'Available';

                        return (
                            <Card
                                key={reward.id}
                                className={`flex flex-col ${isClaimed ? 'opacity-60 grayscale' : ''} ${isExclusive ? 'border-gold/30 bg-gold/5' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-full ${isExclusive ? 'bg-gold text-black' : 'bg-zinc-800 text-gold'}`}>
                                        {isExclusive ? <Star size={24} fill="currentColor" /> : <Gift size={24} />}
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border
                    ${isExclusive ? 'bg-gold/10 text-gold border-gold/20' : ''}
                    ${isClaimed ? 'bg-zinc-800 text-zinc-400 border-zinc-700' : ''}
                    ${isAvailable ? 'bg-green-500/10 text-green-400 border-green-500/20' : ''}
                  `}
                                    >
                                        {reward.status}
                                    </span>
                                </div>

                                <div className="flex-1 mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{reward.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{reward.description}</p>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                                    <div className="text-sm">
                                        <span className="block text-zinc-500">Points Required</span>
                                        <span className={`font-mono font-bold ${isExclusive ? 'text-gold' : 'text-white'}`}>
                                            {reward.pointsRequired > 0 ? reward.pointsRequired.toLocaleString() : 'VIP Access'}
                                        </span>
                                    </div>

                                    {isAvailable && (
                                        <button
                                            onClick={() => handleRedeem(reward.id)}
                                            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gold hover:text-black transition-colors text-sm"
                                        >
                                            Redeem
                                        </button>
                                    )}
                                    {isClaimed && (
                                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                            <Check size={16} />
                                            <span>Redeemed</span>
                                        </div>
                                    )}
                                    {isExclusive && (
                                        <div className="flex items-center gap-2 text-gold text-sm">
                                            <Lock size={16} />
                                            <span>Unlocked</span>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ExclusiveRewards;
