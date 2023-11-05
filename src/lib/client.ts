import { dev } from "$app/environment";

class Client {
  #ws = new WebSocket((dev ? "ws://localhost:3000" : "") + "/socket");
}
