import { useContext } from "react";
import { ThemeContext } from "../App";
import { LogoIcon, MoonIcon, SunIcon, PrometheusIcon } from "./assets/icons";
import dockerIcon from "./assets/docker-icon.svg";
import profilephoto from "./assets/profilephoto.jpeg";

const Header = () => {

const { isDark, setIsDark } = useContext(ThemeContext);
  
return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
	  <img src={dockerIcon} width="100" height="50"/>
            <span className="title">DOCKER - INSTALLATION SUR DEBIAN - </span>
          </div>
            <span className="byme">PAR BINATE ALIYOU</span>
          {/* <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? <MoonIcon /> : <SunIcon />}</button> */}
          <div className="profilephoto">
          <img src={profilephoto} alt="profilephoto" /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
