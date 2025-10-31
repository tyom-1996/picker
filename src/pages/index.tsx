// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import "../assets/css/main_styles.css";
import Header from "../components/header";
import HowWorksIcon1 from "../assets/icons/howWorksIcon1";
import HowWorksIcon2 from "../assets/icons/howWorksIcon2";
import HowWorksIcon3 from "../assets/icons/howWorksIcon3";
import HowWorksIcon4 from "../assets/icons/howWorksIcon4";
import ArrowIcon from "../assets/icons/arrowIcon";
import Footer from "../components/footer";


const Home: React.FC = () => {
    const router = useRouter();
    const [openFaqId, setOpenFaqId] = React.useState<number | null>(null);
    const [forumCards] = React.useState<Array<{ id: number; title: string; description: string }>>([
        {
            id: 1,
            title: "ОБМЕН ОПЫТОМ",
            description: "Делитесь идеями, задавайте вопросы, публикуйте свои проекты.",
        },
        {
            id: 2,
            title: "СОВЕТЫ ЭКСПЕРТОВ",
            description: "Доступ к полезным материалам и трендам в дизайне.",
        },
        {
            id: 3,
            title: "КОЛЛАБОРАЦИИ",
            description: "Создавайте совместные проекты и находите партнёров для новых идей.",
        },
    ]);

    const [howItWorks] = React.useState<Array<{ id: number; title: string; description: string; icon: React.ReactNode }>>([
        {
            id: 1,
            icon: <HowWorksIcon1 />,
            title: "А также предприниматели в сети интернет своевременно.",
            description: "Для современного мира дальнейшее развитие различных форм деятельности способствует подготовке и реализации своевременного выполнения сверхзадачи. Как принято считать, явные признаки победы институционализации являются только методом политического участия и указаны как претенденты на роль ключевых факторов. Разнообразный и.",
        },
        {
            id: 2,
            icon: <HowWorksIcon2 />,
            title: "Являясь всего лишь частью общей картины, действия представителей.",
            description: "Приятно, граждане, наблюдать, как явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы социально-демократической анафеме. Безусловно, начало повседневной работы по формированию позиции предоставляет.",
        },
        {
            id: 3,
            icon: <HowWorksIcon3 />,
            title: "Картельные сговоры не допускают ситуации, при которой.",
            description: "С другой стороны, постоянный количественный рост и сфера нашей активности позволяет оценить значение поставленных обществом задач. Следует отметить, что глубокий уровень погружения напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. В.",
        },
        {
            id: 4,
            icon: <HowWorksIcon4 />,
            title: "Сложно сказать, почему некоторые особенности внутренней.",
            description: "Банальные, но неопровержимые выводы, а также предприниматели в сети интернет будут функционально разнесены на независимые элементы. Лишь интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть функционально разнесены на независимые элементы. Предварительные выводы неутешительны: дальнейшее.",
        }
    ]);

    const [mobileApplication] = React.useState<Array<{ id: number; title: string; description: string }>>([
        {
            id: 1,
            title: "Гибкое управление проектами",
            description: "Сохраняйте свои работы, возвращайтесь к ним и делитесь с друзьями или дизайнерами.",
        },
        {
            id: 2,
            title: "библиотека материалов и стилей",
            description: "От классики до современного минимализма — выбирайте то, что подходит именно вам.",
        },
        {
            id: 3,
            title: "Интеграция с основным сервисом",
            description: "Все проекты синхронизируются с веб-версией для комфортной работы на любом устройстве.",
        },
        {
            id: 4,
            title: "Полезные советы и тренды ",
            description: "Встроенные рекомендации от профессиональных дизайнеров помогут сделать интерьер стильным и функциональным.",
        },
    ]);
    const [website] = React.useState<Array<{ id: number; title: string; description: string }>>([
        {
            id: 1,
            title: "Интуитивный онлайн-конструктор",
            description: "Легко подбирайте и комбинируйте элементы интерьера без сложностей.",
        },
        {
            id: 2,
            title: "Обширный каталог идей и решений",
            description: "Свежие тренды и дизайнерские находки для любого вкуса.",
        },
        {
            id: 3,
            title: "Все для вашего удобства",
            description: "От планировки до заказа мебели и отделки -всё в одном месте.",
        },
        {
            id: 4,
            title: "Поддержка профессионалов:",
            description: "Наши дизайнеры готовы помочь и дать полезные рекомендации.",
        },
    ]);

    const [faq] = React.useState<Array<{ id: number; title: string; description: string }>>([
        {
            id: 1,
            title: "Когда запустится сервис?",
            description: "Нет, всё максимально интуитивно. Интерфейс создан и для профессионалов, и для новичков — вы сможете собрать интерьер по шагам без специальных знаний.",
        },
        {
            id: 2,
            title: "Нужен ли опыт в дизайне, чтобы использовать платформу?",
            description: "Нет, всё максимально интуитивно. Интерфейс создан и для профессионалов, и для новичков — вы сможете собрать интерьер по шагам без специальных знаний.",
        },
        {
            id: 3,
            title: "Сколько будет стоить использование платформы?",
            description: "Нет, всё максимально интуитивно. Интерфейс создан и для профессионалов, и для новичков — вы сможете собрать интерьер по шагам без специальных знаний.",
        },
        {
            id: 4,
            title: "Есть ли мобильное приложение?",
            description: "Нет, всё максимально интуитивно. Интерфейс создан и для профессионалов, и для новичков — вы сможете собрать интерьер по шагам без специальных знаний.",
        },
        {
            id: 5,
            title: "Какие стили интерьера доступны?",
            description: "Нет, всё максимально интуитивно. Интерфейс создан и для профессионалов, и для новичков — вы сможете собрать интерьер по шагам без специальных знаний.",
        },
    ]);


    const [selectedForumId, setSelectedForumId] = React.useState<number>(1);
    const [selectedHowId, setSelectedHowId] = React.useState<number>(1);
    const selectedHow = howItWorks.find((step) => step.id === selectedHowId);

    // Смещение под фиксированный header (поменяй под свою высоту)
const HEADER_OFFSET = 80;

const scrollToLaunch = React.useCallback(() => {
  const el = document.getElementById("launch");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}, []);

React.useEffect(() => {
  // Ловим клики по всем ссылкам/кнопкам, отмеченным как "вести к launch"
  const onClick = (e: Event) => {
    e.preventDefault();
    scrollToLaunch();
  };

  // 1) <a href="#launch">
  const anchorLinks = Array.from(document.querySelectorAll('a[href="#launch"]'));

  // 2) <button data-scroll="launch"> (удобно для Header/Footer, если там кнопка)
  const dataButtons = Array.from(document.querySelectorAll('button[data-scroll="launch"], [data-scroll="launch"]'));

  const targets = [...anchorLinks, ...dataButtons];

  targets.forEach((node) => node.addEventListener("click", onClick));

  return () => targets.forEach((node) => node.removeEventListener("click", onClick));
}, [scrollToLaunch]);

// высота фикс-хедера, если не нужен оффсет — поставь 0


// наблюдаем появление секции launch
const [showScrollTop, setShowScrollTop] = React.useState(false);

React.useEffect(() => {
  const target = document.getElementById("launch");
  if (!target) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      // показываем кнопку, если launch виден хотя бы на 20%
      setShowScrollTop(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  observer.observe(target);
  return () => observer.disconnect();
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// (если нужно ещё и скролл к launch с оффсетом где-то в коде)
// const scrollToLaunch = () => {
//   const el = document.getElementById("launch");
//   if (!el) return;
//   const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
//   window.scrollTo({ top: y, behavior: "smooth" });
// };



    return (
        <>
            <Header />
            <main className="main_page">
            {showScrollTop && (
                    <button
                        type="button"
                        className="scroll_top_btn"
                        aria-label="Прокрутить вверх"
                        onClick={scrollToTop}
                    >
                        {/* Иконка стрелки вверх (можешь заменить своей) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M12 5a1 1 0 0 1 .707.293l6 6a1 1 0 1 1-1.414 1.414L13 8.414V19a1 1 0 1 1-2 0V8.414l-4.293 4.293A1 1 0 0 1 5.293 11.3l6-6A1 1 0 0 1 12 5Z"/>
                        </svg>
                    </button>
            )}


                <section className="top">
                    <div className="top_wrapper">   
                        <div className="top_wrapper_item_parent">
                            <div className="top_wrapper_item">
                                <h1 className="top_wrapper_item_title">
                                    Дизайн, Который Вдохновляет. 
                                    <br />
                                    Скоро онлайн
                                </h1>
                                <p className="top_wrapper_item_description">
                                    Создавай Интерьер Мечты В Одном Приложении. Онлайн-Конструктор, Дизайнеры И Реальные Материалы.
                                </p>
                                <p className="top_wrapper_item_description2">
                                    Мы объединяем Технологии И Эстетику, Делая Интерьер-Дизайн Доступным Каждому.
                                </p>
                                <button className="top_wrapper_item_button" type="button" data-scroll="launch">
                                    Подписаться на запуск
                                </button>

                            </div>
                        </div>
                      
                        <div className="top_wrapper_image">
                            <img src="/images/top_img.png" alt="top_image" />
                        </div>
                        <div className="top_wrapper_image2">
                            <img src="/images/top_mobile_img.png" alt="top_image" />
                        </div>
                    </div>
                </section>
                <section className="designers_forum">
                    <div className="designers_forum_wrapper">
                        <h2 className="designers_forum_title">Форум Дизайнеров</h2>
                        <h3 className="designers_forum_subtitle">Место, Где Рождаются Идеи И Решения.</h3>
                        <p className="designers_forum_description">
                            В нашем проекте будет запущено профессиональное сообщество, объединяющее дизайнеров интерьеров,
                            архитекторов и визуализаторов. Здесь специалисты смогут делиться опытом, обсуждать проекты,
                            получать советы, находить клиентов и участвовать в коллаборациях.
                        </p>
                        <div className="designers_forum_cards">
                        {forumCards.map((card) => (
                            <div
                                className={`designers_forum_card ${selectedForumId === card.id ? 'active' : ''}`}
                                key={card.id}
                                // onClick={() => setSelectedForumId(card.id)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedForumId(card.id); }}
                            >
                                <h4 className="designers_forum_card_title">{card.title}</h4>
                                <p className="designers_forum_card_description">{card.description}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
                <section className="how_it_works">
                    <div className="how_it_works_wrapper">
                        <h2 className="how_it_works_title">Как Это Работает</h2>
                        <h3 className="how_it_works_subtitle">Создай Интерьер Шаг За Шагом — Просто И Вдохновляюще</h3>
                        <div className="how_it_works_list">
                            {howItWorks.map((step) => (
                                <button
                                    key={step.id}
                                    type="button"
                                    className={`how_it_works_item`}
                                    
                                >
                                    
                                    <div className="how_it_works_item_icon">
                                        {step.icon}
                                    </div>
                                    <p className="how_it_works_item_title">{step.title}</p>
                                    <p className="how_it_works_detail_description">{selectedHow?.description}</p>
                                </button>
                            ))}
                        </div>
            
                    </div>
                </section>
                <section className="mobile_application">
                    <div className="mobile_application_wrapper">
                        <div className="mobile_application_item_image">
                            <img src="/images/mobile_application_img.png" alt="mobile_application_image" />
                        </div>
                        <div className="mobile_application_item_image2">
                            <img src="/images/mobile_app_img.png" alt="mobile_application_image" />
                        </div>
                       <div className="mobile_application_item">
                          <div className="mobile_application_item_content">
                            <h1 className="mobile_application_title">
                                    Мобильное Приложение
                                </h1>
                                <p className="mobile_application_description">
                                    Дизайн интерьера всегда под рукой
                                </p>
                                <div className="mobile_application_list">
                                    {mobileApplication.map((item) => (
                                        <div className="mobile_application_list_item">
                                            <h2 className="mobile_application_item_title">{item.title}</h2>
                                            <p className="mobile_application_item_description">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                          </div>
                           
                        </div>

                    
                    </div>
                </section>
                <section className="website">
                    <div className="website_wrapper">
                   
                       <div className="website_item">
                          <div className="website_item_content">
                            <h1 className="website_title">
                                    Веб-Сайт
                                </h1>
                                <p className="website_description">
                                    Создавай интерьер своей мечты вместе с нами
                                </p>
                                    <div className="website_list">
                                    {website.map((item) => (
                                        <div className="website_list_item">
                                                    <h2 className="website_item_title">{item.title}</h2>
                                            <p className="website_item_description">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                          </div>
                          <div className="website_item_image">
                            <img src="/images/website_img.png" alt="website_image" />
                        </div>
                        <div className="website_item_image2">
                            <img src="/images/website_mobile.png" alt="website_image" />
                        </div>
                           
                        </div>

                    
                    </div>
                </section>
                <section className="faq">
                    <div className="faq_wrapper">
                        <h1 className="faq_title">
                            Часто Задаваемые Вопросы
                        </h1>
                        <div className="faq_list">
                            {faq.map((item) => (
                             <div className={`faq_list_item ${openFaqId === item.id ? 'is-open' : ''}`} key={item.id}>
                             <button
                               type="button"
                               className="faq_list_item_content"
                               onClick={() => setOpenFaqId(openFaqId === item.id ? null : item.id)}
                               aria-expanded={openFaqId === item.id}
                               aria-controls={`faq-desc-${item.id}`}
                             >
                               <h2 className="faq_item_title">{item.title}</h2>
                               <ArrowIcon />
                             </button>
                             <p id={`faq-desc-${item.id}`} className="faq_item_description">{item.description}</p>
                           </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="launch" id="launch">
                    <div className="launch_wrapper">
                        <div className="launch_item_content">
                            <div className="launch_item_content_wrapper">
                            <h1 className="launch_title">
                                Стань Первым, Кто Узнает О Запуске!
                            </h1>
                            <button className="launch_button">
                                Подписаться на запуск
                            </button>
                            </div>
                        </div>
                        <div className="launch_item_image">
                            <img src="/images/picker_img.png" alt="launch_image" />
                        </div>
                        <div className="launch_item_image2">
                            <img src="/images/launch_mobile_img.png" alt="launch_image" />
                        </div>
                       
                    </div>
                    
                </section>


            </main>
            <Footer />
        </>

       
    );
};

export default Home;
