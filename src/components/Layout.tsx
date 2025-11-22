
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen text-white font-sans selection:bg-gold selection:text-black">
            <Sidebar />
            <main className="ml-64 min-h-screen">
                <div className="max-w-7xl mx-auto p-8 lg:p-12">
                    <AnimatePresence mode="wait">
                        <Outlet key={location.pathname} />
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default Layout;
