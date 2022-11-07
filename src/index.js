import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import './index.css';
// import ErrorPage from './routes/error/error';
// import { FilesPage } from './routes/files/files';
// import { MainPage } from './routes/main/main';
// import { MonitorPage } from './routes/monitor/monitor';
// import { Sidebar } from './routes/sidebar/sidebar';
// import StatisticsPage from './routes/statistics/statistics';
// import { ActiveTeam } from './routes/teams/active/activeTeam';
// import { AllTeam } from './routes/teams/all/allTeam';
// import { NewTeam } from './routes/teams/new/newTeam';
// import { ActiveUser } from './routes/users/active/activeUser';
// import { AllUser } from './routes/users/all/allUser';
// import { NewUser } from './routes/users/new/newUser';
// import Layout from './Layout';
import { AuthProvider } from './context/AuthProvider';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <MainPage /> },
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
