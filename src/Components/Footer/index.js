import "./Footer.scss"
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

function Footer(){
    return(
        <>
            <div className="Footer">
                <div className="container">
                    <div className="Footer__inner">
                        <div className="Footer__inner__title">
                            Dự án H-HNUE
                        </div>
                        <img src="/Logo vàng.png" alt="logo"/>
                        <div className="Footer__inner__title">
                            Chuyên gia cố vấn
                        </div>
                        <div className="Footer__inner__disc">
                            GS.TS.NGND Đỗ Thanh Bình
                        </div>
                        <div className="Footer__inner__disc">
                            TS. Nguyễn Văn Ninh
                        </div>
                        <div className="Footer__inner__disc">
                            PGS.TS Nguyễn Mạnh Hường
                        </div>
                        <div className="Footer__inner__disc">
                            TS. Vũ Đức Liêm
                        </div>
                        <div className="Footer__inner__title">
                            Đơn vị bảo trợ và tài trợ
                        </div>
                        <div className="Footer__inner__disc">
                            Hội Di sản Văn hoá Việt Nam
                        </div>
                        <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                            <div className="Footer__inner__disc">
                                Quỹ Hỗ trợ bảo tồn di sản văn hoá Việt Nam
                            </div>
                        </Link>
                        <div className="Footer__inner__disc">
                            Công ty Cổ phần Công nghệ Giáo dục AES
                        </div>
                        <div className="Footer__inner__title">
                            Liên hệ
                        </div>
                        <div className="Footer__inner__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <g clip-path="url(#clip0_47_427)">
                            <path d="M19.6875 10.9375C19.6875 5.58594 15.3516 1.25 10 1.25C4.64844 1.25 0.3125 5.58594 0.3125 10.9375C0.3125 15.7727 3.85508 19.7805 8.48633 20.5078V13.7379H6.02539V10.9375H8.48633V8.80312C8.48633 6.37539 9.93164 5.03437 12.1453 5.03437C13.2055 5.03437 14.3141 5.22344 14.3141 5.22344V7.60625H13.0922C11.8891 7.60625 11.5137 8.35312 11.5137 9.11914V10.9375H14.2004L13.7707 13.7379H11.5137V20.5078C16.1449 19.7805 19.6875 15.7727 19.6875 10.9375Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_47_427">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.9375)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                            <g clip-path="url(#clip0_47_430)">
                            <path d="M8.75391 6.44531C6.26953 6.44531 4.26562 8.44922 4.26562 10.9336C4.26562 13.418 6.26953 15.4219 8.75391 15.4219C11.2383 15.4219 13.2422 13.418 13.2422 10.9336C13.2422 8.44922 11.2383 6.44531 8.75391 6.44531ZM8.75391 13.8516C7.14844 13.8516 5.83594 12.543 5.83594 10.9336C5.83594 9.32422 7.14453 8.01562 8.75391 8.01562C10.3633 8.01562 11.6719 9.32422 11.6719 10.9336C11.6719 12.543 10.3594 13.8516 8.75391 13.8516ZM14.4727 6.26172C14.4727 6.84375 14.0039 7.30859 13.4258 7.30859C12.8438 7.30859 12.3789 6.83984 12.3789 6.26172C12.3789 5.68359 12.8477 5.21484 13.4258 5.21484C14.0039 5.21484 14.4727 5.68359 14.4727 6.26172ZM17.4453 7.32422C17.3789 5.92188 17.0586 4.67969 16.0312 3.65625C15.0078 2.63281 13.7656 2.3125 12.3633 2.24219C10.918 2.16016 6.58594 2.16016 5.14062 2.24219C3.74219 2.30859 2.5 2.62891 1.47266 3.65234C0.445313 4.67578 0.128906 5.91797 0.0585937 7.32031C-0.0234375 8.76562 -0.0234375 13.0977 0.0585937 14.543C0.125 15.9453 0.445313 17.1875 1.47266 18.2109C2.5 19.2344 3.73828 19.5547 5.14062 19.625C6.58594 19.707 10.918 19.707 12.3633 19.625C13.7656 19.5586 15.0078 19.2383 16.0312 18.2109C17.0547 17.1875 17.375 15.9453 17.4453 14.543C17.5273 13.0977 17.5273 8.76953 17.4453 7.32422ZM15.5781 16.0938C15.2734 16.8594 14.6836 17.4492 13.9141 17.7578C12.7617 18.2148 10.0273 18.1094 8.75391 18.1094C7.48047 18.1094 4.74219 18.2109 3.59375 17.7578C2.82812 17.4531 2.23828 16.8633 1.92969 16.0938C1.47266 14.9414 1.57813 12.207 1.57813 10.9336C1.57813 9.66016 1.47656 6.92188 1.92969 5.77344C2.23438 5.00781 2.82422 4.41797 3.59375 4.10937C4.74609 3.65234 7.48047 3.75781 8.75391 3.75781C10.0273 3.75781 12.7656 3.65625 13.9141 4.10937C14.6797 4.41406 15.2695 5.00391 15.5781 5.77344C16.0352 6.92578 15.9297 9.66016 15.9297 10.9336C15.9297 12.207 16.0352 14.9453 15.5781 16.0938Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_47_430">
                            <rect width="17.5" height="20" fill="white" transform="translate(0 0.9375)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Footer__copy">
                    <div className="container">
                        <div className="Footer__copy__inner">
                            <div className="Footer__copy__inner__aes">
                                © Copyright 2024 AES, All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;