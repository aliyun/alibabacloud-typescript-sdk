// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordUrlByTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query range. The value is a 10-digit timestamp in seconds.
   * 
   * The minimum value is 0, and the maximum value is 2147483647.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638675381
   */
  beginTime?: number;
  /**
   * @remarks
   * The DeviceName of the IP camera.
   * You can view the **DeviceName** on the **Devices** page of the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time of the query range. The value is a 10-digit timestamp in seconds.
   * 
   * The minimum value is 0, and the maximum value is 2147483647.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638866820
   */
  endTime?: number;
  /**
   * @remarks
   * The IotId of the IP camera. The IotId is the unique identifier issued by IoT Platform for the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the IotId.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * d7XmBoJhAr88C6PelXDF00****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page of the IoT Platform console. If the instance has an ID, you must specify this ID. Otherwise, the call fails.
   * 
   * > If the public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot-060a****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IP camera belongs.
   * You can view the ProductKey on the **Products** page of the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The type of the video stream. Valid values:
   * 
   * - **0** (default): main stream
   * - **1**: sub stream
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The validity period of the URL. Valid values: 10 to 3600. Unit: seconds.
   * 
   * @example
   * 200
   */
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
      urlValidDuration: 'UrlValidDuration',
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
      streamType: 'number',
      urlValidDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

