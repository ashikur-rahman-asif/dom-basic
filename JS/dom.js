const sections = document.querySelectorAll('section')
// console.log(sections)
for (const section of sections) {
    // console.log(section.innerText)
    section.style.border = '2px solid red'
    section.style.marginBottom = '5px'
    section.style.borderRadius = '13px'
    section.style.padding = '10px'
    section.style.backgroundColor='lightgray'
}
const placesContainer = document.getElementById('places-container')
placesContainer.classList.add('yellow-bg')