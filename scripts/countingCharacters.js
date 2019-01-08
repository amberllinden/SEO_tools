let countingCharacters = new Vue ({
    el: "#counting-characters",
    data: {
        textToCount: '',
        withSpaces: '',
        withoutSpaces: ''
    },
    methods: {
        counting: function () {
            let userText = this.textToCount;
            this.withSpaces = userText.length;
            let userTextWithoutSpaces = userText.replace(/\s+/g, '').replace(/\n/g, '');
            this.withoutSpaces = userTextWithoutSpaces.length;
        }
    }
})