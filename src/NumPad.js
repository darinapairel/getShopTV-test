import "./scss/NumPad.scss"
const NumPad = ({onNumClick, onKeyArrowsSwitch}) => {

    return(
            <div className="numpad-layout">
                {[1,2,3,4,5,6,7,8,9, 'стереть',0].map( (el, i) =>  <input type="button" onClick={onNumClick} onKeyDown={onKeyArrowsSwitch} className="numpad-layout-key" value={el} key={i}/>) }
            </div>
    )
}

export default NumPad