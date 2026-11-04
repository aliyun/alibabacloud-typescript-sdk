// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceDeviceToDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The device group ID. You can obtain the ID by calling the AddFaceDeviceGroup operation.
   * 
   * This parameter is required.
   * 
   * @example
   * kvjyhurc
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The device name.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDevice
   */
  deviceName?: string;
  /**
   * @remarks
   * The IoT instance ID.
   * 
   * @example
   * TestInstanceId
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  /**
   * @remarks
   * The product key.
   * 
   * This parameter is required.
   * 
   * @example
   * a1Tp7KYZHHK
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

