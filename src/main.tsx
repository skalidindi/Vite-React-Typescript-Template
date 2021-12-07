import ReactDOM from 'react-dom';
import '@/index.less';
import App from './components/App/App';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById('root'),
);
