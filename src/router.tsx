// 路由文件
import {createHashRouter} from 'react-router-dom'

import Guide from "./containers/Guide";

const router = createHashRouter([
  {
    path: '/',
    element: <Guide/>
  }
])

export default router
