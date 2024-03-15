// 路由文件
import {createHashRouter} from 'react-router-dom'

import Guide from "@/containers/Guide";
import Account from "@/containers/Account";
import Login from "@/containers/Account/Login";
import Register from "@/containers/Account/Register";

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
  }
])

export default router
