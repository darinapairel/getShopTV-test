import './scss/BannerPage.scss'
import video from './plushkami.mp4'
import qr from './qr.png'
import { useEffect, useState } from 'react'

const BannerPage = () => {

    const [isActive, setActive] = useState(false)
    useEffect(()=>
        setTimeout( () => {
            setActive(true)
        }
        , 5000 ))
        
    
    return (
        
        <div className="banner-page--container">
            <video autoPlay muted loop id="plushkami-video">
                <source src={video} type="video/mp4" />
            </video>

            <div className={`banner-page--banner  ${isActive ?  '' : 'banner-hide'}`}>
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