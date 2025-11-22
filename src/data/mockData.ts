import type { Account, Transaction, Reward } from '../types';

export const ACCOUNTS: Account[] = [
    {
        id: 'acc-1',
        name: 'Premium Chequing',
        type: 'Chequing',
        balance: 12450.50,
        currency: 'CAD',
        lastUpdated: 'Just now'
    },
    {
        id: 'acc-2',
        name: 'High Interest Savings',
        type: 'Savings',
        balance: 45000.00,
        currency: 'CAD',
        lastUpdated: 'Yesterday'
    },
    {
        id: 'acc-3',
        name: 'Visa Infinite Privilege',
        type: 'Credit',
        balance: -1250.30,
        currency: 'CAD',
        lastUpdated: 'Just now'
    },
    {
        id: 'acc-4',
        name: 'Direct Investing',
        type: 'Investment',
        balance: 85000.00,
        currency: 'USD',
        lastUpdated: '15 mins ago'
    }
];

export const TRANSACTIONS: Transaction[] = [
    {
        id: 'tx-1',
        date: '2025-11-20',
        description: 'Whole Foods Market',
        category: 'Groceries',
        amount: -145.50,
        accountId: 'acc-1'
    },
    {
        id: 'tx-2',
        date: '2025-11-19',
        description: 'Uber Trip',
        category: 'Transport',
        amount: -24.00,
        accountId: 'acc-3'
    },
    {
        id: 'tx-3',
        date: '2025-11-18',
        description: 'Netflix Subscription',
        category: 'Subscriptions',
        amount: -18.99,
        accountId: 'acc-3'
    },
    {
        id: 'tx-4',
        date: '2025-11-18',
        description: 'Salary Deposit',
        category: 'Other',
        amount: 4500.00,
        accountId: 'acc-1'
    },
    {
        id: 'tx-5',
        date: '2025-11-17',
        description: 'Starbucks',
        category: 'Dining',
        amount: -8.50,
        accountId: 'acc-1'
    },
    {
        id: 'tx-6',
        date: '2025-11-16',
        description: 'Shell Station',
        category: 'Transport',
        amount: -65.00,
        accountId: 'acc-3'
    },
    {
        id: 'tx-7',
        date: '2025-11-15',
        description: 'Monthly Rent',
        category: 'Rent',
        amount: -2200.00,
        accountId: 'acc-1'
    },
    {
        id: 'tx-8',
        date: '2025-11-14',
        description: 'The Keg Steakhouse',
        category: 'Dining',
        amount: -180.00,
        accountId: 'acc-3'
    }
];

export const REWARDS: Reward[] = [
    {
        id: 'rew-1',
        title: 'Concierge Service',
        description: '24/7 access to premium lifestyle concierge.',
        pointsRequired: 0,
        status: 'Exclusive'
    },
    {
        id: 'rew-2',
        title: 'Airport Lounge Pass',
        description: 'Access to over 1,300 lounges worldwide.',
        pointsRequired: 5000,
        status: 'Available'
    },
    {
        id: 'rew-3',
        title: '$100 Travel Credit',
        description: 'Use towards your next flight or hotel booking.',
        pointsRequired: 10000,
        status: 'Available'
    },
    {
        id: 'rew-4',
        title: 'Tech Gadget Bundle',
        description: 'Latest noise-cancelling headphones.',
        pointsRequired: 25000,
        status: 'Claimed'
    },
    {
        id: 'rew-5',
        title: 'Private Dining Experience',
        description: 'Chef\'s table dinner for two at top rated restaurants.',
        pointsRequired: 15000,
        status: 'Available'
    }
];
