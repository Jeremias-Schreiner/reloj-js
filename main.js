const hours = document.querySelector('#hours_id')
const minutes = document.querySelector('#minutes_id')
const seconds = document.querySelector('#seconds_id')


setInterval(
    ()=>{
        const date = new Date();
        const hs = date.getHours() <= 9
            ? '0' + date.getHours()
            : date.getHours()

        const min = date.getMinutes() <= 9
            ? '0' +date.getMinutes()
            : date.getMinutes()
        const seg = date.getSeconds() <= 9
            ? '0' + date.getSeconds()
            : date.getSeconds()
        
        hours.classList.toggle('hours')
        hours.classList.toggle('hours-alternative')

        minutes.classList.toggle('minutes')
        minutes.classList.toggle('minutes-alternative')

        seconds.classList.toggle('seconds')
        seconds.classList.toggle('seconds-alternative')



        hours.innerText = hs;
        minutes.innerText = min;
        seconds.innerText = seg;
    },
    1000
)

