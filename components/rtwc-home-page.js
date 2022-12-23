customElements.define("home-page", class extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {

            // add a CTRL+click event to load-file elements, opening the Source Code in a new tab
            this.querySelectorAll("load-file").forEach((lf) => {
                lf.addEventListener("click", (e) => {
                    if (e.ctrlKey) {
                        let gitURI = `https://github.com/roads-social-firmas/roads-social-firmas.github.io/edit/main/`
                        let socialFirm = document.querySelector("meta[name=socialdirectory]").content;
                        let file = lf.getAttribute("src");
                        file += `?` + (new Date()/1);
                        let newWindow = window.open(gitURI + socialFirm + `/` + file, '_blank');
                        newWindow.focus();
                    } else {
                    }
                });
            });

            // simulate website traffic
            fetch("https://roadsmap.nl");

        }, 100);
    }
})
