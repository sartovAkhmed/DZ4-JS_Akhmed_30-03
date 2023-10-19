/* 1) повторить все что было на уроке 
сделать такой же запрос как на уроке но на массив из объектов с людьми
и вывести это всё на страницу через ДОМ элементы, в виде карточек как 
мы это делали на уроке. Показал как должен выглядеть json файл на уроке. */
const button = document.querySelector('#btn')
// ---------------------
button.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/humen.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
// ---------------------
    request.onload = () => {
        const humen = JSON.parse(request.response)
        const page = document.querySelector('.page')
        humen.forEach(person => {
            const personCard = document.createElement('div')
            personCard.setAttribute('class', 'card')
            personCard.innerHTML = `
                <img src="${person.photo}" alt="">
                <p>Name: ${person.name}</p>
                <p>Age: ${person.age}</p>
            `
            page.append(personCard)
        });
    }
}
/* 2) Написать XMLHttpRequest запрос на json файл созданный вами (данные в json могут быть
абсолютно любыми, главное напишите его сами) и вывести всё это просто в консоли в виде JS объекта */
const request = new XMLHttpRequest()
request.open('GET','/data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.onload = () => {
    const data = JSON.parse(request.response)
    data.forEach(element => {
        console.log(element);
    })
}