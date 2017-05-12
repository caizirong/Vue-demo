var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date()
    }
});
app2.message = 'change message';

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    },
    methods: {
        toggle: function () {
            // app3.seen = false;
            // this.seen = true ? false : true; // 如何切换？
            if (this.seen === false) {
                this.seen = true;
            } else {
                this.seen = false

            }
        }
    }

});
// app3.seen = false;


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'learn javascript' },
            { text: 'learn vue' },
            { text: 'make a good project' }
        ],
        todo: 'find a job'
    }
});
app4.todos.push({ text: 'new project' });

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { text: '蔬菜' },
            { text: '奶酪' },
            { text: '随便其他什么人吃的东西' }
        ]
    }
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        message: 'Hello Vue!'
    },
    beforeCreate: function () {
        console.log("---------- beforeCreate ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    created: function () {
        console.log("---------- created ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    beforeMount: function () {
        console.log("---------- beforeMount ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    mounted: function () {
        console.log("---------- mounted ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    beforeUpdate: function () {
        // 模板更新
        console.log("---------- beforeUpdate ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    updated: function () {
        // 重新渲染DOM
        console.log("---------- updated ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    beforeDestroy: function () {
        console.log("---------- beforeDestroy ----------");
        console.log(this.message);
        console.log(this.$el);
    },
    destroyed: function () {
        console.log("---------- destroyed ----------");
        console.log(this.message);
        console.log(this.$el);
    },
})