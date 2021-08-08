import { useEffect, useState } from 'react'
import NumPad from './NumPad'
import {IMaskInput} from 'react-imask'
import './scss/PhonePage.scss'

const PhonePage = () => {
    const [numPhone, setNumPhone] = useState("7")
    const [isFilled, setFilled] = useState(false)
    
    const [personalDataAgreement, setPersonalDataAgreement] = useState(false)

    // functionality for numpad arrows and keys navigation
    const onKeyArrowsSwitchHandler = ( event ) =>{
        const key = event.code
        let pressedNumEl = Number(event.target.value)

        let nextNumEl

        switch (key){
            case "ArrowRight":
                nextNumEl = String(pressedNumEl + 1)
                break
            case "ArrowLeft":
                nextNumEl = pressedNumEl == 1 ? pressedNumEl : String(pressedNumEl - 1)
                break
            case "ArrowDown":
                nextNumEl = [7,8,9].includes(pressedNumEl)? 0 : String(pressedNumEl + 3)
                break
            case "ArrowUp":
                if ( [1,2,3].includes(pressedNumEl) )
                    nextNumEl =pressedNumEl
                else if (pressedNumEl == 0)
                    nextNumEl = 9
                else  nextNumEl = String(pressedNumEl - 3) 
                break
            case "Backspace":
                
                let phone = numPhone.match(/\d/g)
                phone.pop()
                phone = phone.join('')
                setNumPhone(phone) 
                nextNumEl = pressedNumEl        
                break
            case 'Enter':
                nextNumEl = pressedNumEl
                break
        }

        document.querySelector(`input[value='${nextNumEl}']`).focus()
    }

    // function for numpad handle click (all nubmers and input(button) 'стереть')
    const onNumClickHandler = (event) => {
        const clickedValue = event.target.value
        let phone

        numPhone.match(/\d/g).pop()

        if ( clickedValue === "стереть" ){
            phone = numPhone.match(/\d/g)
            phone.pop()
            phone = phone.join('')
        } else phone = numPhone+clickedValue

        console.log(phone)
        setNumPhone(phone)
    }

    const agreementHandler = (event) => {
        const isChecked = event.target.checked  
        setPersonalDataAgreement(isChecked)
    }

    const numPhoneHandler = (value) => {
        setNumPhone(value)
        let filled = value.match(/(\d)/g).length === 11
        setFilled(filled)

    }

    useEffect(()=>{
        document.getElementById("num-input").focus()
    }, [])

    return(
        <div className="phone-page--container">
            <button className="button-close">x</button>
            <aside>
                <h1>Введите ваш номер
                    мобильного телефона</h1>

                    {/* validation is set inside this component from imask.js package */}
                    <IMaskInput
                        
                        mask='+{7}(000)000-00-00'
                        lazy={false}
                        id="num-input"
                        value={numPhone}
                        onAccept={numPhoneHandler}
                        className={!isFilled ? "warning" : ""}
                    /> 

                <p>и с Вами свяжется наш менеждер для 
                    дальнейшей консультации</p>

                <NumPad onNumClick={onNumClickHandler} onKeyArrowsSwitch={onKeyArrowsSwitchHandler} /> 

                {
                    isFilled ?

                    <div className="personal-data">
                        <input type="checkbox" id="personal-data" name="personal-data" checked={personalDataAgreement} onChange={agreementHandler} />
                        <label htmlFor="personal-data"/>
                        <p>Согласие на обработку 
                            персональных данных</p>
                    </div>
                    :
                    <p className="warning" >Неверно введён номер</p>
                }

                <button>Подтвердить номер</button>

            </aside>
        </div>
    )
}

export default PhonePage