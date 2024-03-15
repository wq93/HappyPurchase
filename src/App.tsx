import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import { RouterProvider} from 'react-router-dom'
import router from "./router";


const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
