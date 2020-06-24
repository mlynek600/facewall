export default function (window, text) {
  const headerElem = window.document.createElement('header')
  const titleElem = window.document.createElement('h1')
  titleElem.innerText = text || 'Facewall'

  headerElem.appendChild(titleElem)

  window.addEventListener('scroll', () => {
    headerElem.classList.add('header-shadow')

    if (window.scrollY === 0) headerElem.classList.remove('header-shadow')
  })

  return headerElem
}
