import React from 'react'
import "./Footer.css"
import { useTranslation } from 'react-i18next';

export default function Footer() {

  const[t] = useTranslation("global");
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Luciano Castro</h1>
        <p>{t("footer.city")}</p>
      </div>
      <div className="footer-contact">
        <h3>{t("footer.contact")}</h3>
        <p>{t("footer.text")}</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">{t("footer.design")}</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://instagram.com/luchodelfuturo" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://github.com/luchocas234" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
  

