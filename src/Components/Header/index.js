import "./Header.scss";
import { Link, NavLink, Outlet } from "react-router-dom";

function Header(){
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
                            <Link to={'/'}>
                                Di sản thiên nhiên Thế giới
                            </Link>
                            <Link to={'/'}>
                                Di sản vật thể Thế giới
                            </Link>
                            <Link to={'/'}>
                                Di sản phi vật thể Thế giới
                            </Link>
                            <Link to={'/'}>
                                Di sản tư liệu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;