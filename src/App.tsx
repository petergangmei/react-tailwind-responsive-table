import React from 'react';
import './App.css';
import ResponsiveTable from './components/ResponsiveTable';
import { customers } from './data/customers';

function App() {
  return (
    <div className="App">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Customer Information</h1>
          <p className="mt-2 text-sm text-gray-500">A responsive table that adapts to different screen sizes</p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-2 sm:px-0">
            <ResponsiveTable customers={customers} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
