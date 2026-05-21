export async function getUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

export async function addWarning(id) {
  const response = await fetch(`/api/users/${id}/warning`, {
    method: 'PATCH'
  });
  if (!response.ok) throw new Error('Failed to add warning');
  return response.json();
}

export async function changeRole(id, role) {
  const response = await fetch(`/api/users/${id}/role`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ role })
  });
  if (!response.ok) throw new Error('Failed to change role');
  return response.json();
}

export async function deleteUser(id) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete user');
  return response.json();
}
