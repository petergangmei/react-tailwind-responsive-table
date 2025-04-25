import React from 'react';
import { Customer } from '../data/customers';

interface ResponsiveTableProps {
  customers: Customer[];
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ customers }) => {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      {/* Desktop view - Regular table */}
      <table className="min-w-full divide-y divide-gray-200 hidden md:table">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Relationship
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {customer.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {customer.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.relationshipStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile view - Card style layout */}
      <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="font-bold text-xl mb-2 text-gray-900">{customer.name}</div>
            <div className="grid grid-cols-2 gap-y-2">
              <div className="text-sm font-medium text-gray-500">Email:</div>
              <div className="text-sm text-gray-900 break-all">{customer.email}</div>
              
              <div className="text-sm font-medium text-gray-500">Gender:</div>
              <div className="text-sm text-gray-900">{customer.gender}</div>
              
              <div className="text-sm font-medium text-gray-500">Country:</div>
              <div className="text-sm text-gray-900">{customer.country}</div>
              
              <div className="text-sm font-medium text-gray-500">Phone:</div>
              <div className="text-sm text-gray-900">{customer.phone}</div>
              
              <div className="text-sm font-medium text-gray-500">Status:</div>
              <div className="text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {customer.status}
                </span>
              </div>
              
              <div className="text-sm font-medium text-gray-500">Relationship:</div>
              <div className="text-sm text-gray-900">{customer.relationshipStatus}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveTable; 