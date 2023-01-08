class InfoCard extends HTMLElement {
    constructor() {
      super();
  
      this.date = "";
      this.location = "";
    }
  
    connectedCallback() {
      this.date = this.getAttribute("date");
      this.location = this.getAttribute("location");
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div style="text-align: center; font-family: sans-serif">
          <h1>${this.date}</h1>
          <p>${this.location}</p>
        </div>
        `;
    }
  }
  
  customElements.define("info-card", InfoCard);