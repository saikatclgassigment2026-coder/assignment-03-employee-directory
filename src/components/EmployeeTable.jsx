import React from 'react';
import { Edit2, Trash2, MapPin, Phone } from 'lucide-react';
import '../styles/EmployeeTable.css';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👥</div>
        <h3>No employees found</h3>
        <p>Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee Info</th>
            <th>ID</th>
            <th>Department</th>
            <th>Contact</th>
            <th>Address</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className="emp-info-cell">
                  <div className="emp-avatar">
                    {employee.name.charAt(0)}
                  </div>
                  <div>
                    <div className="emp-name">{employee.name}</div>
                    <div className="emp-gender">{employee.gender}</div>
                  </div>
                </div>
              </td>
              <td><span className="emp-id">{employee.id}</span></td>
              <td>
                <span className={`dept-badge dept-${employee.department.toLowerCase().replace(' ', '-')}`}>
                  {employee.department}
                </span>
              </td>
              <td>
                <div className="contact-cell">
                  <Phone size={14} className="text-muted" />
                  <span>{employee.phone}</span>
                </div>
              </td>
              <td>
                <div className="address-cell">
                  <MapPin size={14} className="text-muted" />
                  <span className="truncate" title={`Local: ${employee.localAddress} | Perm: ${employee.permanentAddress}`}>
                    {employee.localAddress}
                  </span>
                </div>
              </td>
              <td className="actions-cell">
                <button className="btn-icon" onClick={() => onEdit(employee)} title="Edit Employee">
                  <Edit2 size={18} />
                </button>
                <button className="btn-icon danger" onClick={() => onDelete(employee.id)} title="Delete Employee">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
