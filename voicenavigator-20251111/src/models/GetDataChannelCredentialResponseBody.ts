// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialResponseBodyData extends $dara.Model {
  /**
   * @example
   * GID_rtc-datachannel@@@*******
   */
  clientId?: string;
  /**
   * @example
   * d4c38420-****-43bc-b001-56bfc274****
   */
  deviceId?: string;
  /**
   * @example
   * mqtt.***.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 1774794266093
   */
  expirationTime?: number;
  /**
   * @example
   * *********
   */
  password?: string;
  /**
   * @example
   * datachannel-hz/****
   */
  topic?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetDataChannelCredentialResponseBodyData;
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

