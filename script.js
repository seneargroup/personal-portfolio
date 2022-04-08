let cursor = document.querySelector('.cursor');

gsap.set(cursor, {
  xPercent: -50,
  yPercent: -50
});

document.addEventListener('mousemove', e =>{
    // cursor.setAttribute('style', 'top:'+(e.pageY - 10)+'px; left:'+(e.pageX - 10)+ "px;")
  
  gsap.set(cursor, {
    x: e.x,
    y: e.y
  });
})

let liReseau = document.querySelectorAll('.icone')
tableauReseau = Array.from(liReseau)

let test = tableauReseau

tableauReseau.forEach(element => {
    element.addEventListener('mouseover', function() {
        gsap.to(cursor, {
            width:40,
            height:40,
            backgroundColor: 'transparent'
        })
    })
    element.addEventListener('mouseout', function() {
        gsap.to(cursor, {
            width:20,
            height:20,
            backgroundColor: 'black'
        })
    })  
})