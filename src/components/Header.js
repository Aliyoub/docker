import { useContext } from "react";
import { ThemeContext } from "../App";
import { LogoIcon, MoonIcon, SunIcon, PrometheusIcon } from "./assets/icons";
import prometheusIcon from "./assets/prometheus.svg";

const Header = () => {

const { isDark, setIsDark } = useContext(ThemeContext);
  
return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
	  <img src={prometheusIcon} width="100" height="50"/>
            <span className="title">Docker</span>
          </div>
          <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? <MoonIcon /> : <SunIcon />}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
