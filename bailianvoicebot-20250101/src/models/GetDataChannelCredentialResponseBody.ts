// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialResponseBodyData extends $dara.Model {
  /**
   * @example
   * 26c2f022-b6c0-4ab0-9019-6e1a42dc5582
   */
  clientId?: string;
  /**
   * @example
   * device-3i5x4234f2j4w55e
   */
  deviceId?: string;
  /**
   * @example
   * mqtt-cn-ux146hgtt04.mqtt.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 1745004535507
   */
  expirationTime?: number;
  /**
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * Topic
   * 
   * @example
   * datachannel-prepub-a/dc52807f0eff4b9b8224d06c7f240c07
   */
  topic?: string;
  /**
   * @example
   * Token|LTAI5tRYzHUYYi4XstgMCsL4|mqtt-cn-ux146hgtt04
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
   * success
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * D771A1B6-3D5F-174A-BEE1-98CE1000D337
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

