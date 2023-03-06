import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import UZB from "../../assets/images/icons/UZB.svg";
import USER from "../../assets/images/icons/USER.svg";
import LOKETION from "../../assets/images/icons/LOKETION.svg";
import line from "../../assets/images/icons/line.svg";
import LOGO from "../../assets/images/icons/LOGO.svg";
import heart from "../../assets/images/icons/heart.svg";
import korzinka from "../../assets/images/icons/korzinka.svg";

function header() {
  return (
    <header>
      <section className="backragund">
        <section className="header flex">
          <nav className="header_nav">
            <ul className="header__ul flex">
              <li>
                <p className="header__title">Mahsulotlar katalogi</p>
              </li>
              <li>
                <p className="header__title">Foto-lavhalar</p>
              </li>
              <li>
                <p className="header__title">Yetkazib berish va to'lash</p>
              </li>
              <li>
                <p className="header__title">Aksiya</p>
              </li>
              <li>
                <p className="header__title">Yangi</p>
              </li>
            </ul>
          </nav>
          <ul className="gap-x-3.5 flex">
            <img src={UZB} alt="" />
            <li>
              <select className="header__select">
                <option className="header__option">UZB</option>
                <option>ENG</option>
                <option>RUS</option>
              </select>
            </li>
            <img src={line} alt="" />
            <li className="flex gap-1">
              <p className="header__title">Toshkent shahar</p>
              <img src={LOKETION} alt="" />
            </li>
            <img src={line} alt="" />
            <li className="flex gap-1">
              <p className="header__title">Kirish</p>
              <img src={USER} alt="" />
            </li>
          </ul>
        </section>
      </section>
      <section className="header__home">
        <ul className="header_home flex">
          <li className="header_home_logo">
            <img src={LOGO} alt="" />
          </li>
          <NavLink to={"/"}>
            <li className="header_home_title">Bosh sahifa</li>
          </NavLink>
          <NavLink to={"/products"}>
            <li className="header_home__title">Mahsulotlar</li>
          </NavLink>
          <li className="header_home_btn">
            <button>
              <img src={heart} alt="" />
            </button>
            <button>
              <img src={korzinka} alt="" />
            </button>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default header;
