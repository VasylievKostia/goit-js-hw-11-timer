class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.id = null
    this.refs = {
      daysRef: document.querySelector('[data-value="days"]'),
      hrRef: document.querySelector('[data-value="hours"]'),
      minRef: document.querySelector('[data-value="mins"]'),
      secRef: document.querySelector('[data-value="secs"]'),
      body: document.querySelector('.body'),
       timerFace: document.querySelector('#timer-1')
    };
  }

  start() {
    this.id = setInterval(() => {
     
      const nowTime = Date.now();
      const time = this.targetDate - nowTime;
      const day = Math.floor(time / (1000 * 60 * 60 * 24));
      const hr = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((time % (1000 * 60)) / 1000);
      
      if (time < 0) {
        this.stop()
      }
      
      this.refs.daysRef.textContent = day < 10 ? `0${day}` : day;
      this.refs.hrRef.textContent = hr < 10 ? `0${hr}` : hr;
      this.refs.minRef.textContent = min < 10 ? `0${min}` : min;
      this.refs.secRef.textContent = sec < 10 ? `0${sec}` : sec;
    }, 1000);
  }
  
  stop() {
    clearInterval(this.id)
   this.refs.timerFace.textContent = 'Finish'
  }
}

// запускнового таймера
const watch = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('September 10, 2021 00:00:00'),
});

watch.start();

// const refs = {
//   days: document.querySelector('[data-value=days]'),
//   hours: document.querySelector('[data-value=hours]'),
//   mins: document.querySelector('[data-value=mins]'),
//   secs: document.querySelector('[data-value=secs]'),
//   timerFace: document.querySelector('#timer-1')
// }


// const targetDate = new Date('Nov 24, 2021 8:00:00');

// let time = null
// let nowDate = null
// // console.log(nowDate)

// function calc() {
//     let nowDate = Date.now()
//     time = targetDate - nowDate
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   refs.days.textContent = days < 10 ? `0${days}` : days;
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   refs.secs.textContent = secs < 10 ? `0${secs}` : secs;



// }
// function timerStart() {
//     setInterval(calc, 1000)
// }


// window.addEventListener('DOMContentLoaded', timerStart)


