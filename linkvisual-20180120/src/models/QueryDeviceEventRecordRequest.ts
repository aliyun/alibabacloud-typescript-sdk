// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceEventRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The DeviceName of the IP camera (IPC) device.
   * You can view the **DeviceName** on the **Devices** page of the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The ID of the intelligent alert event. You can call the [QueryDeviceEvent](https://help.aliyun.com/document_detail/107916.html) operation to obtain the event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 907084996e1d44788d0*****43906_160803*****37
   */
  eventId?: string;
  /**
   * @remarks
   * The IotId of the IP camera (IPC) device. The IotId is the globally unique identifier of the device that is issued by IoT Platform. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the globally unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa9hsPyD00****
   */
  iotId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * <props="china">You can view the **ID** of the instance on the **Instance Overview** page of the IoT Platform console. If your instance has an ID, you must specify the ID. Otherwise, the call fails.
   * 
   * <props="china">
   * > If your public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * <props="intl">You do not need to specify this parameter.
   * 
   * @example
   * iot-cn-n6w1****z0t
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IP camera (IPC) device belongs.
   * You can view the ProductKey on the **Products** page of the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information of all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      eventId: 'EventId',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      eventId: 'string',
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

