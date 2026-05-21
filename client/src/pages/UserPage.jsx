import React from 'react';
import UserTable from '../components/UserTable.jsx';

export default function UserPage({ users }) {
  return (
    <main className="panel">
      <h2>Вікно користувача</h2>
      <p>
        Користувач має доступ до перегляду власної інформації та загального списку без адміністративних дій.
      </p>
      <UserTable users={users.filter((user) => user.role === 'USER')} />
    </main>
  );
}
