// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call ID from the registration signaling initiated by the device.
   * 
   * @example
   * d7b818c3-8d3a-732f-bc9e-1782wa16****
   */
  callId?: string;
  /**
   * @remarks
   * Device address information.
   * 
   * @example
   * sip:8032****@33.89.XX.XX:64189;transport=tcp;registering_acc=18_134_23_4
   */
  contact?: string;
  /**
   * @remarks
   * Device ID, which is the identity ID of a browser Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * Device type.
   * 
   * @example
   * CHAT
   */
  deviceType?: string;
  /**
   * @remarks
   * Device registration expiration time, in UNIX timestamp format with millisecond precision. If the device does not re-register after expiration, it will go offline.
   * 
   * @example
   * 1609118499750
   */
  expires?: number;
  /**
   * @remarks
   * Agent extension number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Agent ID.
   * 
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Device list.
   */
  data?: ListDevicesResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * List of response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
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

