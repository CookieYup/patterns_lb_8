import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './components/Header.jsx';
import RoleSwitcher from './components/RoleSwitcher.jsx';
import UserPage from './pages/UserPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import SuperAdminPage from './pages/SuperAdminPage.jsx';
import { getUsers } from './api/api.js';

function App() {
  const [role, setRole] = useState('USER');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError('Не вдалося отримати дані з сервера Express');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const renderPage = () => {
    if (loading) return <div className="panel">Завантаження даних...</div>;
    if (error) return <div className="panel error">{error}</div>;

    switch (role) {
      case 'ADMIN':
        return <AdminPage users={users} onUpdate={loadUsers} />;
      case 'SUPER_ADMIN':
        return <SuperAdminPage users={users} onUpdate={loadUsers} />;
      default:
        return <UserPage users={users} />;
    }
  };

  return (
    <div className="app">
      <Header />
      <RoleSwitcher currentRole={role} onChangeRole={setRole} />
      {renderPage()}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
