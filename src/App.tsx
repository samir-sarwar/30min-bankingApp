
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SpendingAnalytics from './pages/SpendingAnalytics';
import CreditCheck from './pages/CreditCheck';
import TransferMoney from './pages/TransferMoney';
import ExclusiveRewards from './pages/ExclusiveRewards';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<SpendingAnalytics />} />
        <Route path="credit" element={<CreditCheck />} />
        <Route path="transfer" element={<TransferMoney />} />
        <Route path="rewards" element={<ExclusiveRewards />} />
      </Route>
    </Routes>
  );
}

export default App;
