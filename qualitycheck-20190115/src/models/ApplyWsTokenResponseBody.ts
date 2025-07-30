// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyWsTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 42e59bcd-7206-44c5-ad34-525d364687c4
   */
  sessionId?: string;
  /**
   * @example
   * 5607b21d1728700640
   */
  token?: string;
  /**
   * @example
   * wss://ws-gateway-real-voice.aliyuncs.com
   */
  wsEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      token: 'Token',
      wsEndpoint: 'WsEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      token: 'string',
      wsEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyWsTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ApplyWsTokenResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyWsTokenResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

