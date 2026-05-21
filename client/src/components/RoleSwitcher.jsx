import React from 'react';

const roles = [
  { value: 'USER', label: 'User' },
  { value: 'ADMIN', label: 'Admin' },
  { value: 'SUPER_ADMIN', label: 'Super Admin' }
];

export default function RoleSwitcher({ currentRole, onChangeRole }) {
  return (
    <section className="role-switcher">
      <span>Оберіть роль:</span>
      <div className="role-buttons">
        {roles.map((role) => (
          <button
            key={role.value}
            className={currentRole === role.value ? 'active' : ''}
            onClick={() => onChangeRole(role.value)}
          >
            {role.label}
          </button>
        ))}
      </div>
    </section>
  );
}
