import React, { useState, useEffect } from "react";
import "./App.css";
import { data } from "./Components/Data";
import Imagebox from "./Components/Imagebox";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import BasicMenu from "./Profile" 
import ReactSwitch from 'react-switch'


function App() {
  const [clock, setClock] = useState("");
  const { logout } = useAuth0();
  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let hours = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();
      let time = `${hours}: ${minutes}: ${seconds}`;
      console.log(time);
      setClock(time);
  
    
    }, 1000);

  }, []);
  const [theme,setTheme]=useState("light");
  const [images, setImages] = useState(data);
  const { user, isAuthenticated, isLoading } = useAuth0();
   
const toggletheme=()=>{
  if(theme==="light"){
    setTheme("dark")
  }
  else{
    setTheme("light")
  }
  }
  useEffect(()=>{
    document.body.className=theme
  },[theme])

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className={`${theme}`}>
      {isAuthenticated ? (
        <div>
          <div className="navbar">
            <h2>Image Gallery</h2>
            <div className="left-div">
              <BasicMenu className="user" logout={logout} user={user} />
              <ReactSwitch className="toggler" onChange={toggletheme} checked={theme==="dark"}/>
            
            </div>
          </div>
          <div className="gallery">
            {images.map((pictures) => {
              return <Imagebox pictures={pictures}  key={pictures.id} />;
              
            })} 
           
          </div>
        </div>
      ) : (
        <>
          <div className="navbar">
            <h2>Image Gallery</h2>
            <p>{clock}</p>
          </div>
          <div>
            <Login />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
