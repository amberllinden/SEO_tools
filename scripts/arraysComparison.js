let arraysComparison = new Vue ({
    el: '.for-border',
    data: {
        one: '',
        two: '',
        results: []
    },
    methods: {
        compare: function () {
            let commonString = this.one + '\n' + this.two;
            let commonArray = commonString.split('\n');    
            var obj = {};

            for (let i = 0; i < commonArray.length; i++) {
                let string = commonArray[i].toLowerCase();
                obj[string] = true;
            }
            this.results = Object.keys(obj);
        }

    }
})