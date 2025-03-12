class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute("text") || "";
    const url = this.getAttribute("url") || "";
    
    this.shadowRoot.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
            </head>
            <body>
            <style>
              img {
                margin-right: 0.5rem;
              }
            </style>
                <a id="custom-button" href="${url}" role="button">
                    <span id="button-text">${text}</span>
                </a>
            </body>
        </html>
    `;

    this.addIcon()
  }

  addIcon() {
    const button = this.shadowRoot.querySelector('#custom-button');
    const buttonText = this.shadowRoot.querySelector('#button-text');
    const icon = this.getAttribute("icon") || "";
    const image = this.getAttribute("image") || "";
    const imgElement = document.createElement('img');
    if (icon) {
      imgElement.src = icon;
    }
    if (image) {
      imgElement.src = image;
    }
    if (imgElement.src !== "") {
      button.insertBefore(imgElement, buttonText);
    }
  }
}

customElements.define("custom-button", CustomButton);