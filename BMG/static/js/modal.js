import Form from "./form.js";

export default class Modal {
	constructor(modal,form){
        this.modal = modal;
        this.form = form;
        this.addEventListeners(); 
	}
	
	toggleModal(){
		this.modal.classList.toggle("show-modal");
    }
    setModalTitle(modalTitle){
        let modalTitleHeader = this.modal.getElementsByClassName("modal_h1")[0];
        modalTitleHeader.innerHTML = modalTitle;
    }

    displayMessage(message){
        let contentPlaceHolderOfConfirmationModal = this.modal.getElementsByClassName("content-placeholder")[0];
        contentPlaceHolderOfConfirmationModal.innerHTML = message;
    }
    addEventListeners(){
		const closeButton = this.modal.getElementsByClassName("close-button")[0];
        if(closeButton){
            closeButton.addEventListener("click", this.toggleModal.bind(this));
            if (this.form !== undefined){
                closeButton.addEventListener("click", ()=>{
                    new Form(this.form).formReset();
                });
            }
        }
        let okButtoon = this.modal.getElementsByClassName("button--modal")[0];
        if(okButtoon){
            okButtoon.addEventListener("click", this.toggleModal.bind(this));
            if (this.form !== undefined){
                okButtoon.addEventListener("click", ()=>{
                    new Form(this.form).formReset();
                });
            }
        }
	}
}
