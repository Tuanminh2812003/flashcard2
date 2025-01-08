import "./Header.scss";
import { Link, NavLink, Outlet } from "react-router-dom";

function Header(){
    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt đến phần tử
        }
    };
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <Link to={"/"}>
                            <div className="header__inner__logo">
                                <img src="/Logo_do.png" alt="logo"/>
                                <div className="header__inner__logo__text">
                                    HERITAGE SPIRIT
                                </div>
                            </div>
                        </Link>
                        <div className="header__inner__menu">
                            <div onClick={() => handleScrollToSection("diSanThienNhien")}>
                                Di sản thiên nhiên Thế giới
                            </div>
                            <div onClick={() => handleScrollToSection("diSanVatThe")}>
                                Di sản vật thể Thế giới
                            </div>
                            <div onClick={() => handleScrollToSection("diSanPhiVatThe")}>
                                Di sản phi vật thể Thế giới
                            </div>
                            <div onClick={() => handleScrollToSection("diSanTuLieu")}>
                                Di sản tư liệu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;