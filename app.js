const app = Vue.createApp({
    data() {        
        return {
            num: 1
        }
    }
})

app.mount('#app')








/* //get user selected text

const getUserSelectedText = () => {
    return window.getSelection().toString();
}

//User reaches end of page
window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        console.log("You've reached the end of the page")
    }
} 

// Back to top

const toTop = () => window.scrollTo({top: 0, behavior : "smooth"});

//Dark mode?
const isDarkMode = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches;
}

//Go back to previous page
history.back();

function revealMessage() {
    document.getElementById("Hidden Message").style.display = "block";
}


 */