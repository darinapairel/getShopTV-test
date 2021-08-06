import './scss/BannerPageStyles.scss'
import video from './plushkami.mp4'
import qr from './qr.png'

const BannerPage = () => {

    return (
        <div className="banner-page--container">
                <video autoPlay muted loop id="plushkami-video">
                    <source src={video} type="video/mp4" />
                </video>
            <div className="banner-page--banner">
                <p>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                    ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                <img src={qr} alt="QR-code"/>
                <p>Сканируйте QR-код 
                    или нажмите ОК</p>
                <button>OK</button>
            </div>
        </div> 
    )
}
 

export default BannerPage