const getUser = async (id) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const result = await response.json();
    return result.data;
}
const UserPage = async ({params}) => {
    const user = await getUser(params.id)
  return (
    <div className="bg-slate-900 p-10 rounded-md">
        <img className="m-auto my-4" src={user.avatar} alt="user" />
      <h2 className="text-3xl font-bold">{user.first_name} {user.last_name}</h2>
      <h3>{user.email}</h3>
    </div>
  )
}

export default UserPage
