import './styles.css';

import app from './lib/app'

(function (window) {
  app(window, document.querySelector('#root'))
})(window)
