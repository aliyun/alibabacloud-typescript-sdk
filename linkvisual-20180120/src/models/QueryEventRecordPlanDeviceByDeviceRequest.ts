// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventRecordPlanDeviceByDeviceRequest extends $dara.Model {
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
   * The device ID of the IPC device. This is the unique identifier issued by IoT Platform for the device. You can call [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) of IoT Platform to query the device ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. **IotId** is a globally unique identifier of the device and corresponds to a combination of **ProductKey** and **DeviceName** on a one-to-one basis. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa9hsPyD00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Overview** page in the IoT Platform console. If the ID value exists, you must specify this ID value. Otherwise, the call fails.
   * 
   * > If the public instance does not have an ID value, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs.
   * You can view the ProductKey on the **Products** page in the IoT Platform console, or call [QueryProductList](https://help.aliyun.com/document_detail/69271.html) to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The stream type. Valid values:
   * - **0** (default): main stream
   * - **1**: sub stream
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
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
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

