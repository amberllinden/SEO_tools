let urlCounter = new Vue({
    el: '#url-counter',
    data: {
        textarea: '',
        result: []
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

            let sortableUrl = [];
            for (var count in counts) {
                sortableUrl.push([count, counts[count]]);
            }
            sortableUrl.sort(function (a, b) {
                return b[1] - a[1];
            });

            sortableUrl.map(url => this.result.push(`${url[0]} встречается ${url[1]} раз`))    
        }
    }
})