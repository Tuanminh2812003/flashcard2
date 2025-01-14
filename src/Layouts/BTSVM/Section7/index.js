

function Section7(){
    return(
        <>
            <div className="Section7" style={{backgroundColor: "#E3DAD2"}}>
                <div className="container">
                    <div className="Section7__inner">
                        <div className="Section7__inner__title">
                            Không gian trách nhiệm
                        </div>
                        <div className="Section7__inner__disc">
                        Bạn hãy thiết kế một video/poster hoặc lá thư để thể hiện chủ đề: Đề xuất những biện pháp bảo tồn và quảng bá hình ảnh di sản Quần thể di tích Cố đô Huế. 
                        </div>
                        <div className="Section7__inner__disc">
                        Những sản phẩm tốt sẽ được cấp Giấy chứng nhận “Cá nhân có đề xuất xuất sắc trong bảo tồn và quảng bá hình ảnh di sản văn hóa Quần thể di tích Cố đô Huế”. 
                        </div>
                        <form>
                            <label htmlFor="form__name">Họ và tên</label>
                            <input type="text" id="form__name"/>
                            <label htmlFor="form__email">Email</label>
                            <input type="email" id="form__email"/>
                            <label>Đính kèm file</label>
                            <input type="file" className="Section7__inner__form"/>
                            <button>Gửi phản hồi của bạn</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section7;