import ReactDOM from 'react-dom';
import '@/index.less';
import App from './components/App/App';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/BaseService';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root'),
);
