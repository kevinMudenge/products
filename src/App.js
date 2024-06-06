import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboardlayout from './dashboardlayout';
import Dashboard from './scenes/dashboard';
import Productdetails from './scenes/productdetails';

import NotFound404 from './scenes/NotFound404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Dashboardlayout />}>
          <Route index element={<Dashboard />}/>
          <Route path='/:slug' element={<Productdetails/>}/>
        </Route>
        <Route path="*" element={<NotFound404 />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
