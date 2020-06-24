import {email, gravatarUrl} from '../gravatar-url'
import createModal from './modal'

const IMAGE_SIZE = 64
const EXTRA_ROWS = 5


export function createImages (window, numberOfImages) {
  return Array.apply(null, Array(numberOfImages)).map(() => gravatarImage(window))
}

export function gravatarImage (window) {
  const img = new window.Image()
  img.src = gravatarUrl(IMAGE_SIZE)
  img.setAttribute('data-email', email);
  
  img.addEventListener('click', (e) => {
    e.target.classList.toggle('is-highlighted')

    createModal(img.dataset.email)
  })

  return img
}



export function calculateNumberOfImages (window, root) {
  const currentImages = window.document.querySelectorAll('img').length

  const width = root.offsetWidth + window.scrollX
  const height = window.innerHeight + window.scrollY

  const imagesPerRow = Math.floor(width / IMAGE_SIZE)
  const imageRows = Math.floor(height / IMAGE_SIZE) + EXTRA_ROWS

  return imagesPerRow * imageRows - currentImages
}

export default function (window, root) {
  const imagesToCreate = calculateNumberOfImages(window, root)

  if (imagesToCreate <= 0) {
    return
  }

  createImages(window, imagesToCreate).forEach((image) => {
    root.appendChild(image)
  })
}
