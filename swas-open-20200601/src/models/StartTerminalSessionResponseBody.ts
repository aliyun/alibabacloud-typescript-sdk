// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The security token that is included in the request header of the WebSocket request for authentication.
   * 
   * @example
   * token-xxxaaz
   */
  securityToken?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * ffb90b6e-b18a-4a33-88cf-86fb88****
   */
  sessionId?: string;
  /**
   * @remarks
   * The URL of the WebSocket session that is used to remotely connect to the Simple Application Server instance. The URL contains the session ID (`SessionId`) and the security token (`SecurityToken`) that is used for authentication.
   * 
   * @example
   * wss://xxxx
   */
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      sessionId: 'SessionId',
      webSocketUrl: 'WebSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityToken: 'string',
      sessionId: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

