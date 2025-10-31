// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import "../assets/css/header.css";  
import MobileMenuIcon1 from "../assets/icons/mobileMenuIcon1";
import MobileMenuIcon2 from "../assets/icons/mobileMenuIcon2";


const Header: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const router = useRouter();

    const HEADER_OFFSET = 80; // подгони под свою высоту хедера

const scrollToLaunch = () => {
  if (typeof window === "undefined") return;
  const el = document.getElementById("launch");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const handleMobileSubscribe = () => {
    setShowMobileMenu(false);
    // если есть CSS-анимация закрытия, подожди её (подгони таймер)
    requestAnimationFrame(() => {
      setTimeout(() => {
        scrollToLaunch();
      }, 300);
    });
  };
  

    return (
       <header className="header">
          <div className="header_wrapper">
            <button className="mobile_menu_button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MobileMenuIcon1 />
            </button>
             <a href="/" className="header_logo">
                <img src="/images/login.png" alt="logo" />
             </a>
             <nav className="header_menu">
                <ul className="header_menu_list">
                    <li className="header_menu_item">
                        <a href="/" className="header_menu_link">О проекте</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="/" className="header_menu_link">Как это работает</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="/" className="header_menu_link">Приложение</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="/" className="header_menu_link">Сайт</a>
                    </li>
                    <li className="header_menu_item">
                        <a href="/" className="header_menu_link">Контакты</a>
                    </li>
                </ul>
             </nav>
             <button className="header_button" type="button" onClick={scrollToLaunch} >
                Подписаться на запуск
             </button>

          </div>

          {showMobileMenu && (
            <div className="mobile_menu">
                <div className="mobile_menu_wrapper">
                     <div className="mobile_menu_header">
                    <button className="mobile_menu_close_button" onClick={() => setShowMobileMenu(false)}>
                        <MobileMenuIcon2 />
                    </button>
                    <a href="/" className="mobile_menu_logo">
                        <img src="/images/login.png" alt="logo" />
                    </a>
                </div>
                <div className="mobile_menu_content">
                <nav className="mobile_menu_menu">
                    <ul className="mobile_menu_menu_list">
                        <li className="mobile_menu_menu_item">
                            <a href="/" className="header_menu_link">О проекте</a>
                        </li>
                        <li className="mobile_menu_menu_item">
                            <a href="/" className="header_menu_link">Как это работает</a>
                        </li>
                        <li className="mobile_menu_menu_item">
                            <a href="/" className="header_menu_link">Приложение</a>
                        </li>
                        <li className="mobile_menu_menu_item">
                            <a href="/" className="header_menu_link">Сайт</a>
                        </li>
                        <li className="mobile_menu_menu_item">
                            <a href="/" className="header_menu_link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <button className="mobile_menu_button_subscribe" type='button'  onClick={handleMobileSubscribe} >
                    Подписаться на запуск
                </button>
                </div>
             
                </div>
               
            </div>
          )}

       </header>
    );
};

export default Header;
