import React from 'react';
import UserTable from '../components/UserTable.jsx';
import { changeRole, deleteUser } from '../api/api.js';

export default function SuperAdminPage({ users, onUpdate }) {
  const handleRoleChange = async (id, role) => {
    await changeRole(id, role);
    onUpdate();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    onUpdate();
  };

  return (
    <main className="panel">
      <h2>Вікно супер адміністратора</h2>
      <p>
        Супер адміністратор має розширені права: може змінювати ролі користувачів та видаляти записи.
      </p>
      <UserTable
        users={users}
        actions={(user) => (
          <div className="actions">
            <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            </select>
            <button className="small danger" onClick={() => handleDelete(user.id)}>
              Видалити
            </button>
          </div>
        )}
      />
    </main>
  );
}
