import Container from '@/components/container/container';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Transaction } from '@/types/transactions.types';
import 'chart.js/auto';
import { RootState } from "@/store/store";

const ChartPage = () => {
  // const transactions = useSelector((state: { transactions: Transaction }) => state.transactions.data);
  const transactions : Array<Transaction> = useSelector((state: RootState) => state.transactions.data);

  const incomeData = transactions.filter(transaction => transaction.type === 'Income');
  const expenseData = transactions.filter(transaction => transaction.type === 'Expense');

  const incomeCategories = [...new Set(incomeData.map(transaction => transaction.category))];
  const expenseCategories = [...new Set(expenseData.map(transaction => transaction.category))];

  const incomeAmounts = incomeCategories.map(category =>
    incomeData
      .filter(transaction => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
  );

  const expenseAmounts = expenseCategories.map(category =>
    expenseData
      .filter(transaction => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
  );

  const data = {
    labels: [...incomeCategories, ...expenseCategories],
    datasets: [
      {
        label: 'Income',
        data: incomeAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expense',
        data: expenseAmounts,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };
  return (
    <Container>
      <Bar data={data} />
    </Container>
  )
}

export default ChartPage







