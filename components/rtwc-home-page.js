customElements.define(
  "home-page",
  class extends HTMLElement {
    connectedCallback() {
      setTimeout(() => {
        // add a CTRL+click event to load-file elements, opening the Source Code in a new tab
        this.querySelectorAll("load-file").forEach((lf) => {
          lf.addEventListener("click", (e) => {
            if (e.ctrlKey) {
              let gitURI = `https://github.com/roads-social-firmas/roads-social-firmas.github.io/edit/main/`;
              let socialFirm = document.querySelector(
                "meta[name=socialdirectory]"
              ).content;
              let file = lf.getAttribute("src");
              let uri = gitURI + socialFirm + `/` + file;
              uri += `?` + new Date() / 1; // add cache buster to uri
              let newWindow = window.open(uri, "_blank");
              newWindow.focus();
            } else {
            }
          });
        });

        // simulate website traffic on your test VPS server
        fetch("https://roadsmap.nl", {
          method: "GET",
          mode: "no-cors",
        });
        // simulate website traffic on your test VPS server
      }, 100);
    }
  }
);
