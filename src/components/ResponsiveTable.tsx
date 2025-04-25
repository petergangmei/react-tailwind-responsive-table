import React from 'react';
import { Customer } from '../data/customers';

interface ResponsiveTableProps {
  customers: Customer[];
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ customers }) => {
  return (
    <div className="overflow-x-auto bg-gray-900 shadow rounded-lg">
      <table className="min-w-full divide-y divide-gray-700 table-fixed md:table-auto">
        <thead className="bg-gray-800">
          <tr>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Gender
            </th>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Country
            </th>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Phone
            </th>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Relationship
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-800">
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                {customer.name}
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {customer.email}
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {customer.gender}
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {customer.country}
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {customer.phone}
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  customer.status === 'active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {customer.status}
                </span>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {customer.relationshipStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable; 