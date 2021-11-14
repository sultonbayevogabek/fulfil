import sliderSettings from './_slider-settings'
import maskPhone from './_mask-phone'
import navAction from './_nav-action'

document.addEventListener('DOMContentLoaded', () => {
   sliderSettings()
   maskPhone()
   navAction()
   AOS.init()
})