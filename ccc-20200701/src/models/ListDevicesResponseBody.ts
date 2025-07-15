// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * d7b818c3-8d3a-732f-bc9e-1782wa16****
   */
  callId?: string;
  /**
   * @example
   * sip:8032****@33.89.XX.XX:64189;transport=tcp;registering_acc=18_134_23_4
   */
  contact?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  deviceType?: string;
  /**
   * @example
   * 1609118499750
   */
  expires?: number;
  /**
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      contact: 'Contact',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      expires: 'Expires',
      extension: 'Extension',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      contact: 'string',
      deviceId: 'string',
      deviceType: 'string',
      expires: 'number',
      extension: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListDevicesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: { 'type': 'array', 'itemType': ListDevicesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

