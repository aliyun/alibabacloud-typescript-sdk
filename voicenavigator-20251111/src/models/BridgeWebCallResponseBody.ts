// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeWebCallResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1515602866088888___5ec8446df1e2495a97969e887ab9e748
   */
  channelId?: string;
  /**
   * @example
   * 1774794266093
   */
  expirationTime?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  serverUrl?: string;
  /**
   * @example
   * f814f3ae-b2a7-44fb-883c-771221274673
   */
  sessionId?: string;
  /**
   * @remarks
   * token
   * 
   * @example
   * 57aa3e9b11d2fa5736787cacf0408c1a
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      serverUrl: 'ServerUrl',
      sessionId: 'SessionId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      expirationTime: 'string',
      instanceId: 'string',
      serverUrl: 'string',
      sessionId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BridgeWebCallResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: BridgeWebCallResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BridgeWebCallResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

