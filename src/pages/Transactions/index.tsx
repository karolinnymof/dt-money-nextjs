import React from 'react';

interface Transaction {
  id: number;
  description: string;
  value: number;
}

const transactions: Transaction[] = [
  { id: 1, description: 'Salário', value: 2000 },
  { id: 2, description: 'Aluguel', value: -1000 },
];

function TransactionItem({ id, description, value }: Transaction) {
  // Add your component logic here, displaying transaction details
  return (
    <li key={id}>
      <p>ID: {id}</p>
      <p>Descrição: {description}</p>
      <p>Valor: {value}</p>
    </li>
  );
}

export default function Transactions() {
  return (
    <div>
      <h1>Página de Transações</h1>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
}
