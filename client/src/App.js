import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Write from "./pages/write/Write"
import Single from "./pages/single/Single"
import Settings from "./pages/settings/Settings"
import Contact from "./pages/contact/Contact"
import TopBar from "./components/topbar/TopBar"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const user = true;
  return (
    <>
      <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={user ? <Home/>:<Register />} />
          <Route path="/login" element={user ? <Home/>:<Login />} />
          <Route path="/write" element={user ? <Write/>:<Register />} />
          <Route path="/settings" element={user ? <Settings/>:<Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
