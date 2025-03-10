import { useState } from "react";
import "./hiddenSearch.css";

const HiddenSearch = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`search ${active ? "active" : ""}`}>
      <input type="text" className="input" placeholder="Search..." />
      <button className="btn" onClick={() => setActive(!active)}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default HiddenSearch;
