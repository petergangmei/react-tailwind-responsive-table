import React from 'react';
import './App.css';
import ResponsiveTable from './components/ResponsiveTable';
import { customers } from './data/customers';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Customer Information</h1>
          <p className="mt-2 text-sm text-gray-300">Customer data table with consistent appearance across all devices</p>
        </div>
      </header>
      <main className="w-full">
        <div className="max-w-7xl mx-auto py-6 px-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto w-full">
            <ResponsiveTable customers={customers} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
