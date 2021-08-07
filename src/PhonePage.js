import { useState } from 'react'
import NumPad from './NumPad'
import {IMaskInput} from 'react-imask'
import './scss/PhonePage.scss'

const PhonePage = () => {
    const [numPhone, setNumPhone] = useState()
    const [isFilled, setFilled] = useState(false)
    
    const [personalDataAgreement, setPersonalDataAgreement] = useState(false)

    const onNumClickHandler = (event) => {
        const clickedValue = event.target.value
        setNumPhone(numPhone+clickedValue)
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

    return(
        <div className="phone-page--container">
            <aside>
                <h1>Введите ваш номер
                    мобильного телефона</h1>
                
                    <IMaskInput
                        mask='+{7}(000)000-00-00'
                        lazy={false}
                        id="num-input"
                        value={numPhone}
                        onAccept={numPhoneHandler}
                    /> 

                <p>и с Вами свяжется наш менеждер для 
                    дальнейшей консультации</p>

                <NumPad onNumClick={onNumClickHandler}/> {/*onKeyPress={changeNumValue} */}

                {
                    isFilled ?

                    <div className="personal-data">
                        <input type="checkbox" id="personal-data" name="personal-data" checked={personalDataAgreement} onChange={agreementHandler} />
                        <label htmlFor="personal-data"/>
                        <p>Согласие на обработку 
                            персональных данных</p>
                    </div>
                    :
                    <p>Неверно введён номер</p>
                }

                <button>Подтвердить номер</button>

            </aside>
        </div>
    )
}

export default PhonePage