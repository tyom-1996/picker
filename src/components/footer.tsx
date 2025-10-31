// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import "../assets/css/footer.css";


const Footer: React.FC = () => {
    const router = useRouter();


    return (
       <footer className="footer">
          <div className="footer_wrapper">
            <div className="footer_wrapper_item1">
                <a href="/" className="footer_logo">
                    <img src="/images/footer_logo.png" alt="logo" />
                </a>
                <button className="mobile_footer_button">
                    Подписаться на запуск
                </button>
                <nav className="footer_menu">
                    <ul className="footer_menu_list">
                        <li className="footer_menu_item">
                            <a href="/" className="footer_menu_link">О проекте</a>
                        </li>
                        <li className="footer_menu_item">
                            <a href="/" className="footer_menu_link">Как это работает</a>
                        </li>
                        <li className="footer_menu_item">
                            <a href="/" className="footer_menu_link">Приложение</a>
                        </li>
                        <li className="footer_menu_item">
                            <a href="/" className="footer_menu_link">Сайт</a>
                        </li>
                        <li className="footer_menu_item">
                            <a href="/" className="footer_menu_link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <button className="footer_button">
                    Подписаться на запуск
                </button>
            </div>
            <div className="footer_wrapper_item2">
               <p className="footer_wrapper_item2_text">
                    © 2025 Комплектатор
               </p>
               <div className="footer_wrapper_item2_links">
                    <a href="/" className="footer_wrapper_item2_link">
                        Условия использования
                    </a>
                    <a href="/" className="footer_wrapper_item2_link">
                        Политика конфиденциальности
                    </a>
               </div>
            </div>
           

          </div>

          
       </footer>
    );
};

export default Footer;
