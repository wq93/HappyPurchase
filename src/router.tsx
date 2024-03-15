// 路由文件
import {createHashRouter} from 'react-router-dom'

import Guide from "@/containers/Guide";
import Account from "@/containers/Account";
import Login from "@/containers/Account/Login";
import Register from "@/containers/Account/Register";
import Home from "@/containers/Home";

const router = createHashRouter([
  {
    path: '/',
    element: <Guide/>
  },
  {
    path: '/account',
    element: <Account/>,
    children:[
      {
        path: '/account/login',
        element: <Login />
      },
      {
        path: '/account/register',
        element: <Register />
      },
    ]
  },
  {
    path: '/home',
    element: <Home/>
  },
])

export default router
