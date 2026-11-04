// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFaceDeviceFromDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The device group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDeviceGroupId
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The device name.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDeviceName
   */
  deviceName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * TestIotInstanceId
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
   * TestProductKey
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

