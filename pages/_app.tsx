import React from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import MyFirstPage from './MyFirstPage';
import '../node_modules/bootstrap/scss/bootstrap.scss';

const App = ({ Component, pageProps }: AppProps) => {
  // return <Component {...pageProps} />;
  return <MyFirstPage />;
};
export default App;
