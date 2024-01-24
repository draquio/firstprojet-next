import Users from "@/components/Users";

const getUsers = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const result = await response.json();
    return result.data;
  } catch (error) {}
};
const HomePage = async () => {
  const users = await getUsers();
  return (
    <ul>
      {users.map((user) => (
        <Users key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default HomePage;
