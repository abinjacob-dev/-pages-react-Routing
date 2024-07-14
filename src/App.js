import Profile from "./Container/Profile";
import About from "./Container/About";
import { useState } from "react";
import { AppContext } from "./AppContext";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  const [state, setState] = useState(21);
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => navigate("/about")}>About me</button>
      <button onClick={() => navigate("/profile")}>Profile</button>

       <AppContext.Provider value={{data : state}}>
      <Routes>

        <Route element={<About  ></About>} path="/about" />
        <Route element={<Profile></Profile>} path="/profile" />
        
      </Routes>
       </AppContext.Provider>
    </div>
  );
}

export default App;
