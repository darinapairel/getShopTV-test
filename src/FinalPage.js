import './scss/FinalPage.scss'
import qr from './2ndQR.png'

const FinalPage = () => {

    return(
        <div className="final-page--container">
            <button className="button-close">x</button>
            <aside>
                <h1>ЗАЯВКА ПРИНЯТА</h1>
                <p>Держите телефон под рукой. 
                    Скоро с Вами свяжется менеджер.
                </p>
            </aside>
            <div className="qr-info">
                <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                <img src={qr} alt="QR-code" />
            </div>
        </div>
    )
}

export default FinalPage