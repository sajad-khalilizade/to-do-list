import {BrowserRouter, Route , Routes } from 'react-router-dom';
import App from './App';
const HandleRoutes = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/blog/*" element={<BlogApp />} />
      <Route path="/users/*" element={<UserApp />} /> */}
    </Routes>
    </BrowserRouter>
    );  
  }
  
  export default HandleRoutes;