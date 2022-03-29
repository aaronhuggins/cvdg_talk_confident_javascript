import { Webview } from "https://deno.land/x/webview@0.7.0-pre.1/mod.ts";

const html = `
  <html>
  <body>
    <h1>Hello from deno v${Deno.version.deno}</h1>
  </body>
  </html>
`;

const webview = new Webview();

webview.title = "Deno Webview Example";
webview.navigate(`data:text/html,${encodeURIComponent(html)}`);
webview.run();
