import React from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo-demeure.png";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="Header">
      <Navbar
        movie={t("header.links.1")}
        residence={t("header.links.3")}
        destination={t("header.links.3")}
        investment={t("header.links.4")}
        button={t("header.button")}
        i18n={i18n}
      />
      <div className="Header__items">
        <h1>{t("header.title")}</h1>
        <img src={logo} alt="Header" />
      </div>
    </div>
  );
};

export default Header;
