
import { ShieldCheck, TrendingUp, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import Card from '../components/Card';
import AnimatedPage from '../components/AnimatedPage';

const CreditCheck = () => {
    const score = 765;
    const maxScore = 900;
    const minScore = 300;
    const percentage = ((score - minScore) / (maxScore - minScore)) * 100;

    const factors = [
        {
            title: 'Payment History',
            status: 'Excellent',
            description: 'No missed payments on record.',
            icon: CheckCircle2,
            color: 'text-green-400'
        },
        {
            title: 'Credit Utilization',
            status: 'Good',
            description: 'Using 15% of available credit.',
            icon: TrendingUp,
            color: 'text-gold'
        },
        {
            title: 'Account Age',
            status: 'Average',
            description: 'Average account age is 4 years.',
            icon: Clock,
            color: 'text-yellow-400'
        },
        {
            title: 'New Credit',
            status: 'Very Good',
            description: 'No recent hard inquiries.',
            icon: ShieldCheck,
            color: 'text-green-400'
        }
    ];

    return (
        <AnimatedPage>
            <div className="space-y-8 animate-fade-in">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Credit Health</h1>
                    <p className="text-zinc-400">Monitor your credit score and understand the factors affecting it.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Score Indicator */}
                    <Card className="lg:col-span-1 flex flex-col items-center justify-center text-center py-12">
                        <div className="relative w-48 h-48 mb-6">
                            {/* Background Circle */}
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    className="text-zinc-800"
                                />
                                {/* Progress Circle */}
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    strokeDasharray={553}
                                    strokeDashoffset={553 - (553 * percentage) / 100}
                                    className="text-gold transition-all duration-1000 ease-out"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold text-white">{score}</span>
                                <span className="text-gold font-medium mt-1">Excellent</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-zinc-400 text-sm">Updated today</p>
                            <p className="text-xs text-zinc-500">Next update in 7 days</p>
                        </div>
                    </Card>

                    {/* Score Factors */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {factors.map((factor, index) => (
                            <Card key={index} className="flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-full bg-zinc-800 ${factor.color}`}>
                                        <factor.icon size={24} />
                                    </div>
                                    <span className={`text-sm font-medium px-2 py-1 rounded bg-zinc-800 ${factor.color}`}>
                                        {factor.status}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{factor.title}</h3>
                                    <p className="text-zinc-400 text-sm">{factor.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Tips Section */}
                <Card className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-gold/10">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold/10 text-gold rounded-full shrink-0">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Score Tip</h3>
                            <p className="text-zinc-300 leading-relaxed">
                                Your credit utilization is in a great spot! Keeping it below 30% is key to maintaining an excellent score.
                                Consider increasing your credit limit on your Visa Infinite Privilege card to lower your overall utilization ratio even further.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </AnimatedPage>
    );
};

export default CreditCheck;
