// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The device name of the IPC device.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The name of the recording file. You can call [QueryRecord](https://help.aliyun.com/document_detail/107922.html) to query the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * 1623999491_LYPsmZGeEN8GdKzMtYNiBXXXXXXXXX_0/c0064411-2065-400a-a13e-********
   */
  fileName?: string;
  /**
   * @remarks
   * The device ID of the IPC device. This is the unique identifier issued by IoT Platform for the device. You can call [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) of IoT Platform to query the device ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. **IotId** is the globally unique identifier of a device and corresponds to a combination of **ProductKey** and **DeviceName** on a one-to-one basis. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWR****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * <props="china">You can view the **ID** of the current instance on the **Overview** page in the IoT Platform console. If the ID value is displayed, you must specify this parameter. Otherwise, the call fails.
   * 
   * <props="china">
   * > If no ID value is displayed for the public instance, refer to [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * <props="intl">You do not need to specify this parameter.
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs.
   * You can view the ProductKey on the **Products** page in the IoT Platform console or call [QueryProductList](https://help.aliyun.com/document_detail/69271.html) to view the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      fileName: 'FileName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      fileName: 'string',
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

