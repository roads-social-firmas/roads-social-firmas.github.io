customElements.define(
  "nieuws-item",
  class extends HTMLElement {
    connectedCallback() {
      setTimeout(() => {
        let newstext = this.innerHTML;
        this.innerHTML = ""; // make sure innerHTML is empty
        if (!this.hasAttribute("hidden"))
          // do not process hidden items
          this.append(
            window.elementFromObject({
              tag: "STYLE",
              innerText: /* css */ `.newsitem {
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
            }`,
            }),
            // createDIV with news IMG and text
            window.elementFromObject({
              tag: "DIV",
              classes: ["newsitem"],
              append: [
                window.elementFromObject({
                  tag: "IMG",
                  src: this.getAttribute("img"),
                  styles: {
                    width: "100%", // force image in grid
                  },
                  onerror: (evt) =>
                    console.error("missing image", this.getAttribute("img")),
                }),
                (this.editor = window.elementFromObject({
                  tag: "P",
                  classes: ["message"],
                  part: "newsbackground",
                  innerHTML: newstext,
                  onclick: (evt) => {
                    if (evt.shiftKey) {
                      this.editor.toggleAttribute("contenteditable");
                      this.editor.focus();
                      evt.stopPropagation();
                    }
                  },
                  onkeydown: (evt) => {
                    if (evt.shiftKey && evt.key === "Enter") {
                      this.editor.save(evt);
                    }
                  },
                  load: () => {
                    // todo read .txt file on server
                    this.editor.innerHTML = newstext;
                  },
                  save: (evt) => {
                    /* save this DOM element to php endpoint                  */
                    fetch(
                      "https://roads-technology.nl/rt-fileapi/savefile.php?f=rt-nw",
                      {
                        method: "POST",
                        body: this.editor.innerHTML,
                      }
                    )
                      .then((res) => res.json())
                      .then((json) => {
                        console.log(typeof json, json);
                      });
                  },
                })),
              ],
            })
          );
      });
    }
  }
);
