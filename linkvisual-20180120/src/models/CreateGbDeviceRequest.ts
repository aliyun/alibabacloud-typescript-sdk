// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGbDeviceRequest extends $dara.Model {
  description?: string;
  deviceName?: string;
  deviceType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  mediaNetProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productKey?: string;
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      gbId: 'GbId',
      iotInstanceId: 'IotInstanceId',
      mediaNetProtocol: 'MediaNetProtocol',
      password: 'Password',
      productKey: 'ProductKey',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceName: 'string',
      deviceType: 'number',
      gbId: 'string',
      iotInstanceId: 'string',
      mediaNetProtocol: 'string',
      password: 'string',
      productKey: 'string',
      subProductKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

