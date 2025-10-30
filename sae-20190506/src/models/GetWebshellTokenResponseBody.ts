// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebshellTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * HttpUrl :  "https://saenext.console.aliyun.com/cn-shenzhen/app-list/app1/micro-app/shell/pod1?tokenId=xxx
   */
  httpUrl?: string;
  /**
   * @example
   * zWWpvRj_5pzof4hfo7-hGynM8oGMmO_7
   */
  token?: string;
  /**
   * @example
   * wss://sae-webshell.console.aliyun.com/websocket/eamWebshell?tokenId=xxx&region=cn-shenzhen
   */
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      httpUrl: 'HttpUrl',
      token: 'Token',
      webSocketUrl: 'WebSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpUrl: 'string',
      token: 'string',
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

export class GetWebshellTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response
   */
  data?: GetWebshellTokenResponseBodyData;
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWebshellTokenResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

