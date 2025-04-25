export type Customer = {
  id: number;
  name: string;
  email: string;
  gender: string;
  country: string;
  phone: string;
  status: 'active' | 'inactive';
  relationshipStatus: 'single' | 'married' | 'divorced' | 'complicated';
};

export const customers: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    country: 'United States',
    phone: '+1 555-123-4567',
    status: 'active',
    relationshipStatus: 'married'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    gender: 'Female',
    country: 'Canada',
    phone: '+1 555-987-6543',
    status: 'active',
    relationshipStatus: 'single'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
    gender: 'Male',
    country: 'United Kingdom',
    phone: '+44 20 1234 5678',
    status: 'inactive',
    relationshipStatus: 'divorced'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    gender: 'Female',
    country: 'Australia',
    phone: '+61 2 9876 5432',
    status: 'active',
    relationshipStatus: 'complicated'
  },
  {
    id: 5,
    name: 'James Brown',
    email: 'james.b@example.com',
    gender: 'Male',
    country: 'Germany',
    phone: '+49 30 1234 5678',
    status: 'inactive',
    relationshipStatus: 'single'
  },
  {
    id: 6,
    name: 'Olivia Davis',
    email: 'olivia.d@example.com',
    gender: 'Female',
    country: 'France',
    phone: '+33 1 23 45 67 89',
    status: 'active',
    relationshipStatus: 'married'
  }
]; 