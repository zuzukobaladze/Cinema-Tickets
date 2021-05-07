var seat = document.getElementsByClassName('seat');
var movie = document.getElementById('movie');
var selectedSeats = document.getElementById('count');
var totalMoney = document.getElementById('total');
var indexes = [];

Object.entries(seat).forEach(el => {
    ChangeColours(el[1]);
    ChangeNumbers(el[1]);
})

movie.addEventListener('change', () => {
    selectedSeats.innerHTML = "0";
    totalMoney.innerHTML = "0";
    console.log(indexes)
    Object.entries(seat).forEach(el => {
        if(el[1].className.length <= 4){
            if(el[1].style.backgroundColor === "aqua"){
                el[1].style.backgroundColor = "#444451";
            }
        }
    })
})

function ChangeColours(element){
    if(element.className.length <= 4){
        element.addEventListener('click', () => {
            if(element.style.backgroundColor === "aqua"){
                element.style.backgroundColor = "#444451"
            }
            else{
                element.style.backgroundColor = "aqua";
                Object.entries(seat).forEach(el => {
                    if(el[1].style.backgroundColor === "aqua"){
                        indexes.push(el[0])
                        window.localStorage.setItem("indexes", JSON.stringify(indexes))
                    }
                })
            }
        }) 
    }
}

function ChangeNumbers(element){
    if(element.className.length <= 4){
        element.addEventListener('click', () => {
            if(element.style.backgroundColor === "aqua"){
                selectedSeats.innerHTML = `${parseInt(selectedSeats.innerHTML) + 1}`
                totalMoney.innerHTML = `${parseInt(totalMoney.innerHTML) + parseInt(movie.value)}`
                window.localStorage.setItem('selectedSeats', selectedSeats.innerHTML);
                window.localStorage.setItem('totalMoney', totalMoney.innerHTML);
            }
            else{
                selectedSeats.innerHTML = `${parseInt(selectedSeats.innerHTML) - 1}`
                totalMoney.innerHTML = `${parseInt(totalMoney.innerHTML) - parseInt(movie.value)}`
                window.localStorage.setItem('selectedSeats', selectedSeats.innerHTML);
                window.localStorage.setItem('totalMoney', totalMoney.innerHTML);
            }
        }) 
    }
}

function setData(){
    selectedSeats.innerHTML = window.localStorage.getItem("selectedSeats")
    totalMoney.innerHTML = window.localStorage.getItem("totalMoney")
    JSON.parse(window.localStorage.getItem("indexes")).forEach(el => {
        Object.entries(seat)[parseInt(el)][1].style.backgroundColor = "aqua"
    })
}

function clearData(){
    window.localStorage.clear()
}

setData()
//clearData()
