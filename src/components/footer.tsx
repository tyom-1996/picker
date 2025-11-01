// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import "../assets/css/footer.css";


const Footer: React.FC = () => {
    const router = useRouter();

    const HEADER_OFFSET = 80; // подгони под свою высоту хедера

    const scrollToId = (id: string) => {
        if (typeof window === "undefined") return;
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
       <footer className="footer">
          <div className="footer_wrapper">
            <div className="footer_wrapper_item1">
                <a href="/" className="footer_logo">
                    <img src="/images/footer_logo.png" alt="logo" />
                </a>
                <button className="mobile_footer_button" type="button" onClick={() => scrollToId("launch")}>
                    Подписаться на запуск
                </button>
                <nav className="footer_menu">
                    <ul className="footer_menu_list">
                        <li className="footer_menu_item">
                            <button onClick={() => scrollToId("designers_forum")} className="footer_menu_link">О проекте</button>
                        </li>
                        <li className="footer_menu_item">
                            <button onClick={() => scrollToId("how_it_works")} className="footer_menu_link">Как это работает</button>
                        </li>
                        <li className="footer_menu_item">
                            <button onClick={() => scrollToId("mobile_application")} className="footer_menu_link">Приложение</button>
                        </li>
                        <li className="footer_menu_item">
                            <button onClick={() => scrollToId("website")} className="footer_menu_link">Сайт</button>
                        </li>
                        <li className="footer_menu_item">
                            <button onClick={() => scrollToId("launch")} className="footer_menu_link">Контакты</button>
                        </li>
                    </ul>
                </nav>
                <button className="footer_button" type='button' onClick={() => scrollToId("launch")}>
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
