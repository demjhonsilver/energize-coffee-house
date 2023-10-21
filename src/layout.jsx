import PropTypes from 'prop-types';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node, 
};

export default Layout;
