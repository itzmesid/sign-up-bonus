import { LitElement, html, css } from 'lit-element';

class FomoSignUp extends LitElement {

    static get properties() {
        return { 
            message: { type: String },
            desc: { type: String },
            buttonText: { type: String },
            dataSource: { type: String }
        };
    }
    
    constructor() {
        super();
        this.welcomeTitle = "Hi";
        this.desc = "Sign up to get welcome bonus";
        this.buttonText = "Sign up";
        this.dataSource = "";
    }
    
    static get styles() {
        return css`
            #amfm__overlay {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
                width: 100%;
                height: 100vh;
                background-color: rgba(0,0,0,.9);
            }
            #amfm__modal {
                position: fixed;
                bottom: 35px;
                left: 60px;
                z-index: 101;
            }
            #amfm__overlay,
            #amfm__modal {
                opacity: 0;
                pointer-events: none;
                transition: 0.2s ease;
            }
            .amfm__signUp {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 200px;
                margin-bottom: 30px;
                padding: 40px 20px 20px;
                box-sizing: border-box;
                color: #fff;
                font-size: 10px;
                font-family: 'Arial', sans-serif;
                background-color: #15c39a;
                opacity: 0;
                transform: translateY(30px);
                transition: .35s cubic-bezier(0.18, 0.89, 0.32, 1.28) .2s;
            }
            .amfm__signUp:after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 0;
                height: 0;
                color: #15c39a;
                border-top: 30px solid currentColor; 
                border-left: 100px solid transparent; 
                border-right: 100px solid transparent; 
            }

            :host([opened]) #amfm__overlay,
            :host([opened]) #amfm__modal {
                opacity: 1;
                pointer-events: all;
            }
            :host([opened]) .amfm__signUp {
                opacity: 1;
                transform: translateY(0);
            }

            .amfm__signUp_title,
            .amfm__signUp_desc {
                line-height: 1;
                text-align: center;
                text-transform: uppercase;
            }
            .amfm__signUp_title {
                font-size: 1.5em; 
                margin-bottom: .75em;               
            }
            .amfm__signUp_desc {
                margin-bottom: 1em;
                padding: 0 20%;
                font-size: 2.2em;
                font-weight: 700;
            }
            .amfm__signUp_btn {
                padding: 0 30px;
                color: #222;
                font-size: 1.6em;
                line-height: 2.2;
                border-radius: 2.2em;
                background-color: #fff;
                border: none;
                outline: none;
                cursor: pointer;
                -webkit-appearance: none;
                transition: 0.18s;
                animation: shake 1.4s linear infinite both;
            }
            .amfm__signUp_btn:hover {
                box-shadow: 0 5px 5px rgba(0,0,0,0.5);
                animation: none;
            }
            @keyframes shake {
                0%, 20%, 40%, 100% { transform: translateX(0); }
                5%, 25% { transform: translateX(-6px); }
                15%, 35% { transform: translateX(6px); }
            }
        `;
    }
    
    render() {
        var data = JSON.parse(this.dataSource);
        return html`
            <div id="amfm__overlay" @click="${() => this.hide()}"></div>
            <div id="amfm__modal">
                <div class="amfm__signUp">
                    <div class="amfm__signUp_title">${this.welcomeTitle} ${data.user.name}</div>
                    <div class="amfm__signUp_desc">${data.competitionName}</div>
                    <button class="amfm__signUp_btn">${data.label.participate_btn}</button>
                </div>
            </div>
        `;
    }

    open() {
        this.setAttribute("opened", "");
    }

    hide() {
        if (this.hasAttribute("opened")) {
            this.removeAttribute("opened");
        }
    }
}

customElements.define('fomo-signup', FomoSignUp);