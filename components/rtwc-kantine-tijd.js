customElements.define(
  "kantine-tijd",
  class extends HTMLElement {
    connectedCallback() {
      console.log(666);
      this.innerHTML =
        new Intl(
          DateTimeFormat("nl-NL", { timeStyle: "short" }).format(
            new Date(this.getAttribute("start") || "now")
          )
        ).format(new Date(this.getAttribute("end") || "now")) +
        " - " +
        new Intl(
          DateTimeFormat("nl-NL", { timeStyle: "short" }).format(
            new Date(this.getAttribute("end") || "now")
          )
        ).format(new Date(this.getAttribute("end") || "now"));
    }
  }
);
