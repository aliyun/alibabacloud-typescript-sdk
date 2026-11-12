// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * ***
   */
  streamlogUrl?: string;
  /**
   * @remarks
   * The authentication token.
   * 
   * @example
   * ak123
   */
  token?: string;
  /**
   * @remarks
   * The WebSocket URL.
   * 
   * @example
   * wss://test.com
   */
  url?: string;
  /**
   * @remarks
   * The URL used to log on to the container through Workbench. After you log on to the service instance, the returned messages use the WebSocket text message format. The message content is Base64-encoded. Refer to the following script for processing.
   * 
   * ```python
   * #!/usr/bin/env python3
   * """macOS/Linux: python webshell_minimal.py \\"wss://...\\"; Ctrl+] disconnects."""
   * import argparse
   * import base64
   * import codecs
   * import getpass
   * import json
   * import os
   * import select
   * import shutil
   * import sys
   * import termios
   * import threading
   * import tty
   * 
   * import websocket
   * 
   * 
   * def main():
   *     parser = argparse.ArgumentParser(description=__doc__)
   *     parser.add_argument(\\"url\\", help=\\"Url from CreateServiceInstanceToken(ActionType=WebShell)\\")
   *     args = parser.parse_args()
   *     if not sys.stdin.isatty():
   *         parser.error(\\"Run from an interactive macOS/Linux terminal\\")
   *     token = os.environ.get(\\"WEBSHELL_TOKEN\\") or getpass.getpass(\\"Token: \\")
   *     ws = websocket.create_connection(args.url, header={\\"Authorization\\": \\"Bearer \\" + token.strip()},
   *                                      subprotocols=[\\"webtty\\"], timeout=10)
   *     ws.settimeout(None)
   *     stopped = threading.Event()
   * 
   *     def receive():
   *         try:
   *             while not stopped.is_set():
   *                 message = ws.recv()  # websocket-client automatically replies to control Ping frames.
   *                 if not message:
   *                     break
   *                 if isinstance(message, str) and message[0] == \\"1\\":
   *                     sys.stdout.buffer.write(base64.b64decode(message[1:], validate=True))
   *                     sys.stdout.buffer.flush()  # Preserve terminal escape sequences and UTF-8 bytes.
   *                 # \\"2\\" is webtty Pong; other types need no handling in this terminal client.
   *         except (websocket.WebSocketException, OSError, ValueError):
   *             pass
   *         finally:
   *             stopped.set()
   * 
   *     fd = sys.stdin.fileno()
   *     previous = termios.tcgetattr(fd)
   *     decoder = codecs.getincrementaldecoder(\\"utf-8\\")()
   *     print(\\"Connected. Ctrl+] disconnects; Ctrl+C is sent to the remote shell.\\", flush=True)
   *     reader = threading.Thread(target=receive, daemon=True)
   *     try:
   *         tty.setraw(fd)
   *         reader.start()
   *         size = None
   *         while not stopped.is_set():
   *             current = shutil.get_terminal_size((80, 24))
   *             if current != size:
   *                 ws.send(\\"3\\" + json.dumps({\\"columns\\": current.columns, \\"rows\\": current.lines}))
   *                 size = current
   *             if select.select([fd], [], [], 0.2)[0]:
   *                 data = os.read(fd, 4096)
   *                 if not data or b\\"\\x1d\\" in data:  # Ctrl+]
   *                     break
   *                 text = decoder.decode(data)  # Do not split a UTF-8 character across Text messages.
   *                 if text:
   *                     ws.send(\\"1\\" + text)  # Raw input, NOT base64 and NOT a JSON wrapper.
   *     finally:
   *         termios.tcsetattr(fd, termios.TCSADRAIN, previous)
   *         stopped.set()
   *         try:
   *             ws.send_close()
   *         except (websocket.WebSocketException, OSError):
   *             pass
   *         ws.shutdown()
   *         if reader.ident is not None:
   *             reader.join(timeout=1)
   *         print(\\"
   * Disconnected.\\", flush=True)
   * 
   * 
   * if __name__ == \\"__main__\\":
   *     try:
   *         main()
   *     except websocket.WebSocketBadStatusException as exc:
   *         sys.exit(f\\"WebSocket handshake failed: HTTP {exc.status_code}\\")
   *     except (websocket.WebSocketException, OSError, UnicodeError, KeyboardInterrupt) as exc:
   *         sys.exit(f\\"WebShell stopped: {type(exc).__name__}\\")
   * 
   * ```
   */
  workbenchUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamlogUrl: 'StreamlogUrl',
      token: 'Token',
      url: 'Url',
      workbenchUrl: 'WorkbenchUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamlogUrl: 'string',
      token: 'string',
      url: 'string',
      workbenchUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

