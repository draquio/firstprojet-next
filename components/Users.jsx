// "use client";

import Link from "next/link";

const Users = (props) => {
  const { user } = props;
  return (
    <Link href={`/users/${user.id}`}>
      <li className="bg-slate-700 mb-2 p-4 rounded-md flex justify-between">
        <div>
          <h5 className="font-bold">
            {user.id} {user.first_name} {user.last_name}
          </h5>
          <p className="text-slate-100">{user.email}</p>
        </div>
        <img
          className="rounded-full w-20"
          src={user.avatar}
          alt={user.first_name}
        />
      </li>
    </Link>
  );
};

export default Users;
