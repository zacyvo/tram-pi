import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from 'moment';
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true
};

const renderTime = (dimension, time) => {
  let count = 0
  let text = ''
  let fontSize = 2
  let color = 'black'
  switch (dimension.toLowerCase()) {
    case "days":
      text = "Ngày"
      color = '#7E2E84'
      fontSize = 3
      break;
    case "hours":
      text = "Giờ"
      color = '#D14081'
      fontSize = 2
      break;
    case "minutes":
      text = "Phút"
      color = '#EF798A'
      fontSize = 1.5
      break;
    default:
      fontSize = 1.3
      count = ''
      color = '#218380'
      text = 'giây'
      break;
  }
  if (time === 0) {
    return <div className="timer">I LOVE YOU</div>;
  }

  return (
    <div className="timer">
      <div className="value" style={{fontSize: `${fontSize}em`, color: color}}>{time}</div>
      <div className="text" style={{fontSize: `${fontSize-0.25}em`, color: color}}>{text}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Countdown() {
  const timeDifference = moment('2023-07-14 17:00:00.000').diff(moment(), 'seconds')
  const remainingTime = timeDifference;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  const innerWidth = window.innerWidth

  return (
    <div className='timeCountDownWrap'>
      <div className='timeCountDownCon'>
        <div className='timeCountDownDay'>
          <CountdownCircleTimer
            {...timerProps}
            colors="#7E2E84"
            size={innerWidth / 2}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className='timeCountDownHour'>
          <CountdownCircleTimer
            {...timerProps}
            size={innerWidth / 3}
            colors="#D14081"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className='timeCountDownMin'>
          <CountdownCircleTimer
            {...timerProps}
            size={innerWidth / 4}
            colors="#EF798A"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className='timeCountDownSec'>
          <CountdownCircleTimer
            {...timerProps}
            size={innerWidth / 5}
            colors="#218380"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("seconds", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
}
