export default function createModal(emailInfo) {
  const modalDiv = window.document.querySelector('.modal')

  if ( window.document.contains(modalDiv) ) {
    modalDiv.remove()
  }

  const modal = window.document.createElement('div')
  modal.classList.add('modal')

  const modalContent = window.document.createElement('div')
  modalContent.classList.add('modal-content')

  const details = window.document.createElement('p')
  details.innerText = emailInfo

  const close = window.document.createElement('span')
  close.innerHTML = "&times"
  close.classList.add('close')

  modalContent.appendChild(close)
  modalContent.appendChild(details)

  modal.appendChild(modalContent)
  root.appendChild(modal)

  modal.style.display = "block";

  close.addEventListener('click', () => modal.style.display = "none")

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
