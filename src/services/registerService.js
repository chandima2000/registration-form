

export async function registerUser(payload) {

  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Registration failed');
  }

  return response.json();
  
}
