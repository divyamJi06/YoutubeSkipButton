
timeout = setInterval(() => {

    skipButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0]
    if (skipButton != undefined) {
        console.log(skipButton)
        if (skipButton.innerText == "Skip Ad" || skipButton.innerText == "Skip Ads") {
            skipButton.click()
            console.log("Button Clicked!!")
        }
    }
}, 1000);
