// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceBasicInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Firmware version of the device.
   * 
   * @example
   * 2.0.3
   */
  firmwareVersion?: string;
  /**
   * @remarks
   * MAC address of the device.
   * 
   * @example
   * b4:xx:xx:xx:65:2b
   */
  mac?: string;
  /**
   * @remarks
   * Name of the device.
   * 
   * @example
   * 我的设备
   */
  name?: string;
  /**
   * @remarks
   * SN information of the device.
   * 
   * @example
   * 1200xxx048
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      name: 'Name',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      mac: 'string',
      name: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceBasicInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned. A value of 200 indicates that the call succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return result of invoking this API.
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
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * Detailed information returned.
   */
  result?: GetDeviceBasicInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceBasicInfoResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

