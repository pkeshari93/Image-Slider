var current = 0
var image = []
var time = 2000
var leftArrow = document.querySelector('.arrow-left')
var rightArrow = document.querySelector('.arrow-right')

    
// list of images
image[0] = 'images/img1.jpeg'
image[1] = 'images/img2.jpeg'
image[2] = 'images/img3.jpg'
image[3] = 'images/img4.jpg'
image[4] = 'images/img5.jpeg'
image[5] = 'images/img6.jpeg'
image[6] = 'images/img7.jpeg'
image[7] = 'images/img8.jpeg'
image[8] = 'images/img9.jpeg'
image[9] = 'images/img10.jpeg'


function changeImg(){

    // document.slide.src = image[i]

    // for everytime we change slide we want to display none and clear out all the images
    function reset(){
        slide.display = 'none'
    }

    // initialize slider
    function startSlide(){
        reset()
        document.slide.src = image[current]
        current = 0
    }

    // show next
    function slideRight(){
        reset()
        if (current === image.length-1) {
            current = -1
        }
        document.slide.src = image[current + 1]
        current++
    }

    function slideLeft(){
        // console.log(current)
        reset()
        if (current === 0) {
            current = image.length
        }
        document.slide.src = image[current - 1]
        current--
        // slide.display = 'block'
        console.log(current)
    }

    leftArrow.addEventListener('click', () => {
        slideLeft()
    })
    rightArrow.addEventListener('click', () => {
        slideRight()
    })
    

    startSlide()
}
window.onload = changeImg