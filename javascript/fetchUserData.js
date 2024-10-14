async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const users = data.map((user) => ({
      name: user.name,
      email: user.email,
    }));
    return users;
  } catch (error) {
    console.error("Error al obtener los datos", error);
    return [];
  }
}

fetchUserData().then((users) => console.log(users));
