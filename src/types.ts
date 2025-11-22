export interface Account {
    id: string;
    name: string;
    type: "Chequing" | "Savings" | "Credit" | "Investment";
    balance: number;
    currency: string;
    lastUpdated: string;
}

export interface Transaction {
    id: string;
    date: string;
    description: string;
    category: "Groceries" | "Dining" | "Rent" | "Transport" | "Subscriptions" | "Other";
    amount: number; // negative for spending
    accountId: string;
}

export interface Reward {
    id: string;
    title: string;
    description: string;
    pointsRequired: number;
    status: "Available" | "Claimed" | "Exclusive";
}
