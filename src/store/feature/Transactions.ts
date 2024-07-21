import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Transactions from '@/data/Transactions.json';
import { Transaction } from '@/types/transactions.types';


interface TransactionsState {
    data: Array<Transaction>;
}

const initialState: TransactionsState = {
    data: Transactions
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction(state, action: PayloadAction<Transaction>) {
            state.data.push(action.payload);
        },
        removeTransaction(state, action: PayloadAction<number>) {
            state.data = state.data.filter(transaction => transaction.id !== action.payload);
        },
        updateTransaction(state, action: PayloadAction<Transaction>) {
            console.log(action.payload.id);
            const index = state.data.findIndex(transaction => transaction.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        }
    }
});

export const { addTransaction, removeTransaction, updateTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

export type { TransactionsState };
