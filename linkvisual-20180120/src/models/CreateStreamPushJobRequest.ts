// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamPushJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the device. You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The ID of the device. The ID is issued by IoT Platform and is the unique identifier of the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  As the unique identifier of the device, **IotId** has a one-to-one mapping with the combination of **ProductKey** and **DeviceName**. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * d7XmBoJhAr88C6PelXDF00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the ID of the current instance on the **Instance Overview** tab in the IoT Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The type of the stream pushing job. Valid values:
   * 
   * - **1** (default): continuous job.
   * - **2**: triggered job, which ends after an interruption.
   * 
   * @example
   * 1
   */
  jobType?: number;
  /**
   * @remarks
   * The **ProductKey** of the product to which the device belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The push URL. The maximum length is 500 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://****
   */
  pushUrl?: string;
  /**
   * @remarks
   * The type of the video stream. Valid values:
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
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      jobType: 'JobType',
      productKey: 'ProductKey',
      pushUrl: 'PushUrl',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      jobType: 'number',
      productKey: 'string',
      pushUrl: 'string',
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

