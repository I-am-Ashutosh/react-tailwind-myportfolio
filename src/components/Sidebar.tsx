import React from "react";
import avatar from "../logo.svg";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className="h-screen bg-[#191D2B]">
      <nav className="h-full flex flex-col justify-between items-center">
        <div className="w-full flex justify-center pt-[1rem] border-b-[1px] border-solid border-[#2e344e]">
          <img src={avatar} alt="" />
        </div>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <a href="#home">Home</a>{" "}
          </li>
          <li className={styles.navItem}>
            <a href="#about">About</a>{" "}
          </li>
          <li className={styles.navItem}>
            <a href="#experience">Tech Stack</a>{" "}
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contact</a>{" "}
          </li>
        </ul>

        <footer className={styles.footer}>
          <p>@2022 Portfolio</p>
        </footer>
      </nav>
    </div>
  );
}

export default Sidebar;
