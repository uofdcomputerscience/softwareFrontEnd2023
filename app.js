let app = Vue.createApp({
    data: function() {        
        return {
            num: 1
        }
    },
    methods: {
        toggleList(){
            this.num = 13
        }, 
        toggleCalendar(){
            Calendar 
        }
    }
})

    app.component('login-form', {
        template: `
            <form @submit="handleSubmit">
                <h1>{{ title }}</h1>
                <p v-for="str in inputs">{{ str }}</p>
                <custom-input v-model="email":label="emailLabel" />
                <custom-input v-model="password":label="passwordLabel"/>
                <button>Log in</button>
            </form>`
        ,
        components: ['custom-input'],
        data() {
            return {
                title: "Login Form",
                inputs: [
                    'email',
                    'password',
                    'name'
                ],
                email: '', //props not mutated, these are updated 
                password: '',
                emailLabel: 'Email',
                passwordLabel: 'Password'

            }
        },
        methods: {
            handleSubmit(){
                console.log(this.email, this.password)
            }
        }
    })

    app.component('custom-input',{
        template: `
            <label>
                {{ label }}
                <input type="text" v-model="inputValue">
            </label>
        `,
        props: ['label', 'modelValue'],
        computed: {
            inputValue: {
                get() {
                    return this.modelValue            
                },
                set(value){//modelling variable from child to parent
                    console.log(value)
                    this.$emit('update:modelValue', value)//emiting event to parent, parent is listening to the event 
                }
            }

        }
       /* data(){
            return{
                inputValue: ''
            }
        }
        */

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