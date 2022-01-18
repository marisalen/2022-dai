var template = document.createElement("template");
template.innerHTML = `
<style>
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(https://www.pngmart.com/files/7/Yellow-Sofa-PNG-Transparent-Image.png);
        background-repeat: 30;
        background-position: center;
    }
</style>
</head>

<body>
<style>
    #counter {
        display: flex;
        padding: 5px;
        background-color: #dad;
        border-radius: 10px;
    }

    #counter>button {
        background-color: papayawhip;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: #dad;
    }

    #counter>div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: papayawhip;
        font-weight: bold;
    }

    #bar {
        width: 0px;
        height: 10px;
        background-color: #bad;
        transition:width 0.2s;
    }
</style>
<div id="counter">
    <button id="d_but">-</button>
    <div id="c_num">1</div>
    <button id="i_but">+</button>
</div>
<div id="bar"></div>
`;

class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.num = 1;
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.getElementById("#d_but").onclick = this.dec;
        this.shadowRoot.getElementById("#i_but").onclick = this.inc;
    }

    dec(){
        this.num = this.num-1;
        this.shadowRoot.getElementById("#c_num").innerText = this.num;

    }

    inc(){
        this.num = this.num+1;
        this.shadowRoot.getElementById("#c_num").innerText = this.num;

    }
}

customElements.define("the-counter", TheCounter);