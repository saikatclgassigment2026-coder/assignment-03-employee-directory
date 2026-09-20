import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import EmployeeTable from './components/EmployeeTable';
import EmployeeModal from './components/EmployeeModal';
import { Plus, Users, Building } from 'lucide-react';
import './index.css';

const INITIAL_EMPLOYEES = [
  {
    id: "EMP001",
    name: "Emma Thompson",
    department: "Engineering",
    gender: "Female",
    phone: "555-0100",
    localAddress: "123 Tech Park, SF",
    permanentAddress: "456 Valley Rd, SJ"
  },
  {
    id: "EMP002",
    name: "James Rodriguez",
    department: "Marketing",
    gender: "Male",
    phone: "555-0101",
    localAddress: "789 Market St, SF",
    permanentAddress: "321 Pine St, LA"
  },
  {
    id: "EMP003",
    name: "Lisa Chen",
    department: "HR",
    gender: "Female",
    phone: "555-0102",
    localAddress: "456 HR Blvd, SF",
    permanentAddress: "654 Oak St, NY"
  }
];

function App() {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const departments = [...new Set(employees.map(emp => emp.department))];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          emp.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDepartment ? emp.department === filterDepartment : true;
    return matchesSearch && matchesDept;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleSave = (employeeData) => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => emp.id === employeeData.id ? employeeData : emp));
    } else {
      setEmployees([...employees, employeeData]);
    }
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  const openNewModal = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard">
      <Topbar />
      
      <main className="main-content">
        <div className="page-header">
          <div>
            <h1 className="page-title">Employee Directory</h1>
            <p className="page-subtitle">Manage your team members and their information</p>
          </div>
          <button className="btn btn-primary" onClick={openNewModal}>
            <Plus size={20} /> Add Employee
          </button>
        </div>

        <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="stat-card" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Users size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Total Employees</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{employees.length}</h3>
            </div>
          </div>
          
          <div className="stat-card" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: 'var(--success-light)', color: 'var(--success)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Building size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Departments</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{departments.length}</h3>
            </div>
          </div>
        </div>

        <div className="table-container" style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
          <div className="table-toolbar" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ flex: '1', minWidth: '200px', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none' }}
            />
            <select 
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              style={{ padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none', backgroundColor: 'white', minWidth: '150px' }}
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <EmployeeTable 
            employees={filteredEmployees} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </div>
      </main>

      {isModalOpen && (
        <EmployeeModal 
          employee={editingEmployee} 
          onSave={handleSave} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
