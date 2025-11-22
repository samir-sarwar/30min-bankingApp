import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Card = ({ children, className = '', hover = true, onMouseEnter, onMouseLeave }: CardProps) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
        bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6
        ${hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold-500/5 hover:border-gold/20' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
