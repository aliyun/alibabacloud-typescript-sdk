// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceEventRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1539507310000
   */
  beginTime?: number;
  /**
   * @remarks
   * The page number of the returned page. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the IPC device. You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time of the query range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1539607310000
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the intelligent alert event. Valid values:
   * - 0: all intelligent alert events.
   * - A specific sequence number: a single intelligent alert event, such as 10001.
   * 
   * You can view all intelligent alert event types on the **Define Feature** tab of the **Product Details** page in the IoT Platform console. For more information, see [View intelligent alert event types](https://help.aliyun.com/document_detail/207701.html).
   * 
   * @example
   * 0
   */
  eventType?: number;
  /**
   * @remarks
   * The ID of the IPC device. The ID is issued by IoT Platform and uniquely identifies the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** uniquely identifies the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * zLZyi6aOLyOSHa9hsPyD00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * <props="china">You can view the **ID** of the current instance on the **Overview** page in the IoT Platform console. If the instance has an ID, you must specify the ID. Otherwise, the call fails.
   * 
   * <props="china">
   * > If the public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * <props="intl">You do not need to specify this parameter.
   * 
   * @example
   * iot-cn-n6w1y****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      eventType: 'EventType',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      deviceName: 'string',
      endTime: 'number',
      eventType: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
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

