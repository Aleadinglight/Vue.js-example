Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>Hello</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables'},
            { id: 1, text: 'Chicken'},
            { id: 2, text: 'Beef'}
        ]
    }
});