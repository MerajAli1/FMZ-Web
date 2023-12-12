import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Conatct';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<Home />} />
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
