import React from 'react';
import UserTable from '../components/UserTable.jsx';
import { addWarning } from '../api/api.js';

export default function AdminPage({ users, onUpdate }) {
  const handleWarning = async (id) => {
    await addWarning(id);
    onUpdate();
  };

  return (
    <main className="panel">
      <h2>Вікно адміністратора</h2>
      <p>
        Адміністратор може переглядати користувачів та видавати їм попередження через запити до Express API.
      </p>
      <UserTable
        users={users.filter((user) => user.role !== 'SUPER_ADMIN')}
        actions={(user) => (
          <button className="small" onClick={() => handleWarning(user.id)}>
            Видати попередження
          </button>
        )}
      />
    </main>
  );
}
