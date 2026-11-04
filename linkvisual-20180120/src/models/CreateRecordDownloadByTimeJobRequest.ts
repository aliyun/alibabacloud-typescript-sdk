// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordDownloadByTimeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The start time. The value must be a 10-digit UNIX timestamp in seconds. Valid values: 0 to 2147483647.
   * 
   * This parameter is required.
   * 
   * @example
   * 1900000000
   */
  beginTime?: number;
  /**
   * @remarks
   * The DeviceName of the video device. You can view the **DeviceName** of devices under a specified product on the **Devices** page in the [IoT Platform console](https://iot.console.aliyun.com/devices) or by calling the [QueryDevice](https://help.aliyun.com/document_detail/69905.html) operation.
   * 
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * Device01
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time. The value must be a 10-digit UNIX timestamp in seconds. Valid values: 0 to 2147483647. The value must be greater than the start time specified by **BeginTime**.
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
   * >Notice:  **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
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
   * You can view the information about all products under the current instance on the **Products** page in the [IoT Platform console](https://iot.console.aliyun.com/product) or by calling the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation.
   * 
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1Bw******
   */
  productKey?: string;
  /**
   * @remarks
   * The recording type. Valid values:
   * 
   * - **0**: continuous recording.
   * - **1**: event recording.
   * - **2**: on-demand recording.
   * - **4**: local-to-cloud recording.
   * - **Empty**: all recordings.
   * 
   * @example
   * 0
   */
  recordType?: number;
  /**
   * @remarks
   * The stream type. Valid values:
   * 
   * - **0** (default): main stream.
   * - **1**: sub stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      recordType: 'RecordType',
      streamType: 'StreamType',
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
      recordType: 'number',
      streamType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

