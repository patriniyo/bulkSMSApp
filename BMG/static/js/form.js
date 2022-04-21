export default class Form {
	constructor(form){
        this.form = form;
    }

	formReset(){
		this.form.reset();
		location.reload();
    }
}