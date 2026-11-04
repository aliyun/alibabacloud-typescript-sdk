// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStreamPushJobRequest extends $dara.Model {
  /**
   * @remarks
   * The DeviceName of the device.
   * You can view the **DeviceName** on the **Devices** page of the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The ID of the device. This is the unique identifier issued by IoT Platform for the device. You can call [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) of IoT Platform to query the device ID.
   * 
   * >Notice:  **IotId** is the globally unique identifier of a device and corresponds to a combination of **ProductKey** and **DeviceName** on a one-to-one basis. If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. If you specify **IotId** together with **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * d7XmBoJhAr88C6PelXDF00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the ID of the current instance on the **Overview** tab of the IoT Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23******
   */
  jobId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the device belongs.
   * You can view the ProductKey on the **Products** page of the IoT Platform console or call [QueryProductList](https://help.aliyun.com/document_detail/69271.html) to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
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

