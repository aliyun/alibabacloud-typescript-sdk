// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocalRecordDownloadByTimeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The start time. The value must be a 10-digit timestamp in seconds. Valid values: 0 to 2147483647.
   * 
   * This parameter is required.
   * 
   * @example
   * 1900000000
   */
  beginTime?: number;
  /**
   * @remarks
   * The DeviceName of the video device. You can view the **DeviceName** of a device under a specified product on the **Devices** page in the IoT Platform console or by calling the [QueryDevice](https://help.aliyun.com/document_detail/69905.html) operation.
   * 
   * >Notice: If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * Device01
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time. The value must be a 10-digit timestamp in seconds. Valid values: 0 to 2147483647. The value must be greater than the start time specified by **BeginTime**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2100000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the video device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation to query the ID.
   * 
   * >Notice: 
   * **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the ID of the current instance on the **Instance Overview** tab in the IoT Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * iot-******
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The **ProductKey** of the product to which the video device belongs.
   * 
   * You can view the information of all products under the current instance on the **Products** page in the IoT Platform console or by calling the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation.
   * 
   * >Notice: If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1Bw******
   */
  productKey?: string;
  /**
   * @remarks
   * The upload speed multiplier of the device. Default value: **1.0**. Valid values: **0.125** to **8.0**.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      speed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

