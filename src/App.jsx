import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { AppRouter } from './navigation/router'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/fontawesome-all.min.css';

import './assets/css/swiper.css';
import './assets/css/style.css';




function App() {




  return (
    <>
    <BrowserRouter>
       <Layout>
       <AppRouter />
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App