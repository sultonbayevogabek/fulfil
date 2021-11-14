import sliderSettings from './_slider-settings'
import maskPhone from './_mask-phone'
import navAction from './_nav-action'
import enrollCourse from './_enroll-course'

document.addEventListener('DOMContentLoaded', () => {
   sliderSettings()
   maskPhone()
   navAction()
   enrollCourse()

   AOS.init()
})