import React from 'react';
import Switches from './switches'
import InputSlider from './Slider'
import {audiosBank} from './constants'
import {audios} from './constants'

const App = () => {

    const [status, setStatus] = React.useState({
        power: '',
        bank: ''
    })

    //keep the same value with UI display
    const [vol, setVol] = React.useState(0.5)

    const regClick = (event) => {
        let audio = new Audio(audios[event.target.value].url)
        audio.play()
        audio.volume = vol;
        console.log('reg music')
    }

    const bankClick = (event) => {
        let audio = new Audio(audiosBank[event.target.value].url)
        audio.play()
        audio.volume = vol;
        console.log('bank music')
    }

    const handleClick = (event)=> {
        // be careful you need boolean type
        console.log('STATE: '+ status.power + '&&&' + status.bank)
        console.log('TYPE:' +typeof status.power + '&&&' + typeof status.bank )

        if(status.power){
            if(status.power && status.bank){
                bankClick(event);
            } else if (status.power && !status.bank) {
                regClick(event);
            }
        } else if((!status.power && !status.bank) || (!status.power && status.bank)) {
            alert('Hi, power is off! Please turn on :)')
        }
    }

    function switchesCallBack(data) {
        setStatus(data);  //once send data, play button works once      
    }

    function sliderCallback(data){
        setVol(data);
        console.log('Received volume is ' + data);
    }

    return (
        <div className='square d-flex align-items-center justify-content-center'>
            <div className="drumChart d-flex align-items-center justify-content-center">
                <div className='buttonGroup m-2 p-2'>
                    <div>
                        <button type="submit" value={0} onClick={handleClick}>Q</button>      
                        <button type="submit" value={1} onClick={handleClick}>w</button>
                        <button type="submit" value={2} onClick={handleClick}>E</button>
                    </div>
                    <div>
                        <button type="submit" value="3" onClick={handleClick}>A</button>
                        <button type="submit" value="4" onClick={handleClick}>S</button>
                        <button type="submit" value="5" onClick={handleClick}>D</button>
                    </div>
                    <div>
                        <button type="submit" value="6" onClick={handleClick}>Z</button>
                        <button type="submit" value="7" onClick={handleClick}>X</button>
                        <button type="submit" value="8" onClick={handleClick}>C</button>
                    </div>
                </div>
                <div className = "m-4 p-2">          
                    <Switches parentCallback = { switchesCallBack }/>
                    <InputSlider sliderValueCallback={ sliderCallback }/> 
                </div> 
            </div>     
        </div>
    )
}

export default App
