let queryProcessing = new Vue({
    el: '#query-processing',
    data: {
        keywords_one: '',
        keywords_two: '',
        results: []
    },
    methods: {
        getKeywordArray: function () {
            let oneArray = this.keywords_one.split(',');
            let twoArray = this.keywords_two.split(',');
            this.results = oneArray.map(keyword => {
                return twoArray.map(key => `${keyword} ${key}`);
            }).flat();
        }
    }
})