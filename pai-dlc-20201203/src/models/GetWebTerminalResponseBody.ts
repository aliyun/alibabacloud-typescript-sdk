// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebTerminalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID for this call, used for diagnostics and troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The WebSocket link for accessing the container. You need to build a WebSocket client. For the detailed communication format, refer to the following code:
   *   ```
   *   ws = new WebSocket(
   *     `wss://xxxxx`,
   *   );
   *   ws.onopen = function open() {
   *     console.warn(\\"connected\\");
   *     term.write(\\"\\");
   *   };
   * 
   *   ws.onclose = function close() {
   *     console.warn(\\"disconnected\\");
   *     term.write(\\"Connection closed\\");
   *   };
   * 
   *   // Receive response from the backend
   *   ws.onmessage = function incoming(event) {
   *     const msg = JSON.parse(event.data);
   *     console.warn(msg);
   *     if (msg.operation === \\"stdout\\") {
   *       term.write(msg.data);
   *     } else {
   *       console.warn(\\"invalid msg operation: \\" + msg);
   *     }
   *   };
   * 
   *   // Console input
   *   term.onData(data => {
   *     const msg = { operation: \\"stdin\\", data: data };
   *     ws.send(JSON.stringify(msg));
   *   });
   * 
   *   term.onResize(size => {
   *     const msg = { operation: \\"resize\\", cols: size.cols, rows: size.rows };
   *     ws.send(JSON.stringify(msg));
   *   });
   * 
   *   fitAddon.fit();
   * };
   * ```
   * 
   * @example
   * wss://*****
   */
  webTerminalUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webTerminalUrl: 'WebTerminalUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webTerminalUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

