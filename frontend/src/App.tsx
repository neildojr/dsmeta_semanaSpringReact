import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './componentes/Header';
import SalesCard from './componentes/SalesCard';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
          <SalesCard />
        </section>
      </main>
    </>
  );
}

export default App;
