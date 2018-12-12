let arraysComparison = new Vue ({
    el: '.for-border',
    data: {
        one: '',
        two: '',
        results: []
    },
    methods: {
        test: function () {
            console.log(this.one);
            console.log(this.two);

            let string = this.one + ' ' + this.two;
            console.log(string);
            this.results = string.split(' ');

        }


    }
})