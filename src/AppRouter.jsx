// AppRouter.jsx
import { useSelector } from 'react-redux';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

// components
import App from './App.jsx';
import PageNotFound from './pages/NotFound/PageNotFound.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
// import UserPage from './pages/UserPage.jsx';
import Layout from './pages/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Messenger from './pages/Messenger.jsx';
import PostPage from './components/Posts/PostPage.jsx';

const AppRouter = () => {
  const { user } = useSelector((state) => state.user);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout>
            <App />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: '/login',
      element: !user ? <Login /> : <Navigate to="/" />,
    },
    {
      path: '/register',
      element: !user ? <Register /> : <Navigate to="/" />,
    },
    {
      path: '/profile/:slug',
      element: (
        <ProtectedRoute>
          <Layout>
            <ProfilePage />
          </Layout>
        </ProtectedRoute>
      ),
    },
    // {
    //   path: '/users/:slug',
    //   element: (
    //     <ProtectedRoute>
    //       <Layout>
    //         <UserPage />
    //       </Layout>
    //     </ProtectedRoute>
    //   ),
    // },
    {
      path: '/messenger',
      element: (
        <ProtectedRoute>
          <Layout>
            <Messenger />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: '/posts/:postId',
      element: (
        <ProtectedRoute>
          <Layout>
            <PostPage />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
