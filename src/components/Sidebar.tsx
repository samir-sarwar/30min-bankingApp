
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PieChart, CreditCard, ArrowRightLeft, Gift, LogOut } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { path: '/', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/analytics', label: 'Analytics', icon: PieChart },
        { path: '/credit', label: 'Credit Check', icon: CreditCard },
        { path: '/transfer', label: 'Transfer', icon: ArrowRightLeft },
        { path: '/rewards', label: 'Rewards', icon: Gift },
    ];

    return (
        <aside className="w-64 h-screen bg-zinc-950/80 backdrop-blur-xl border-r border-white/10 flex flex-col fixed left-0 top-0 z-50">
            <div className="p-6 border-b border-white/10">
                <h1 className="text-2xl font-bold text-white tracking-tight">
                    Jeeves<span className="text-gold">.</span>
                </h1>
            </div>

            <nav className="flex-1 py-6 px-3 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                ? 'bg-gold/10 text-gold shadow-[0_0_20px_rgba(255,188,0,0.1)]'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
