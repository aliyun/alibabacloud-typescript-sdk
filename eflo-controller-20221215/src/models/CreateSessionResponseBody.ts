// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 2A59143F1
   */
  serverSn?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * i207023871669364793713
   */
  sessionId?: string;
  /**
   * @remarks
   * The session credential.
   * 
   * @example
   * 03f53c719015a9ad4f4f55d66cac2dac161b18e8065ca75a3220b89de389c980
   */
  sessionToken?: string;
  /**
   * @remarks
   * The WebSocket address.
   * 
   * @example
   * ws://x.x.x.x:xx/calypso_web_console
   */
  wssEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverSn: 'ServerSn',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
      wssEndpoint: 'WssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverSn: 'string',
      sessionId: 'string',
      sessionToken: 'string',
      wssEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

