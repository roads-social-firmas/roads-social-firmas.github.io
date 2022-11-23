customElements.define(
  "nieuws-item",
  class extends HTMLElement {
    connectedCallback() {
      let img = this.getAttribute("img");
      setTimeout(() => {
        this.innerHTML = /*html*/ `
        <style>
          .newsitem {
              display: grid;
              grid-template-columns: 240px 1fr;
              gap: 1em;
              background: beige;
          }
          .newsitem p {
              margin : 0;
              padding: .5em;
              background: lightblue;
              font-size: 1.1em;
              color: white;
              text-shadow: 1px 1px 1px black;
          }
      </style>
        <div class="newsitem">
            <img width="100%" src="${img}">
            <p class="message" part="newsbackground">${this.innerHTML}</p>
        </div>`;
      });
    }
  }
);
