import {HashRouter,Routes,Route} from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';
import User from './Components/User';

export default function App() {
  return (
    <HashRouter>

      <Routes>

        <Route path="/" element={<RootLayout />}>

          <Route index element={<Home />} />

          <Route path="add-user" element={<AddUser />} />

          <Route path="users-list" element={<UsersList />} />

          <Route path="user" element={<User />} />

        </Route>

      </Routes>

    </HashRouter>
  );
}