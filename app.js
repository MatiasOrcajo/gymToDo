const app = new Vue({
    el: '#app',
    data: {
        titulo: "GYM con Vue",
        tasks: [],
        newTask: '',
        newTaskReps: '',
        newTaskSeries: ''
    },
    methods: {
        addGym: function() {
            this.tasks.push({
                nombre: this.newTask,
                reps: this.newTaskReps,
                series: this.newTaskSeries,
                status: false
            });
            this.newTask = ''
            this.newTaskReps = ''
            this.newTaskSeries = ''
            localStorage.setItem('vue-gym', JSON.stringify(this.tasks))
        },

        editTask: function(index) {
            this.tasks[index].status = true;
            localStorage.setItem('vue-gym', JSON.stringify(this.tasks))
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1)
            localStorage.setItem('vue-gym', JSON.stringify(this.tasks))
        }
    },
    created: function() {
        let dataLS = JSON.parse(localStorage.getItem('vue-gym'))
        if (dataLS === null) {
            this.tasks = []
        } else {
            this.tasks = dataLS
        }
    }
})