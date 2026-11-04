// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCarProcessEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The action type of the vehicle. Valid values:
   * 
   * - **1**: Enter.
   * - **2**: Stay.
   * - **3**: Leave.
   * 
   * @example
   * 2
   */
  actionType?: number;
  /**
   * @remarks
   * The detection box of the IPC device. You can call the [InvokeThingService](https://help.aliyun.com/document_detail/69584.html) operation to query the number of detection boxes. Set **identifier** to **QueryAlgoTaskDetails**.
   * 
   * @example
   * 1
   */
  areaIndex?: number;
  /**
   * @remarks
   * The start time of the query range. The time is a 13-digit timestamp in milliseconds.
   * 
   * @example
   * 1646288487368
   */
  beginTime?: number;
  /**
   * @remarks
   * The page number of the returned page. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query range. The time is a 13-digit timestamp in milliseconds.
   * 
   * @example
   * 1646288488368
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID. You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console.
   * 
   * >Notice: 
   * - If the instance has an ID, you must specify this ID. Otherwise, the call fails.
   * - If the instance does not have an ID<props="intl"><ph> or the **Instance Overview** page is not displayed</ph>, you do not need to specify this parameter.
   * 
   * 
   * 
   * For more information about instances, see [Instance overview](https://help.aliyun.com/document_detail/356505.html).
   * 
   * @example
   * iotx-oxsshare****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 20. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The license plate number. The value can be up to 15 characters in length.
   * 
   * @example
   * ZheAM****
   */
  plateNo?: string;
  /**
   * @remarks
   * The name of the IPC device.
   * You can view the **DeviceName** on the **Devices** page in the IoT Platform console.
   * >Notice:  If you specify this parameter, you must also specify **ProductKey**.
   * 
   * @example
   * car_test
   */
  subDeviceName?: string;
  /**
   * @remarks
   * The ID of the IP camera (IPC) device. The ID is issued by IoT Platform and uniquely identifies the device. You can call the [QueryDeviceDetail](https://help.aliyun.com/document_detail/69594.html) operation of IoT Platform to query the ID.
   * 
   * >Notice:  If you specify this parameter, you do not need to specify **ProductKey** or **DeviceName**. The **IotId** uniquely identifies the device and corresponds to the combination of **ProductKey** and **DeviceName**. If you specify both **IotId** and the combination of **ProductKey** and **DeviceName**, **IotId** takes precedence.
   * 
   * @example
   * ImP6ECd1aQ****CAfWTO000101
   */
  subIotId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the IPC device belongs.
   * You can view the ProductKey on the **Products** page in the IoT Platform console or call the [QueryProductList](https://help.aliyun.com/document_detail/69271.html) operation to query the information about all products under the current account.
   * >Notice:  If you specify this parameter, you must also specify **DeviceName**.
   * 
   * @example
   * a1Duh0F****
   */
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      areaIndex: 'AreaIndex',
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      plateNo: 'PlateNo',
      subDeviceName: 'SubDeviceName',
      subIotId: 'SubIotId',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      areaIndex: 'number',
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      iotInstanceId: 'string',
      pageSize: 'number',
      plateNo: 'string',
      subDeviceName: 'string',
      subIotId: 'string',
      subProductKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

