import { Header } from "@/components/Header";
import { Summary } from '../components/Summary';
import { TransactionsTable } from '../components/TransactionsTable';

export default function Home() {
  return (    
   <>
    <Header />
    <Summary />
    <TransactionsTable />
   </>
  );
}
