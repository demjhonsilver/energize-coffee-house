import PropTypes from 'prop-types';
import { Header } from './header';
import { Footer } from './footer';

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
