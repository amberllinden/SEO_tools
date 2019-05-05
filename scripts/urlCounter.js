let urlCounter = new Vue({
    el: '#url-counter',
    data: {
        textarea: '',
        result: null
    },
    methods: {
        countUrls: function () {
            let initialUrlArray = this.textarea.split('\n');
            const exp = /.+[.]\w+[/]/;
            let interimArray = initialUrlArray.map(array => array.match(exp)[0]);
            let counts = {};
            interimArray.forEach(function (a) {
                counts[a] = counts[a] + 1 || 1;
            });
            this.result = Object.assign({}, counts)
            console.log(this.result);
        }
    }
})