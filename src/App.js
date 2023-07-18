import React, { useEffect, useState } from 'react';
import MovingComponent from 'react-moving-text'
import Heart from './Heart';
import './App.css';
import Gallery from './Gallery';
import Countdown from './CountDown';
import Wait5s from './Wait5s';
import moment from 'moment';

function App() {
  const [innerHeight] = useState(window.innerHeight)
  const [innerWidth] = useState(window.innerWidth)
  const [start, setStart] = useState(false)
  const [countdown, setCountdown] = useState(false)
  const [indexImg, setIndexImg] = useState(0)
  const [countTime, setCountTime] = useState(false)

  useEffect(() => {
    if (countdown) {
      var myAudio = document.getElementById("myAudio");
      myAudio.play();
      setTimeout(() => {
        setStart(true)
      }, 5500);
    }
  }, [countdown])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg(seconds => {
        let newIndex = seconds + 1 < 6 ? seconds + 1 : 0
        return newIndex
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setTimeout(() => {
      const timeDifference = moment('2023-07-14 19:00:00.000').diff(moment(), 'seconds');
      setCountTime(!(timeDifference > 0))
    }, 1000);
    return () => clearInterval(interval);
  },[])

  return (
    <div>
      {
        countTime ?
          <>
            <Heart showText={start} indexImg={indexImg}/>
            <div className='onTop' style={{ display: start ? 'none' : '' }}>
              {
                countdown ?
                  <Wait5s innerWidth={innerWidth} innerHeight={innerHeight} /> :
                  <div>
                    <Gallery />
                    <div className='TextMove'>
                      <MovingComponent type="typewriter"
                        dataText={[
                          'Hello',
                          'Baby ơi',
                          'Click vào ô dưới nha!!'
                        ]} />
                    </div>
                  </div>
              }
              <div className='BtnStart'>
                <button onClick={() => {
                  setCountdown(true)
                }} className="primary">
                  Bắt đầu thôi
                </button>
                <audio
                  id="myAudio"
                  controls={false}
                  src='https://firebasestorage.googleapis.com/v0/b/rec-user.appspot.com/o/music.mp3?alt=media&token=a440b6b6-ebe4-485d-bbbb-5d6d52be0405'>
                </audio>
              </div>
            </div>
          </>
          :
          <Countdown />
      }
    </div>
  )
}
export default App