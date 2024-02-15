import './App.css';
import Header from './assets/components/Header/Header';
import Sidebar from './assets/components/Sidebar/Sidebar';
import Footer from './assets/components/Footer/Footer';
import Main from './assets/components/Main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
