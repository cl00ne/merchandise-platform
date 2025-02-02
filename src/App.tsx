import './App.css';
import store from './redux/store/index'
// import ComA from './pages/ComA';
// import ComB from './pages/ComB';
import { Provider } from 'react-redux'

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <ComA />
//         <ComB />
//       </div>
//     </Provider>
//   );
// }

// export default App;

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
