import Section4 from "../Section4";


function Section1p2(){
    return(
        <>
            <div className="Section1__title">
                <container>
                    <div className="Section1__title__inner">
                    KHÔNG GIAN VĂN HÓA – TÂM LINH 
                    </div>
                </container>
            </div>
            <input type="radio" id="inner1" name="section1" defaultChecked/>
            <input type="radio" id="inner2" name="section1"/>
            <input type="radio" id="inner3" name="section1"/>
            <input type="radio" id="inner4" name="section1"/>
            {/* <div className="Section1__menu">
                <div className="Section1__menu__inner">

                    <label className="Section1__menu__inner__tab lable1" for="inner1">Lịch sử hình thành</label>
                    <label className="Section1__menu__inner__tab lable2" for="inner2">Giới thiệu khái quát </label>
                    <label className="Section1__menu__inner__tab lable4" for="inner4">Giới thiệu khái quát về di sản</label>
                </div>
            </div> */}
            <div className="Section1__content">
                <div className="container">
                    {/* <div className="Section1__content__inner__audio">
                        <audio controls>
                            <source src="/QTDTTA/quan_the_danh_thang_trang_an_khong_gian_van_hoa.mp3" type="audio/mpeg"/>
                        </audio>
                    </div> */}
                    <div className="Section1__content__inner inner1">
                        {/* <div className="Section1__content__inner__title">
                        Lịch sử hình thành
                        </div> */}
                        {/* <div className="Section1__content__inner__text">
                        Không chỉ nổi bật với vẻ đẹp thiên nhiên hùng vĩ, Quần thể danh thắng Tràng An còn chứa đựng một không gian văn hóa tâm linh đặc sắc với sự kết hợp hoàn hảo giữa cảnh quan thiên nhiên và các giá trị văn hóa, lịch sử, tôn giáo. Không gian văn hóa tâm linh ở Tràng An phản ánh một phần quan trọng trong đời sống tâm linh của người Việt, đặc biệt là qua các chùa, đền, và những truyền thống tâm linh gắn liền với cảnh quan nơi đây.
                        </div>
                        <div className="Section1__content__inner__title">
                        Câu chuyện về đền Trần
                        </div>
                        <div className="Section1__content__inner__text">
                        Đền Trần Tràng An là một ngồi đền cổ linh thiêng và là một công trình kiến trúc bằng đá độc đáo. Ngoài ra, đây còn là nơi diễn ra các hoạt động lễ hội văn hoá truyền thống đặc sắc. Đền được xây dựng từ thời vua Đinh Tiên Hoàng, ban đầu có tên là Đền Nội Lâm. Đến thế kỷ thứ VII, vua Trần Thái Tông cho tu sửa và đổi tên thành Đền Trần như hiện nay. 
                        </div>
                        <div className="Section1__content__inner__text">
                        Truyền thuyết về mảnh đất xung quanh đền Trần từ lâu đã gắn liền với một câu chuyện bi thương. Vào thời kỳ loạn lạc, khi nhà Đinh suy vong, Lê Hoàn lên ngôi, tướng Phạm Bạch Hổ dẫn 1.000 binh sĩ vào thung Thắm với mong muốn phục hưng nhà Đinh. Tuy nhiên trước sự phản công của nhà Lê, quân của Phạm Bạch Hổ thất trận. Nhiều chiến binh trung thành với nhà Đinh chọn cái chết bằng thuốc độc thay vì đầu hàng. 
                        </div>
                        <div className="Section1__content__inner__text">
                        Máu chảy thành vũng, tạo nên Vũng Thắm (Vũng Máu). Ngôi đền nhỏ nơi đây cũng mang tên Đền Thắm. Truyền thuyết kể rằng sau đó, người dân trồng cây si trên mộ các chiến sĩ. Những cây si mọc mạnh mẽ, quấn rễ vào nhau, như biểu tượng cho sự kết nối bền chặt. Theo người dân nơi đây thì câu chuyện này chỉ là truyền thuyết, được ghi lại tại Đền Trần, trong thực tế ngồi đền này chính là nhân chứng lịch sử của triều đại nhà Trần Kháng chiến chống quân Nguyên 
                        </div> */}
                        {/* <div className="Section1__content__inner__image" >
                            <img src="/QTDTTA/Section1-1.jpg" />
                        </div>
                        <div className="Section1__content__inner__text">
                        Vào thế kỷ 10, Đinh Tiên Hoàng (Đinh Bộ Lĩnh) đã thống nhất đất nước và lên ngôi, lập ra nhà Đinh, khai sinh ra nhà nước Đại Cồ Việt, chọn Hoa Lư làm kinh đô. Ông đã tận dụng những điều kiện thiên nhiên ưu việt của khu vực này để tạo nên một trung tâm quyền lực vững mạnh. Những dãy núi đá, hang động và dòng sông không chỉ đóng vai trò phòng thủ quân sự mà còn mang ý nghĩa tâm linh, tạo ra một không gian thiêng liêng
                        </div>
                        <div className="Section1__content__inner__image" >
                            <img src="/QTDTTA/Section1-2.jpg" />
                        </div>
                        <div className="Section1__content__inner__text">
                        Quần thể danh thắng Tràng An chính là một phần của hệ sinh thái thiên nhiên đặc sắc gắn liền với Cố đô Hoa Lư. Tràng An không chỉ là biểu tượng của cảnh quan thiên nhiên kỳ vĩ mà còn là minh chứng cho mối quan hệ chặt chẽ giữa con người và thiên nhiên trong lịch sử xây dựng và phát triển của đất nước. Việc xây dựng cố đô Hoa Lư không chỉ phản ánh sự sáng tạo và sức mạnh của các triều đại, mà còn là nền tảng hình thành những danh thắng nổi tiếng mà hôm nay chúng ta gọi là Quần thể danh thắng Tràng An
                        </div>
                        <div className="Section1__content__inner__image" >
                            <img src="/QTDTTA/Section1-3.jpg" />
                        </div> */}
                        {/* <div className="Section1__content__inner__text">
                            Theo sách Đại Nam thực lục chép, sau khi giành thắng lợi trước nhà Tây Sơn (1802), vua Gia Long đã nghĩ ngay đến việc xây dựng kinh đô cho vương triều Nguyễn. Nhận thấy thế đất vùng Phú Xuân có nhiều thuận lợi vì vậy năm 1803, vua sai giám thành Nguyễn Văn Yến ra bốn mặt ngoài thành cũ
                        </div>
                        <div className="Section1__content__inner__icon">
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M14.5675 0.246094C15.1418 -0.0820313 15.8507 -0.0820313 16.4308 0.246094L26.4972 5.99414L26.7492 6.09375V6.14648L29.5558 7.75195C30.2941 8.17383 30.6574 9.04102 30.4406 9.86133C30.2238 10.6816 29.4797 11.2559 28.63 11.2559H2.37418C1.52457 11.2559 0.780432 10.6816 0.563636 9.86133C0.346839 9.04102 0.71012 8.17383 1.4484 7.75195L4.24918 6.14648V6.09375L4.507 6L14.5675 0.246094ZM4.24918 13.125H7.99918V24.375H10.3429V13.125H14.0929V24.375H16.9054V13.125H20.6554V24.375H22.9992V13.125H26.7492V24.627C26.7843 24.6445 26.8195 24.668 26.8547 24.6914L29.6672 26.5664C30.3527 27.0234 30.6632 27.8789 30.423 28.6699C30.1828 29.4609 29.4504 30 28.6242 30H2.37418C1.54801 30 0.821448 29.4609 0.581214 28.6699C0.340979 27.8789 0.645667 27.0234 1.33707 26.5664L4.14957 24.6914C4.18473 24.668 4.21989 24.6504 4.25504 24.627V13.125H4.24918Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    Founded 1802
                                </div>
                            </div>
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M3.0293 17.291L4.88672 17.6602C5.34961 17.7539 5.82422 17.6074 6.1582 17.2734L7.06055 16.3711C7.74023 15.6914 8.88281 15.8789 9.31055 16.7344L9.85547 17.8184C10.1367 18.3809 10.7109 18.7383 11.3438 18.7383C12.2344 18.7383 12.873 17.8828 12.6152 17.0273L12.2637 15.8613C11.9941 14.959 12.668 14.0508 13.6113 14.0508H13.7461C14.5312 14.0508 15.2637 13.6582 15.6973 13.0078L16.3242 12.0645C16.6523 11.5664 16.6348 10.916 16.2773 10.4414L15.334 9.18164C14.7305 8.37891 15.1406 7.21875 16.1191 6.97266L17.1152 6.7207C17.5547 6.60938 17.9121 6.29883 18.082 5.87695L19.043 3.48047C17.7773 3.05273 16.418 2.8125 15 2.8125C8.26758 2.8125 2.8125 8.26758 2.8125 15C2.8125 15.7852 2.88867 16.5527 3.0293 17.291ZM26.918 17.5605C26.7422 17.543 26.5664 17.5547 26.3906 17.6074L25.4648 17.8652C25.0723 17.9766 24.6562 17.8125 24.4395 17.4727L24.3223 17.291C23.9707 16.7402 23.3613 16.4062 22.7051 16.4062C22.0488 16.4062 21.4395 16.7402 21.0879 17.291L20.7305 17.8477C20.6484 17.9766 20.5312 18.0879 20.3965 18.1582L18.2812 19.3418C17.2207 19.9336 16.7871 21.2402 17.2852 22.3477L17.6074 23.0742C18.1113 24.1992 19.4062 24.7441 20.5664 24.3105L20.7188 24.252C21.3047 24.0352 21.9668 24.123 22.4707 24.4922L22.5586 24.5566C24.7383 22.8281 26.3145 20.373 26.918 17.5547V17.5605ZM0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM8.4668 20.3965C8.34375 20.9004 8.64844 21.4102 9.14648 21.5332L11.0215 22.002C11.5254 22.125 12.0352 21.8203 12.1582 21.3223C12.2812 20.8242 11.9766 20.3086 11.4785 20.1855L9.60352 19.7168C9.09961 19.5938 8.58984 19.8984 8.4668 20.3965ZM13.8574 19.2246C13.7344 19.7285 14.0391 20.2383 14.5371 20.3613C15.0352 20.4844 15.5508 20.1797 15.6738 19.6816L16.1426 17.8066C16.2656 17.3027 15.9609 16.793 15.4629 16.6699C14.9648 16.5469 14.4492 16.8516 14.3262 17.3496L13.8574 19.2246ZM20.1094 6.66211C19.6465 6.42773 19.084 6.62109 18.8496 7.08398L17.9121 8.95898C17.6777 9.42188 17.8711 9.98438 18.334 10.2188C18.7969 10.4531 19.3594 10.2598 19.5938 9.79688L20.5312 7.92188C20.7656 7.45898 20.5723 6.89648 20.1094 6.66211Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    UNESCO Site
                                </div>
                            </div>
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                <path d="M8.67188 26.2324L7.93359 27.9609C6.83789 27.4043 5.83008 26.7188 4.91602 25.916L6.24609 24.5859C6.97852 25.2246 7.79297 25.7812 8.67188 26.2324ZM1.88086 15.9375H0C0.0820312 17.1797 0.316406 18.3809 0.685547 19.5176L2.43164 18.8203C2.14453 17.9004 1.95117 16.9336 1.88086 15.9375ZM1.88086 14.0625C1.96289 12.9609 2.18555 11.8945 2.53125 10.8926L0.802734 10.1543C0.363281 11.3848 0.0878906 12.6973 0 14.0625H1.88086ZM3.26953 9.16992C3.72656 8.29688 4.27734 7.48242 4.91602 6.73828L3.58594 5.4082C2.7832 6.32227 2.0918 7.33008 1.54102 8.42578L3.26953 9.16992ZM22.7637 24.5859C21.9492 25.2891 21.041 25.8926 20.0625 26.3672L20.7598 28.1133C21.9727 27.5332 23.0918 26.7891 24.0938 25.9102L22.7637 24.5859ZM6.24023 5.41406C7.05469 4.71094 7.96289 4.10742 8.94141 3.63281L8.24414 1.88672C7.03125 2.4668 5.91211 3.21094 4.91602 4.08984L6.24023 5.41406ZM25.7344 20.8301C25.2773 21.7031 24.7266 22.5176 24.0879 23.2617L25.418 24.5918C26.2207 23.6777 26.9121 22.6641 27.4629 21.5742L25.7344 20.8301ZM27.123 15.9375C27.041 17.0391 26.8184 18.1055 26.4727 19.1074L28.2012 19.8457C28.6406 18.6094 28.916 17.2969 28.998 15.9316H27.123V15.9375ZM18.3223 27.0703C17.4023 27.3633 16.4355 27.5508 15.4395 27.6211V29.502C16.6816 29.4199 17.8828 29.1855 19.0195 28.8164L18.3223 27.0703ZM13.5645 27.6211C12.4629 27.5391 11.3965 27.3164 10.3945 26.9707L9.65625 28.6992C10.8926 29.1387 12.2051 29.4141 13.5703 29.4961V27.6211H13.5645ZM26.5723 11.1797C26.8652 12.0996 27.0527 13.0664 27.123 14.0625H29.0039C28.9219 12.8203 28.6875 11.6191 28.3184 10.4824L26.5723 11.1797ZM4.91602 23.2617C4.21289 22.4473 3.60938 21.5391 3.13477 20.5605L1.38867 21.2578C1.96875 22.4707 2.71289 23.5898 3.5918 24.5918L4.91602 23.2617ZM15.4395 2.37891C16.541 2.46094 17.6016 2.68359 18.6094 3.0293L19.3477 1.30078C18.1172 0.861328 16.8047 0.585938 15.4395 0.498047V2.37891ZM10.6816 2.92969C11.6016 2.63672 12.5684 2.44922 13.5645 2.37891V0.498047C12.3223 0.580078 11.1211 0.814453 9.98438 1.18359L10.6816 2.92969ZM25.418 5.4082L24.0879 6.73828C24.791 7.55273 25.3945 8.46094 25.875 9.43945L27.6211 8.74219C27.041 7.5293 26.2969 6.41016 25.418 5.4082ZM22.7637 5.41406L24.0938 4.08398C23.1797 3.28125 22.1719 2.58984 21.0762 2.03906L20.3379 3.76758C21.2051 4.22461 22.0254 4.77539 22.7637 5.41406Z" fill="#991B1B"/>
                                <path d="M14.502 22.9688C15.408 22.9688 16.1426 22.2342 16.1426 21.3281C16.1426 20.422 15.408 19.6875 14.502 19.6875C13.5959 19.6875 12.8613 20.422 12.8613 21.3281C12.8613 22.2342 13.5959 22.9688 14.502 22.9688Z" fill="#991B1B"/>
                                <path d="M14.9531 18.2812H14.0156C13.6289 18.2812 13.3124 17.9648 13.3124 17.5781C13.3124 13.418 17.8476 13.834 17.8476 11.2617C17.8476 10.0898 16.8046 8.90625 14.4843 8.90625C12.7792 8.90625 11.8886 9.46875 11.0156 10.5879C10.7871 10.8809 10.3652 10.9395 10.0664 10.7285L9.29877 10.1895C8.97065 9.96094 8.89448 9.49805 9.14643 9.18164C10.3886 7.58789 11.8652 6.5625 14.4902 6.5625C17.5546 6.5625 20.1972 8.30859 20.1972 11.2617C20.1972 15.2227 15.6621 14.9824 15.6621 17.5781C15.6562 17.9648 15.3398 18.2812 14.9531 18.2812Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    Imperial City
                                </div>
                            </div>
                        </div>
                        <div className="Section1__content__inner__text">
                            Vua định cách thức xây thành, giao cho Bộ Lễ chọn ngày lành tế trời đất, cáo việc khởi công, phái các quân mở đường sá, làm đất cát, sai Phạm Văn Nhân, Lê Chất và Nguyễn Văn Khiêm trông coi công việc.
                        </div>
                        <div className="Section1__content__inner__text">
                            Năm 1805, vua Gia Long cho bắt đầu tiến hành xây dựng Kinh thành Huế. Đến năm 1820, vua Gia Long băng hà nhưng công cuộc xây dựng Kinh thành Huế vẫn còn dang dỡ, lúc bấy giờ vua Minh Mạng lên nối ngôi vua cha và tiếp tục xây dựng Kinh thành Huế. Đến tháng 6 năm 1832, vua Minh Mạng bố cáo công cuộc xây dựng Kinh thành Huế đã hoàn thành.
                        </div>
                        <div className="Section1__content__inner__video">
                            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/0VE0t3u69CI?si=hpF0Ax0au-uUVpcV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="Section1__content__inner__video__disc">
                                Video: <b> Gia Long – kiến trúc sư hoạch định xây dựng Kinh thành Huế</b>
                            </div>
                        </div>
                        <div className="Section1__content__inner__footer">
                            Theo Đại Việt sử ký toàn thư
                        </div> */}
                        <Section4/>
                    </div>
                    <div className="Section1__content__inner inner2">
                        <div className="Section1__content__inner__title">
                        Giới thiệu khái quát
                        </div>
                        {/* <div className="Section1__content__inner__disc">
                            Gia Long – kiến trúc sư hoạch định xây dựng Kinh thành Huế
                        </div> */}
                        <div className="Section1__content__inner__text">
                        Quần thể danh thắng Tràng An là di sản thế giới được UNESCO công nhận vào năm 2014, tọa lạc tại Ninh Bình. Nơi đây gây ấn tượng với những dãy núi đá vôi trùng điệp, hang động ngập nước huyền bí và hệ sinh thái phong phú. Đây là một điểm đến tuyệt vời để du khách hòa mình vào thiên nhiên hoang sơ để khám phá những giá trị văn hóa, lịch sử sâu sắc. 
                        </div>
                        <div className="Section1__content__inner__text">
                        Quần thể danh thắng Tràng An bao gồm ba khu vực liền kề nhau là: Di tích quốc gia đặc biệt Cố Đô Hoa Lư, Khu danh thắng Tràng An - Tam Cốc - Bích Động và Rừng nguyên sinh đặc dụng Hoa Lư, thuộc địa bàn các huyện, thị xã và thành phố thuộc tỉnh Ninh Bình. Quần thể danh thắng Tràng An là vùng bán sơn địa, đan xen giữa các dãy đá vôi là hệ thống đa dạng các thung lũng, đầm lầy, hệ thống hang động xuyên thủy, thảm thực vật nguyên sinh phát triển rậm rạp trên đá vôi như ở đền Trần - Tràng An, Trường Yên, Bái Đính, rừng đặc dụng Hoa Lư,...
                        </div>
                        <div className="Section1__content__inner__text">
                        Hòa quyện với cấu trúc và vẻ đẹp của cảnh quan các-xtơ đá vôi là thảm rừng nhiệt đới nguyên sinh bao trùm khắp cảnh quan. Những ngôi chùa, đền tựa mình bên vách đá với mái ngói cổ kính, rêu phong, thâm trầm đồng điệu với cảnh quan sông nước núi đá. Chính những rặng núi cổ kính, các hang động bí ẩn và nhiều địa điểm linh thiêng của Tràng An đã truyền cảm hứng cho con người, thu hút du khách qua nhiều thế hệ.
                        </div>
                        {/* <div className="Section1__content__inner__icon">
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M14.5675 0.246094C15.1418 -0.0820313 15.8507 -0.0820313 16.4308 0.246094L26.4972 5.99414L26.7492 6.09375V6.14648L29.5558 7.75195C30.2941 8.17383 30.6574 9.04102 30.4406 9.86133C30.2238 10.6816 29.4797 11.2559 28.63 11.2559H2.37418C1.52457 11.2559 0.780432 10.6816 0.563636 9.86133C0.346839 9.04102 0.71012 8.17383 1.4484 7.75195L4.24918 6.14648V6.09375L4.507 6L14.5675 0.246094ZM4.24918 13.125H7.99918V24.375H10.3429V13.125H14.0929V24.375H16.9054V13.125H20.6554V24.375H22.9992V13.125H26.7492V24.627C26.7843 24.6445 26.8195 24.668 26.8547 24.6914L29.6672 26.5664C30.3527 27.0234 30.6632 27.8789 30.423 28.6699C30.1828 29.4609 29.4504 30 28.6242 30H2.37418C1.54801 30 0.821448 29.4609 0.581214 28.6699C0.340979 27.8789 0.645667 27.0234 1.33707 26.5664L4.14957 24.6914C4.18473 24.668 4.21989 24.6504 4.25504 24.627V13.125H4.24918Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    Founded 1802
                                </div>
                            </div>
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M3.0293 17.291L4.88672 17.6602C5.34961 17.7539 5.82422 17.6074 6.1582 17.2734L7.06055 16.3711C7.74023 15.6914 8.88281 15.8789 9.31055 16.7344L9.85547 17.8184C10.1367 18.3809 10.7109 18.7383 11.3438 18.7383C12.2344 18.7383 12.873 17.8828 12.6152 17.0273L12.2637 15.8613C11.9941 14.959 12.668 14.0508 13.6113 14.0508H13.7461C14.5312 14.0508 15.2637 13.6582 15.6973 13.0078L16.3242 12.0645C16.6523 11.5664 16.6348 10.916 16.2773 10.4414L15.334 9.18164C14.7305 8.37891 15.1406 7.21875 16.1191 6.97266L17.1152 6.7207C17.5547 6.60938 17.9121 6.29883 18.082 5.87695L19.043 3.48047C17.7773 3.05273 16.418 2.8125 15 2.8125C8.26758 2.8125 2.8125 8.26758 2.8125 15C2.8125 15.7852 2.88867 16.5527 3.0293 17.291ZM26.918 17.5605C26.7422 17.543 26.5664 17.5547 26.3906 17.6074L25.4648 17.8652C25.0723 17.9766 24.6562 17.8125 24.4395 17.4727L24.3223 17.291C23.9707 16.7402 23.3613 16.4062 22.7051 16.4062C22.0488 16.4062 21.4395 16.7402 21.0879 17.291L20.7305 17.8477C20.6484 17.9766 20.5312 18.0879 20.3965 18.1582L18.2812 19.3418C17.2207 19.9336 16.7871 21.2402 17.2852 22.3477L17.6074 23.0742C18.1113 24.1992 19.4062 24.7441 20.5664 24.3105L20.7188 24.252C21.3047 24.0352 21.9668 24.123 22.4707 24.4922L22.5586 24.5566C24.7383 22.8281 26.3145 20.373 26.918 17.5547V17.5605ZM0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM8.4668 20.3965C8.34375 20.9004 8.64844 21.4102 9.14648 21.5332L11.0215 22.002C11.5254 22.125 12.0352 21.8203 12.1582 21.3223C12.2812 20.8242 11.9766 20.3086 11.4785 20.1855L9.60352 19.7168C9.09961 19.5938 8.58984 19.8984 8.4668 20.3965ZM13.8574 19.2246C13.7344 19.7285 14.0391 20.2383 14.5371 20.3613C15.0352 20.4844 15.5508 20.1797 15.6738 19.6816L16.1426 17.8066C16.2656 17.3027 15.9609 16.793 15.4629 16.6699C14.9648 16.5469 14.4492 16.8516 14.3262 17.3496L13.8574 19.2246ZM20.1094 6.66211C19.6465 6.42773 19.084 6.62109 18.8496 7.08398L17.9121 8.95898C17.6777 9.42188 17.8711 9.98438 18.334 10.2188C18.7969 10.4531 19.3594 10.2598 19.5938 9.79688L20.5312 7.92188C20.7656 7.45898 20.5723 6.89648 20.1094 6.66211Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    UNESCO Site
                                </div>
                            </div>
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                <path d="M8.67188 26.2324L7.93359 27.9609C6.83789 27.4043 5.83008 26.7188 4.91602 25.916L6.24609 24.5859C6.97852 25.2246 7.79297 25.7812 8.67188 26.2324ZM1.88086 15.9375H0C0.0820312 17.1797 0.316406 18.3809 0.685547 19.5176L2.43164 18.8203C2.14453 17.9004 1.95117 16.9336 1.88086 15.9375ZM1.88086 14.0625C1.96289 12.9609 2.18555 11.8945 2.53125 10.8926L0.802734 10.1543C0.363281 11.3848 0.0878906 12.6973 0 14.0625H1.88086ZM3.26953 9.16992C3.72656 8.29688 4.27734 7.48242 4.91602 6.73828L3.58594 5.4082C2.7832 6.32227 2.0918 7.33008 1.54102 8.42578L3.26953 9.16992ZM22.7637 24.5859C21.9492 25.2891 21.041 25.8926 20.0625 26.3672L20.7598 28.1133C21.9727 27.5332 23.0918 26.7891 24.0938 25.9102L22.7637 24.5859ZM6.24023 5.41406C7.05469 4.71094 7.96289 4.10742 8.94141 3.63281L8.24414 1.88672C7.03125 2.4668 5.91211 3.21094 4.91602 4.08984L6.24023 5.41406ZM25.7344 20.8301C25.2773 21.7031 24.7266 22.5176 24.0879 23.2617L25.418 24.5918C26.2207 23.6777 26.9121 22.6641 27.4629 21.5742L25.7344 20.8301ZM27.123 15.9375C27.041 17.0391 26.8184 18.1055 26.4727 19.1074L28.2012 19.8457C28.6406 18.6094 28.916 17.2969 28.998 15.9316H27.123V15.9375ZM18.3223 27.0703C17.4023 27.3633 16.4355 27.5508 15.4395 27.6211V29.502C16.6816 29.4199 17.8828 29.1855 19.0195 28.8164L18.3223 27.0703ZM13.5645 27.6211C12.4629 27.5391 11.3965 27.3164 10.3945 26.9707L9.65625 28.6992C10.8926 29.1387 12.2051 29.4141 13.5703 29.4961V27.6211H13.5645ZM26.5723 11.1797C26.8652 12.0996 27.0527 13.0664 27.123 14.0625H29.0039C28.9219 12.8203 28.6875 11.6191 28.3184 10.4824L26.5723 11.1797ZM4.91602 23.2617C4.21289 22.4473 3.60938 21.5391 3.13477 20.5605L1.38867 21.2578C1.96875 22.4707 2.71289 23.5898 3.5918 24.5918L4.91602 23.2617ZM15.4395 2.37891C16.541 2.46094 17.6016 2.68359 18.6094 3.0293L19.3477 1.30078C18.1172 0.861328 16.8047 0.585938 15.4395 0.498047V2.37891ZM10.6816 2.92969C11.6016 2.63672 12.5684 2.44922 13.5645 2.37891V0.498047C12.3223 0.580078 11.1211 0.814453 9.98438 1.18359L10.6816 2.92969ZM25.418 5.4082L24.0879 6.73828C24.791 7.55273 25.3945 8.46094 25.875 9.43945L27.6211 8.74219C27.041 7.5293 26.2969 6.41016 25.418 5.4082ZM22.7637 5.41406L24.0938 4.08398C23.1797 3.28125 22.1719 2.58984 21.0762 2.03906L20.3379 3.76758C21.2051 4.22461 22.0254 4.77539 22.7637 5.41406Z" fill="#991B1B"/>
                                <path d="M14.502 22.9688C15.408 22.9688 16.1426 22.2342 16.1426 21.3281C16.1426 20.422 15.408 19.6875 14.502 19.6875C13.5959 19.6875 12.8613 20.422 12.8613 21.3281C12.8613 22.2342 13.5959 22.9688 14.502 22.9688Z" fill="#991B1B"/>
                                <path d="M14.9531 18.2812H14.0156C13.6289 18.2812 13.3124 17.9648 13.3124 17.5781C13.3124 13.418 17.8476 13.834 17.8476 11.2617C17.8476 10.0898 16.8046 8.90625 14.4843 8.90625C12.7792 8.90625 11.8886 9.46875 11.0156 10.5879C10.7871 10.8809 10.3652 10.9395 10.0664 10.7285L9.29877 10.1895C8.97065 9.96094 8.89448 9.49805 9.14643 9.18164C10.3886 7.58789 11.8652 6.5625 14.4902 6.5625C17.5546 6.5625 20.1972 8.30859 20.1972 11.2617C20.1972 15.2227 15.6621 14.9824 15.6621 17.5781C15.6562 17.9648 15.3398 18.2812 14.9531 18.2812Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    Imperial City
                                </div>
                            </div>
                        </div>
                        <div className="Section1__content__inner__text">
                            Vua định cách thức xây thành, giao cho Bộ Lễ chọn ngày lành tế trời đất, cáo việc khởi công, phái các quân mở đường sá, làm đất cát, sai Phạm Văn Nhân, Lê Chất và Nguyễn Văn Khiêm trông coi công việc.
                        </div>
                        <div className="Section1__content__inner__text">
                            Năm 1805, vua Gia Long cho bắt đầu tiến hành xây dựng Kinh thành Huế. Đến năm 1820, vua Gia Long băng hà nhưng công cuộc xây dựng Kinh thành Huế vẫn còn dang dỡ, lúc bấy giờ vua Minh Mạng lên nối ngôi vua cha và tiếp tục xây dựng Kinh thành Huế. Đến tháng 6 năm 1832, vua Minh Mạng bố cáo công cuộc xây dựng Kinh thành Huế đã hoàn thành.
                        </div>
                        <div className="Section1__content__inner__video">
                            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/0VE0t3u69CI?si=hpF0Ax0au-uUVpcV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="Section1__content__inner__video__disc">
                                Video: <b> Gia Long – kiến trúc sư hoạch định xây dựng Kinh thành Huế</b>
                            </div>
                        </div>
                        <div className="Section1__content__inner__footer">
                            Theo Đại Việt sử ký toàn thư
                        </div> */}
                    </div>
                    <div className="Section1__content__inner inner3">
                        <div className="Section1__content__inner__title">
                            Giới thiệu khái quát
                        </div>
                        <div className="Section1__content__inner__text">
                            Quần thể di tích Cố đô Huế bao gồm những di tích tiêu biểu như Kinh thành, Hoàng thành và Tử Cấm thành, hệ thống các lăng tẩm của vua triều Nguyễn, Cung An Định, Trai cung, điện Hòn Chén, Văn miếu và Võ miếu,... những công trình kiến trúc này được kết hợp độc đáo giữa nguyên tắc kiến trúc truyền thống Việt Nam với tư tưởng triết lý phương Đông, cùng những đặc điểm mang dấu ấn kiến trúc phương Tây.
                        </div>
                        <div className="Section1__content__inner__image" >
                            <img src="/QTDTCDH/Section1-2.webp" />
                        </div>
                        <div className="Section1__content__inner__video">
                            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/jOKVgM3yUjE?si=HWAy-_QPGDcprus0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="Section1__content__inner inner4">
                        <div className="Section1__content__inner__title">
                            Giới thiệu khái quát về di sản
                        </div>
                        <div className="Section1__content__inner__disc">
                            Gia Long – kiến trúc sư hoạch định xây dựng Kinh thành Huế
                        </div>
                        <div className="Section1__content__inner__text">
                            Theo sách Đại Nam thực lục chép, sau khi giành thắng lợi trước nhà Tây Sơn (1802), vua Gia Long đã nghĩ ngay đến việc xây dựng kinh đô cho vương triều Nguyễn. Nhận thấy thế đất vùng Phú Xuân có nhiều thuận lợi vì vậy năm 1803, vua sai giám thành Nguyễn Văn Yến ra bốn mặt ngoài thành cũ
                        </div>
                        <div className="Section1__content__inner__icon">
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M14.5675 0.246094C15.1418 -0.0820313 15.8507 -0.0820313 16.4308 0.246094L26.4972 5.99414L26.7492 6.09375V6.14648L29.5558 7.75195C30.2941 8.17383 30.6574 9.04102 30.4406 9.86133C30.2238 10.6816 29.4797 11.2559 28.63 11.2559H2.37418C1.52457 11.2559 0.780432 10.6816 0.563636 9.86133C0.346839 9.04102 0.71012 8.17383 1.4484 7.75195L4.24918 6.14648V6.09375L4.507 6L14.5675 0.246094ZM4.24918 13.125H7.99918V24.375H10.3429V13.125H14.0929V24.375H16.9054V13.125H20.6554V24.375H22.9992V13.125H26.7492V24.627C26.7843 24.6445 26.8195 24.668 26.8547 24.6914L29.6672 26.5664C30.3527 27.0234 30.6632 27.8789 30.423 28.6699C30.1828 29.4609 29.4504 30 28.6242 30H2.37418C1.54801 30 0.821448 29.4609 0.581214 28.6699C0.340979 27.8789 0.645667 27.0234 1.33707 26.5664L4.14957 24.6914C4.18473 24.668 4.21989 24.6504 4.25504 24.627V13.125H4.24918Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    Founded 1802
                                </div>
                            </div>
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M3.0293 17.291L4.88672 17.6602C5.34961 17.7539 5.82422 17.6074 6.1582 17.2734L7.06055 16.3711C7.74023 15.6914 8.88281 15.8789 9.31055 16.7344L9.85547 17.8184C10.1367 18.3809 10.7109 18.7383 11.3438 18.7383C12.2344 18.7383 12.873 17.8828 12.6152 17.0273L12.2637 15.8613C11.9941 14.959 12.668 14.0508 13.6113 14.0508H13.7461C14.5312 14.0508 15.2637 13.6582 15.6973 13.0078L16.3242 12.0645C16.6523 11.5664 16.6348 10.916 16.2773 10.4414L15.334 9.18164C14.7305 8.37891 15.1406 7.21875 16.1191 6.97266L17.1152 6.7207C17.5547 6.60938 17.9121 6.29883 18.082 5.87695L19.043 3.48047C17.7773 3.05273 16.418 2.8125 15 2.8125C8.26758 2.8125 2.8125 8.26758 2.8125 15C2.8125 15.7852 2.88867 16.5527 3.0293 17.291ZM26.918 17.5605C26.7422 17.543 26.5664 17.5547 26.3906 17.6074L25.4648 17.8652C25.0723 17.9766 24.6562 17.8125 24.4395 17.4727L24.3223 17.291C23.9707 16.7402 23.3613 16.4062 22.7051 16.4062C22.0488 16.4062 21.4395 16.7402 21.0879 17.291L20.7305 17.8477C20.6484 17.9766 20.5312 18.0879 20.3965 18.1582L18.2812 19.3418C17.2207 19.9336 16.7871 21.2402 17.2852 22.3477L17.6074 23.0742C18.1113 24.1992 19.4062 24.7441 20.5664 24.3105L20.7188 24.252C21.3047 24.0352 21.9668 24.123 22.4707 24.4922L22.5586 24.5566C24.7383 22.8281 26.3145 20.373 26.918 17.5547V17.5605ZM0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM8.4668 20.3965C8.34375 20.9004 8.64844 21.4102 9.14648 21.5332L11.0215 22.002C11.5254 22.125 12.0352 21.8203 12.1582 21.3223C12.2812 20.8242 11.9766 20.3086 11.4785 20.1855L9.60352 19.7168C9.09961 19.5938 8.58984 19.8984 8.4668 20.3965ZM13.8574 19.2246C13.7344 19.7285 14.0391 20.2383 14.5371 20.3613C15.0352 20.4844 15.5508 20.1797 15.6738 19.6816L16.1426 17.8066C16.2656 17.3027 15.9609 16.793 15.4629 16.6699C14.9648 16.5469 14.4492 16.8516 14.3262 17.3496L13.8574 19.2246ZM20.1094 6.66211C19.6465 6.42773 19.084 6.62109 18.8496 7.08398L17.9121 8.95898C17.6777 9.42188 17.8711 9.98438 18.334 10.2188C18.7969 10.4531 19.3594 10.2598 19.5938 9.79688L20.5312 7.92188C20.7656 7.45898 20.5723 6.89648 20.1094 6.66211Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    UNESCO Site
                                </div>
                            </div>
                            <div className="Section1__content__inner__icon__inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                <path d="M8.67188 26.2324L7.93359 27.9609C6.83789 27.4043 5.83008 26.7188 4.91602 25.916L6.24609 24.5859C6.97852 25.2246 7.79297 25.7812 8.67188 26.2324ZM1.88086 15.9375H0C0.0820312 17.1797 0.316406 18.3809 0.685547 19.5176L2.43164 18.8203C2.14453 17.9004 1.95117 16.9336 1.88086 15.9375ZM1.88086 14.0625C1.96289 12.9609 2.18555 11.8945 2.53125 10.8926L0.802734 10.1543C0.363281 11.3848 0.0878906 12.6973 0 14.0625H1.88086ZM3.26953 9.16992C3.72656 8.29688 4.27734 7.48242 4.91602 6.73828L3.58594 5.4082C2.7832 6.32227 2.0918 7.33008 1.54102 8.42578L3.26953 9.16992ZM22.7637 24.5859C21.9492 25.2891 21.041 25.8926 20.0625 26.3672L20.7598 28.1133C21.9727 27.5332 23.0918 26.7891 24.0938 25.9102L22.7637 24.5859ZM6.24023 5.41406C7.05469 4.71094 7.96289 4.10742 8.94141 3.63281L8.24414 1.88672C7.03125 2.4668 5.91211 3.21094 4.91602 4.08984L6.24023 5.41406ZM25.7344 20.8301C25.2773 21.7031 24.7266 22.5176 24.0879 23.2617L25.418 24.5918C26.2207 23.6777 26.9121 22.6641 27.4629 21.5742L25.7344 20.8301ZM27.123 15.9375C27.041 17.0391 26.8184 18.1055 26.4727 19.1074L28.2012 19.8457C28.6406 18.6094 28.916 17.2969 28.998 15.9316H27.123V15.9375ZM18.3223 27.0703C17.4023 27.3633 16.4355 27.5508 15.4395 27.6211V29.502C16.6816 29.4199 17.8828 29.1855 19.0195 28.8164L18.3223 27.0703ZM13.5645 27.6211C12.4629 27.5391 11.3965 27.3164 10.3945 26.9707L9.65625 28.6992C10.8926 29.1387 12.2051 29.4141 13.5703 29.4961V27.6211H13.5645ZM26.5723 11.1797C26.8652 12.0996 27.0527 13.0664 27.123 14.0625H29.0039C28.9219 12.8203 28.6875 11.6191 28.3184 10.4824L26.5723 11.1797ZM4.91602 23.2617C4.21289 22.4473 3.60938 21.5391 3.13477 20.5605L1.38867 21.2578C1.96875 22.4707 2.71289 23.5898 3.5918 24.5918L4.91602 23.2617ZM15.4395 2.37891C16.541 2.46094 17.6016 2.68359 18.6094 3.0293L19.3477 1.30078C18.1172 0.861328 16.8047 0.585938 15.4395 0.498047V2.37891ZM10.6816 2.92969C11.6016 2.63672 12.5684 2.44922 13.5645 2.37891V0.498047C12.3223 0.580078 11.1211 0.814453 9.98438 1.18359L10.6816 2.92969ZM25.418 5.4082L24.0879 6.73828C24.791 7.55273 25.3945 8.46094 25.875 9.43945L27.6211 8.74219C27.041 7.5293 26.2969 6.41016 25.418 5.4082ZM22.7637 5.41406L24.0938 4.08398C23.1797 3.28125 22.1719 2.58984 21.0762 2.03906L20.3379 3.76758C21.2051 4.22461 22.0254 4.77539 22.7637 5.41406Z" fill="#991B1B"/>
                                <path d="M14.502 22.9688C15.408 22.9688 16.1426 22.2342 16.1426 21.3281C16.1426 20.422 15.408 19.6875 14.502 19.6875C13.5959 19.6875 12.8613 20.422 12.8613 21.3281C12.8613 22.2342 13.5959 22.9688 14.502 22.9688Z" fill="#991B1B"/>
                                <path d="M14.9531 18.2812H14.0156C13.6289 18.2812 13.3124 17.9648 13.3124 17.5781C13.3124 13.418 17.8476 13.834 17.8476 11.2617C17.8476 10.0898 16.8046 8.90625 14.4843 8.90625C12.7792 8.90625 11.8886 9.46875 11.0156 10.5879C10.7871 10.8809 10.3652 10.9395 10.0664 10.7285L9.29877 10.1895C8.97065 9.96094 8.89448 9.49805 9.14643 9.18164C10.3886 7.58789 11.8652 6.5625 14.4902 6.5625C17.5546 6.5625 20.1972 8.30859 20.1972 11.2617C20.1972 15.2227 15.6621 14.9824 15.6621 17.5781C15.6562 17.9648 15.3398 18.2812 14.9531 18.2812Z" fill="#991B1B"/>
                                </svg>
                                <div className="Section1__content__inner__icon__inner__text">
                                    Imperial City
                                </div>
                            </div>
                        </div>
                        <div className="Section1__content__inner__text">
                            Vua định cách thức xây thành, giao cho Bộ Lễ chọn ngày lành tế trời đất, cáo việc khởi công, phái các quân mở đường sá, làm đất cát, sai Phạm Văn Nhân, Lê Chất và Nguyễn Văn Khiêm trông coi công việc.
                        </div>
                        <div className="Section1__content__inner__text">
                            Năm 1805, vua Gia Long cho bắt đầu tiến hành xây dựng Kinh thành Huế. Đến năm 1820, vua Gia Long băng hà nhưng công cuộc xây dựng Kinh thành Huế vẫn còn dang dỡ, lúc bấy giờ vua Minh Mạng lên nối ngôi vua cha và tiếp tục xây dựng Kinh thành Huế. Đến tháng 6 năm 1832, vua Minh Mạng bố cáo công cuộc xây dựng Kinh thành Huế đã hoàn thành.
                        </div>
                        <div className="Section1__content__inner__video">
                            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/0VE0t3u69CI?si=hpF0Ax0au-uUVpcV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="Section1__content__inner__video__disc">
                                Video: <b> Gia Long – kiến trúc sư hoạch định xây dựng Kinh thành Huế</b>
                            </div>
                        </div>
                        <div className="Section1__content__inner__footer">
                            Theo Đại Việt sử ký toàn thư
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1p2;