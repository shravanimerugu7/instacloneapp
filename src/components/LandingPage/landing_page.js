import React from 'react';
import { Link } from "react-router-dom";
import lens from "../../images/lens.png"
import './landingpage.css' ;


export default function LandingPage() {
  return (
      <div className="landing">
          <img id="image"  src={lens} alt="lensimage" />
        <div className="para">
          <div><b>Welcome to InstaClone App</b></div>
              <button><Link to="/post">Enter</Link></button>
          </div>   
      </div>
    )
}
