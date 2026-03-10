import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-gray-100">
      
      <img
        className="w-16 h-16 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLUEnQdkgi-ZXmRydoOEDWYkO0H8IUzvsoQ&s"
        alt="logo"
      />

      <ul className="flex gap-6">
        <li>
          <NavLink
            to=""
            className={({isActive}) =>
              isActive
                ? "bg-blue-400 text-lime-50 rounded-2xl px-4 py-2"
                : "px-4 py-2"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="add-user"
            className={({isActive}) =>
              isActive
                ? "bg-blue-400 text-lime-50 rounded-2xl px-4 py-2"
                : "px-4 py-2"
            }
          >
            AddUser
          </NavLink>
        </li>

        <li>
          <NavLink
            to="users-list"
            className={({isActive}) =>
              isActive
                ? "bg-blue-400 text-lime-50 rounded-2xl px-4 py-2"
                : "px-4 py-2"
            }
          >
            UsersList
          </NavLink>
        </li>

        <li>
          <NavLink
            to="user"
            className={({isActive}) =>
              isActive
                ? "bg-blue-400 text-lime-50 rounded-2xl px-4 py-2"
                : "px-4 py-2"
            }
          >
            User
          </NavLink>
        </li>
      </ul>

    </div>
  );
}