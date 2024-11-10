const endpoint = process.env.REACT_APP_API_URL;


export default async function checkuser(email, password) {
  const response = await fetch(`${endpoint}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}
