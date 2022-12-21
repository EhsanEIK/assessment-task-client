import { Toaster } from 'react-hot-toast';
import './App.css';
import Routers from './Routes/Routers';

function App() {
  return (
    <div>
      <Routers />
      <Toaster />
    </div>
  );
}

export default App;
