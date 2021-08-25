class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            
            days: document.querySelector('[data-value=days]'),
            hours: document.querySelector('[data-value=hours]'),
            mins: document.querySelector('[data-value=mins]'),
            secs: document.querySelector('[data-value=secs]'),
            timerFace: document.querySelector('#timer-1')
        }
        this.time = null
        this.nowDate = null
        // this.targetDate = new Date('Nov 24, 2021 8:00:00')
        this.timerStart = this.timerStart.bind(this)
    }
    calc = () => {
        this.nowDate = Date.now()
        this.time = this.targetDate - this.nowDate
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.refs.days.textContent = days < 10 ? `0${days}` : days;
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
        
    }
    timerStart = () => {
    setInterval(this.calc, 1000)
    }
    init() {
this.window.addEventListener('DOMContentLoaded', this.timerStart)
    }
    
}

const watch = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 24, 2021 8:00:00'),
});

watch.init();




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

  