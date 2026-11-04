// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPictureSearchAppWithDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a502d3fbab8410e8fd4be9037c7****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The list of device IoT IDs. You can specify the IoT IDs of V-series edge all-in-one devices or cameras.
   * 
   * An IoT ID is a unique identifier issued by IoT Platform for a device.
   * You can call the IoT Platform [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the IoT ID.
   * 
   * You can specify up to 20 device IoT IDs in a single call.
   * 
   * This parameter is required.
   * 
   * @example
   * VrJwPGjC1sJlqPjZA3cxg4****
   */
  deviceIotIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * - Enterprise Enterprise instance: You must specify this parameter. You can view the ID of your Enterprise Enterprise instance on the **Instance Overview** page in the IoT Platform console.
   * - Public instance: You do not need to specify this parameter.
   * 
   * @example
   * iot-060a****
   */
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      deviceIotIds: 'DeviceIotIds',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      deviceIotIds: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceIotIds)) {
      $dara.Model.validateArray(this.deviceIotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

