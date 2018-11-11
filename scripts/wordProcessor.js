var resultString = new Vue ({
	el: '#result-string',
	data: {
		message: '',
		msg: ''
	},
	methods: {
		getResultString: function () {
			this.msg = ( '"!'+ this.message + '"').replace( / /g, ' !' );
			
		}
	}
})