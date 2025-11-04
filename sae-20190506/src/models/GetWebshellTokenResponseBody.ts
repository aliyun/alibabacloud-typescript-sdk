// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebshellTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Webshell page address
   * 
   * @example
   * HttpUrl :  "https://saenext.console.aliyun.com/cn-shenzhen/app-list/app1/micro-app/shell/pod1?tokenId=xxx
   */
  httpUrl?: string;
  /**
   * @remarks
   * The information about the token.
   * 
   * @example
   * zWWpvRj_5pzof4hfo7-hGynM8oGMmO_7
   */
  token?: string;
  /**
   * @remarks
   * The WebSocket address.
   * 
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
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetWebshellTokenResponseBodyData;
  /**
   * @remarks
   * The error code returned if the call failed. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, the **ErrorCode** parameter is returned. For more information, see **Error codes** section in this topic.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Value description:
   * 
   * *   If the request was successful, a success message is returned.
   * *   An error code is returned if the request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace.
   * 
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

