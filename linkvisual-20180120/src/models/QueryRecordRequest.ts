// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query range. The time is a 10-digit timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1508200012
   */
  beginTime?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The DeviceName of the IP camera. You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * camera1
   */
  deviceName?: string;
  /**
   * @remarks
   * The end time of the query range. The time is a 10-digit timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1582420940
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the IP camera. The ID is issued by IoT Platform and is the unique identifier of the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** is the unique identifier of the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The instance ID. You can view the ID of the current instance on the **Overview** tab in the IoT Platform console.
   * 
   * >Notice: 
   * - If your instance has an ID, you must specify the **ID**. Otherwise, the call fails.
   * - If your instance does not have an ID, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iot-060a****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to return thumbnails. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * @example
   * true
   */
  needSnapshot?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ProductKey of the product to which the IP camera belongs. You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information of all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1BwAGV****
   */
  productKey?: string;
  /**
   * @remarks
   * The recording type. Valid values:
   * 
   * - **0**: continuous recording.
   * - **1**: intelligent alert event recording.
   * - **2** (default): manual recording.
   * 
   * If this parameter is left empty, all recording types are returned.
   * 
   * @example
   * 1
   */
  recordType?: number;
  /**
   * @remarks
   * The stream type. Valid values:
   * - **0** (default): main stream.
   * - **1**: sub stream.
   * 
   * @example
   * 1
   */
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      needSnapshot: 'NeedSnapshot',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      recordType: 'RecordType',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      needSnapshot: 'boolean',
      pageSize: 'number',
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

