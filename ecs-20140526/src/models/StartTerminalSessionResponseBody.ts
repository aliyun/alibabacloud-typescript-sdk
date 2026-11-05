// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTerminalSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB5173B0-8E80-564E-AAD1-3135412*****
   */
  requestId?: string;
  /**
   * @remarks
   * The security token appended to the WebSocket request header, which is used by the system to verify the request.
   * 
   * @example
   * d86c2df2-d19c-4bd8-b817-a19ef123****
   */
  securityToken?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * s-hz023od0x9****
   */
  sessionId?: string;
  /**
   * @remarks
   * The URL corresponding to the WebSocket session for remotely connecting to the ECS instance. It includes the session ID (`SessionId`) and the `SecurityToken` used for system verification.
   * 
   * @example
   * wss://cn-hangzhou.axt.aliyuncs.com/session?sessionId=s-hz023od0x9****&token=d86c2df2-d19c-4bd8-b817-a19ef123****
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

