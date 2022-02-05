import React from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import MyFirstPage from './MyFirstPage';

const App = ({ Component, pageProps }: AppProps) => {
  // return <Component {...pageProps} />;
  return <MyFirstPage />;
};
export default App;
