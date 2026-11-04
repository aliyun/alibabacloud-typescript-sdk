// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDevicePictureLifeCycleRequest extends $dara.Model {
  /**
   * @remarks
   * The storage period of images in the cloud. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  day?: number;
  /**
   * @remarks
   * The DeviceName of the IPC device.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The IotId of the IPC device. The IotId is the unique identifier that is issued by IoT Platform for the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHR****c300
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * 
   * > If the public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs.
   * 
   * You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query all products under the current account.
   * 
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
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

