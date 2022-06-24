
const crazyButtonLocation = document.querySelector('#crazyButton')
crazyButtonLocation.addEventListener('mouseover', function (){
    console.log('yeah mouse over')
    const pageWidth = Math.floor(Math.random() * window.innerWidth)
    const pageHeight = Math.floor(Math.random() * window.innerHeight)

    crazyButtonLocation.style.left = `${pageWidth}px`
    crazyButtonLocation.style.top = `${pageHeight}px`
})

crazyButtonLocation.addEventListener('click', function(){
    crazyButtonLocation.innerText = "Got me"
    document.body.style.background = 'green'


})

