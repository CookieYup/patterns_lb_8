import React from 'react';

export default function UserTable({ users, actions }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ім’я</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Попередження</th>
            {actions && <th>Дії</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.warnings}</td>
              {actions && <td>{actions(user)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
