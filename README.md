# Assignment 03: Employee Directory

## Objective
Build an Employee Directory maintaining Name, Employee ID, Department Name, Gender, Phone Number, Local Address, and Permanent Address using React State and Events.

## Technologies Used
- React (Vite)
- State Management (`useState`)
- Event Handling (`onChange`, `onSubmit`, `onClick`)
- Lucide React for UI Icons
- Pure CSS with variables

## Features
- Complete CRUD Operations (Add, Edit, Delete Employee)
- Search Employee by Name or ID
- Department Filter
- Real-time Employee Count and Department Count Statistics
- Interactive Add/Edit Modal
- Empty States and confirmation dialogs
- Responsive Dashboard Layout

## Folder Structure
```
assignment-03-employee-directory/
├── src/
│   ├── components/
│   │   ├── Topbar.jsx
│   │   ├── EmployeeTable.jsx
│   │   └── EmployeeModal.jsx
│   ├── styles/
│   │   ├── Topbar.css
│   │   ├── EmployeeTable.css
│   │   └── EmployeeModal.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

## How to Install
1. Navigate to the project directory: `cd assignment-03-employee-directory`
2. Install dependencies: `npm install`

## How to Run
Run the development server:
```bash
npm run dev
```

## Important React Concepts Demonstrated
- **State Management**: Managing complex objects (employees array, form data, search terms, modal visibility) using `useState`.
- **Event Handling**: Handling form submissions with `onSubmit` and inputs with `onChange` using controlled components.
- **Conditional Rendering**: Displaying an empty state when no employees match the search filter, and selectively rendering the modal overlay.
- **Derived State**: Calculating `departments`, `filteredEmployees`, and summary statistics purely from the root state variables.
