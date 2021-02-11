import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';

class ImaginaryImg extends LitElement {
  static tag = "pfe-responsive-image";
  static get properties() {
    return {
      src: { type: String },
      width: { type: String },
      height: { type: String },
      blur: { type: String },
      quality: { type: String },
      method: { type: String },
      blackwhite: { type: Boolean },
      quality: { type: String }
    }
  }
  constructor() {
    super();
    this.src = null;
    this.width = "1200";
    this.height = null;
    this.blur = "0";
    this.quality = "100";
    this.method = "resize";
    this.blackwhite = false;
    this.quality = "100";
  }

  _renderUrl() {
    const _src = this.src ? this.src : "https://via.placeholder.com/150text="
    // const _width = this.width ? width : "https://via.placeholder.com/150text="
    // const _height = this.height ? height : "https://via.placeholder.com/150text="
    const _height = this.height ? `&height=${this.height}` : "";
    const _colorspace = this.blackwhite ? "bw" : "srgb";
    return `http://localhost:9000/${this.method}?url=${this.src}&quality=${this.quality}&type=jpeg&width=${this.width}${_height}&sigma=${this.blur}&colorspace=${_colorspace}&quality=${this.quality}`
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <img src="${this._renderUrl()}"/>
    `
  }
}

window.customElements.define(ImaginaryImg.tag, ImaginaryImg);