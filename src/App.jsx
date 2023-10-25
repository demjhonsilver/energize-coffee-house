import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { AppRouter } from './navigation/router'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/fontawesome-all.min.css';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css'; 





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