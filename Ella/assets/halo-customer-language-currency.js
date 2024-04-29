class CustomerLanguageCurrency extends HTMLElement {
    constructor() {
        super();

        this.auth = this;


        if(document.querySelector('[data-open-lang-currency-sidebar]')){
            document.querySelectorAll('[data-open-lang-currency-sidebar]').forEach((openSidebar) =>
                openSidebar.addEventListener('click',this.setOpenSidebar.bind(this))
            );
        }

        if(document.querySelector('[data-close-lang-currency-sidebar]')){
            document.querySelector('[data-close-lang-currency-sidebar]').addEventListener(
                'click',
                this.setCloseSidebar.bind(this)
            );
        }

        document.body.addEventListener('click', this.onBodyClickEvent.bind(this));
    }

    setOpenSidebar(event){
        event.preventDefault();
        event.stopPropagation();

        document.body.classList.add('lang-currency-sidebar-show');
    }

    setCloseSidebar(event){
        event.preventDefault();
        event.stopPropagation();

        document.body.classList.remove('lang-currency-sidebar-show');
    }

    onBodyClickEvent(event){
        if(document.body.classList.contains('lang-currency-sidebar-show')){
            if ((!this.contains(event.target)) && ($(event.target).closest('[data-open-lang-currency-sidebar]').length === 0)){
                this.setCloseSidebar(event);
            }
        }
    }
}

customElements.define('customer-language-currency', CustomerLanguageCurrency);