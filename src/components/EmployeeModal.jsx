import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import '../styles/EmployeeModal.css';

const EmployeeModal = ({ employee, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    department: '',
    gender: 'Male',
    phone: '',
    localAddress: '',
    permanentAddress: ''
  });

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    } else {
      setFormData(prev => ({
        ...prev,
        id: `EMP${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
      }));
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{employee ? 'Edit Employee' : 'Add New Employee'}</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label>Employee ID</label>
              <input type="text" name="id" value={formData.id} readOnly className="readonly-input" />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Department</label>
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Local Address</label>
            <textarea name="localAddress" value={formData.localAddress} onChange={handleChange} rows="2" required></textarea>
          </div>

          <div className="form-group">
            <label>Permanent Address</label>
            <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} rows="2" required></textarea>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">
              <Save size={18} /> {employee ? 'Update' : 'Save'} Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
