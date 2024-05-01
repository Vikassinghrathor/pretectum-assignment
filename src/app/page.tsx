'use client'; 
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import VehicleTableClient from './components/VehicleTableServer';
import RootLayout from './layout'; // Import RootLayout instead

const IndexPage: React.FC = () => {
  return (
    <Provider store={store}>
      <RootLayout>
        <VehicleTableClient />
      </RootLayout>
    </Provider>
  );
};

export default IndexPage;
