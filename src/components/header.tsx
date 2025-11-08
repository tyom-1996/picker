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

    const scrollToId = (id: string) => {
        if (typeof window === "undefined") return;
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
    
      const handleMobileScroll = (id: string) => {
        setShowMobileMenu(false);
        requestAnimationFrame(() => {
          setTimeout(() => {
            scrollToId(id);
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
                    <button onClick={() => scrollToId("designers_forum")} className="header_menu_link">О проекте</button>
                    </li>
                    <li className="header_menu_item">
                    <button onClick={() => scrollToId("how_it_works")} className="header_menu_link">Как это работает</button>
                    </li>
                    <li className="header_menu_item">
                    <button onClick={() => scrollToId("mobile_application")} className="header_menu_link">Приложение</button>
                    </li>
                    <li className="header_menu_item">
                    <button onClick={() => scrollToId("website")} className="header_menu_link">Сайт</button>
                    </li>
                    <li className="header_menu_item">
                      <button onClick={() => scrollToId("faq")} className="header_menu_link">Заказать комплектацию</button>
                    </li>
                    <li className="header_menu_item">
                    <button onClick={() => scrollToId("launch")} className="header_menu_link">Контакты</button>
                    </li>
                </ul>
        </nav>
             <a
                className="header_button"
                href="https://t.me/material_ka"
                target="_blank"
                rel="noopener noreferrer"
             >
                Подписаться на запуск
             </a>

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
                    <button onClick={() => handleMobileScroll("designers_forum")} className="mobile_header_menu_link">О проекте</button>
                  </li>
                  <li className="mobile_menu_menu_item">
                    <button onClick={() => handleMobileScroll("how_it_works")} className="mobile_header_menu_link">Как это работает</button>
                  </li>
                  <li className="mobile_menu_menu_item">
                    <button onClick={() => handleMobileScroll("mobile_application")} className="mobile_header_menu_link">Приложение</button>
                  </li>
                  <li className="mobile_menu_menu_item">
                    <button onClick={() => handleMobileScroll("website")} className="mobile_header_menu_link">Сайт</button>
                  </li>
                  <li className="mobile_menu_menu_item">
                    <button onClick={() => handleMobileScroll("faq")} className="mobile_header_menu_link">Заказать комплектацию</button>
                  </li>
                  <li className="mobile_menu_menu_item">
                    <button onClick={() => handleMobileScroll("launch")} className="mobile_header_menu_link">Контакты</button>
                  </li>
                </ul>
              </nav>
                <a
                    className="mobile_menu_button_subscribe"
                    href="https://t.me/material_ka"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Подписаться на запуск
                </a>
                </div>
             
                </div>
               
            </div>
          )}

       </header>
    );
};

export default Header;
