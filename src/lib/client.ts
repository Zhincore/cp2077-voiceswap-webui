import { browser, dev } from "$app/environment";

class Client {
  #ws?: WebSocket;

  constructor() {
    if (browser) {
      this.#ws = new WebSocket((dev ? "ws://localhost:3000" : "") + "/socket");
      this.#ws.onmessage = this.#handleMessage.bind(this);
    }
  }

  #handleMessage(message: MessageEvent) {
    console.log(message);
  }

  send(msg: string) {
    if (this.#ws && this.#ws.readyState === WebSocket.OPEN) this.#ws?.send(msg);
  }
}

export const client = new Client();
