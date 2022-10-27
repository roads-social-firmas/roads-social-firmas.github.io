customElements.define("home-page", class extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            this.querySelectorAll("load-file").forEach((lf) => {
                lf.addEventListener("click", (e) => {
                    if (e.ctrlKey) {
                        let gitURI = `https://github.com/roads-social-firmas/roads-social-firmas.github.io/edit/main/`
                        let socialFirm = document.querySelector("meta[name=socialdirectory]").content;
                        let file = lf.getAttribute("src");
                        let newWindow = window.open(gitURI + socialFirm + `/` + file, '_blank');
                        newWindow.focus();
                    } else {
                    }
                });
            });
        }, 100);
    }
})
