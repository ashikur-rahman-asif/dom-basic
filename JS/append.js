// console.log('append js')

//1. where to add
const placesList = document.getElementById('places-list')
// console.log(PlacesList)

// 2.what to be added
const li = document.createElement('li')
li.innerText = 'pahartoli bon'

// 3.add the child
placesList.appendChild(li)
// ===========================//

// again full section add

// 1.where to add
const mainContainer = document.getElementById('main-container')
// console.log(mainContainer)

// 2.what to be added

const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My food list'
section.appendChild(h1)
mainContainer.appendChild(section)