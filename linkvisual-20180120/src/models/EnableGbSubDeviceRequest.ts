// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableGbSubDeviceRequest extends $dara.Model {
  deviceName?: string;
  iotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      subDeviceId: 'SubDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      subDeviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

