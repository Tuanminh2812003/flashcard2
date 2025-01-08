import "./Header.scss";
import { useState, useEffect } from "react";

function Header() {
    const [activeSection, setActiveSection] = useState(null); // Theo dõi ID của section hiện tại

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt đến phần tử
            setActiveSection(id); // Cập nhật trạng thái khi nhấn
        }
    };

    const handleScroll = () => {
        // Theo dõi vị trí cuộn để xác định section hiện tại
        const sections = ["diSanThienNhien", "diSanVatThe", "diSanPhiVatThe", "diSanTuLieu"];
        let currentSection = null;

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                const offsetTop = section.offsetTop;
                const offsetHeight = section.offsetHeight;
                const scrollY = window.scrollY;

                if (scrollY >= offsetTop - 250 && scrollY < offsetTop + offsetHeight - 50) {
                    currentSection = id;
                }
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        // Lắng nghe sự kiện scroll
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Gỡ bỏ sự kiện khi component unmount
        };
    }, []);

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__inner__logo">
                        <img src="/Logo_do.png" alt="logo" />
                        <div className="header__inner__logo__text">HERITAGE SPIRIT</div>
                    </div>
                    <div className="header__inner__menu">
                        <div
                            onClick={() => handleScrollToSection("diSanVatThe")}
                            className={activeSection === "diSanVatThe" ? "active" : ""}
                        >
                            Di sản vật thể Thế giới
                        </div>
                        <div
                            onClick={() => handleScrollToSection("diSanThienNhien")}
                            className={activeSection === "diSanThienNhien" ? "active" : ""}
                        >
                            Di sản thiên nhiên Thế giới
                        </div>
                        <div
                            onClick={() => handleScrollToSection("diSanPhiVatThe")}
                            className={activeSection === "diSanPhiVatThe" ? "active" : ""}
                        >
                            Di sản phi vật thể Thế giới
                        </div>
                        <div
                            onClick={() => handleScrollToSection("diSanTuLieu")}
                            className={activeSection === "diSanTuLieu" ? "active" : ""}
                        >
                            Di sản tư liệu
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
