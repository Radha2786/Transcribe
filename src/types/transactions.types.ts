import { z } from "zod";

export const transactionSchema = z.object({
  id: z.number(),
  dateTime: z.string(),
  amount: z.number(),
  type: z.string().refine((val) => ["Income", "Expense"].includes(val), {
    message: 'Type must be either "Income" or "Expense"',
  }),
  category: z.string(),
  title: z.string().refine((val) => val.length > 0),
  currency: z.string(),
  note: z.string(),
});

export type Transaction = z.infer<typeof transactionSchema>;
