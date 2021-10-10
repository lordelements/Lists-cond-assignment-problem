const app = Vue.createApp({
    data() {
         return {
            enteredTasks: '',
             tasks: [],
             isShow: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTasks);
        },
        removeTasks(idx) {
            this.tasks.splice(idx, 1);
        }
    },
});

app.mount( '#assignment');