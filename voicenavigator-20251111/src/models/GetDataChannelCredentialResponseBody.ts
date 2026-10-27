// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * GID_rtc-datachannel@@@*******
   */
  clientId?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * d4c38420-****-43bc-b001-56bfc274****
   */
  deviceId?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * mqtt.***.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the credential.
   * 
   * @example
   * 1774794266093
   */
  expirationTime?: number;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * *********
   */
  password?: string;
  /**
   * @remarks
   * The topic for the data channel.
   * 
   * @example
   * datachannel-hz/****
   */
  topic?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Token|LTAI****|mqtt-***
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      deviceId: 'DeviceId',
      endpoint: 'Endpoint',
      expirationTime: 'ExpirationTime',
      password: 'Password',
      topic: 'Topic',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      deviceId: 'string',
      endpoint: 'string',
      expirationTime: 'number',
      password: 'string',
      topic: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataChannelCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data channel credential.
   */
  data?: GetDataChannelCredentialResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8AED3C8-F57B-5D71-9A34-4A170287533F
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
      data: GetDataChannelCredentialResponseBodyData,
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

