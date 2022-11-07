import React from 'react';
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';
import RequireAuth from './components/RequireAuth';

import Layout from './Layout';
// import ErrorPage from './routes/error/error';
import { FilesPage } from './routes/files/files';
import Login from './routes/login/login';
import Register from './routes/login/register';
import { MainPage } from './routes/main/main';
import { MonitorPage } from './routes/monitor/monitor';
import StatisticsPage from './routes/statistics/statistics';
import { ActiveTeam } from './routes/teams/active/activeTeam';
import { AllTeam } from './routes/teams/all/allTeam';
import { NewTeam } from './routes/teams/new/newTeam';
import Unauthorized from './routes/unauthorized/unauthorized';
import { ActiveUser } from './routes/users/active/activeUser';
// import { AllUser } from './routes/users/all/allUser';
import { NewUser } from './routes/users/new/newUser';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       //   { index: true, element: <MainPage /> },
//       { path: '/login', element: <Login /> },
//       { path: '/register', element: <Register /> },
//       {
//         path: '/main',
//         element: <MainPage />,
//       },
//       {
//         path: 'monitor',
//         element: <MonitorPage />,
//       },
//       {
//         path: 'users/active-users',
//         element: <ActiveUser />,
//       },
//       {
//         path: 'users/new-users',
//         element: <NewUser />,
//       },
//       {
//         path: 'users/all-users',
//         element: <AllUser />,
//       },
//       {
//         path: 'teams/active-team',
//         element: <ActiveTeam />,
//       },
//       {
//         path: 'teams/new-team',
//         element: <NewTeam />,
//       },
//       {
//         path: 'teams/all-team',
//         element: <AllTeam />,
//       },
//       {
//         path: 'statistics',
//         element: <StatisticsPage />,
//       },
//       {
//         path: 'files',
//         element: <FilesPage />,
//       },
//     ],
//   },
// ]);
const App = () => {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="main" element={<MainPage />} />
          <Route path="monitor" element={<MonitorPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="files" element={<FilesPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* private routes */}
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="users/">
              <Route path="active-users" element={<ActiveUser />} />
              <Route path="new-users" element={<NewUser />} />
              <Route path="all-users" element={<ActiveUser />} />
            </Route>
            <Route path="teams/">
              <Route path="active-team" element={<ActiveTeam />} />
              <Route path="new-team" element={<NewTeam />} />
              <Route path="all-team" element={<AllTeam />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
