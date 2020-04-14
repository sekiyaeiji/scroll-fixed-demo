let setFixed01 = (initY: any) => {
  let scrollY = window.pageYOffset
  let target = document.querySelectorAll('.js-fixed01')[0]
  let classIsFixed = 'is-fixed01'
  console.log('y ： ' + initY)
  console.log('scrollY ： ' + scrollY)
  if (scrollY > initY) {
    target.classList.add(classIsFixed)
  } else {
    target.classList.remove(classIsFixed)
  }
}

let setFixed03 = (initY: any) => {
  let scrollY = window.pageYOffset
  let target = document.querySelectorAll('.js-fixed03')[0]
  let classIsFixed = 'is-fixed03'
  console.log('y ： ' + initY)
  console.log('scrollY ： ' + scrollY)
  if (scrollY > initY) {
    target.classList.add(classIsFixed)
  } else {
    target.classList.remove(classIsFixed)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let wrapper01 = document.querySelectorAll('.js-fixed-wrapper01')[0]
  if (wrapper01) {
    let initY = wrapper01.getBoundingClientRect().top + window.pageYOffset
    window.addEventListener('scroll', function () {
      setFixed01(initY)
    })
  }
  let wrapper03 = document.querySelectorAll('.js-fixed-wrapper03')[0]
  if (wrapper03) {
    let initY = wrapper03.getBoundingClientRect().top + window.pageYOffset
    window.addEventListener('scroll', function () {
      setFixed03(initY)
    })
  }
})
