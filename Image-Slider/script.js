(function () {
    const images = [
        "1",
        "2",
        "3"
    ];

    const button = document.querySelectorAll(".btn");
    const imageDiv = document.querySelector(".image");

    let count = 0;

    button.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if(button.classList.contains('left-image')) {
                count--;
                if(count < 0){
                    count = images.length - 1;
                    console.log(count);
                }
                imageDiv.style.background = `url('./Images/${images[count]}.jpg') center/cover fixed no-repeat`;
            }

            if(button.classList.contains('right-image')) {
                count++;
                if(count > images.length - 1){
                    count = 0;
                    console.log(count);
                }
                imageDiv.style.background = `url('./Images/${images[count]}.jpg') center/cover fixed no-repeat`;
            }
        })
    })
})();