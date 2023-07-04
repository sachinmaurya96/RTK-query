
import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Admin from './components/Admin';

function App() {
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  return (
   <>
   <h2>Current amount: {amount}</h2>
   <h2>Current bonus : {points}</h2>
   <Account/>
   <Bonus/>
   <Admin/>
   </>
  );
}

export default App;
