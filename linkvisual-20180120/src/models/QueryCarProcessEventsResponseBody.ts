// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCarProcessEventsResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The action type of the vehicle.
   * 
   * @example
   * 1
   */
  actionType?: number;
  /**
   * @remarks
   * The number of detection boxes recognized by the IPC device.
   * 
   * @example
   * 0
   */
  areaIndex?: number;
  /**
   * @remarks
   * The confidence level of the vehicle recognition.
   * 
   * @example
   * 63
   */
  confidence?: number;
  /**
   * @remarks
   * The ID of the intelligent alert event.
   * 
   * @example
   * dailyb3d6658d9****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the intelligent alert event picture.
   * 
   * @example
   * SU5LT2pXaUM4MV****Nzg
   */
  eventPicId?: string;
  /**
   * @remarks
   * The URL of the intelligent alert event picture.
   * 
   * @example
   * https://example.com/test.jpg
   */
  eventPicUrl?: string;
  /**
   * @remarks
   * The timestamp when the event occurred, in milliseconds.
   * 
   * @example
   * 1646288428361
   */
  eventTime?: number;
  /**
   * @remarks
   * The type of the intelligent alert event. Valid values:
   * 
   * - **0**: All intelligent alert events.
   * - Multiple intelligent alert events: Enter the sequence numbers of the intelligent alert events and separate them with commas (,), such as `10001,10002`.
   * > You can specify up to 10 intelligent alert events at a time.
   * 
   * To view all intelligent alert event types, go to the **Define Feature** tab of the **Product Details** page in the IoT Platform console. For more information, see [View intelligent alert event types](https://help.aliyun.com/document_detail/207701.html).
   * 
   * @example
   * 10005
   */
  eventType?: number;
  /**
   * @remarks
   * The IotId of the V-series edge appliance.
   * 
   * @example
   * gl9kLgp0UsPSCcIM8EAY00****
   */
  iotId?: string;
  /**
   * @remarks
   * The license plate number.
   * 
   * @example
   * ZheA6****
   */
  plateNo?: string;
  /**
   * @remarks
   * The DeviceName of the IPC device.
   * 
   * @example
   * car_test
   */
  subDeviceName?: string;
  /**
   * @remarks
   * The DeviceNickName of the IPC device.
   * 
   * @example
   * TestVehicle
   */
  subDeviceNickName?: string;
  /**
   * @remarks
   * The ID of the IPC device.
   * 
   * @example
   * ImP6ECd1aQxio9CAfWTO****
   */
  subIotId?: string;
  /**
   * @remarks
   * The ProductKey of the IPC device.
   * 
   * @example
   * a1Duh0F****
   */
  subProductKey?: string;
  /**
   * @remarks
   * The task ID of the vehicle detection event.
   * 
   * @example
   * daily55617e7653354490938d****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      areaIndex: 'AreaIndex',
      confidence: 'Confidence',
      eventId: 'EventId',
      eventPicId: 'EventPicId',
      eventPicUrl: 'EventPicUrl',
      eventTime: 'EventTime',
      eventType: 'EventType',
      iotId: 'IotId',
      plateNo: 'PlateNo',
      subDeviceName: 'SubDeviceName',
      subDeviceNickName: 'SubDeviceNickName',
      subIotId: 'SubIotId',
      subProductKey: 'SubProductKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      areaIndex: 'number',
      confidence: 'number',
      eventId: 'string',
      eventPicId: 'string',
      eventPicUrl: 'string',
      eventTime: 'number',
      eventType: 'number',
      iotId: 'string',
      plateNo: 'string',
      subDeviceName: 'string',
      subDeviceNickName: 'string',
      subIotId: 'string',
      subProductKey: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The list of returned intelligent alert events.
   */
  pageData?: QueryCarProcessEventsResponseBodyDataPageData[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of vehicle recognition events.
   * 
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryCarProcessEventsResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * - **200**: The call was successful.
   * - Other values: An error occurred. For more information, see [Error codes](https://help.aliyun.com/document_detail/288314.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned if the call is successful.
   */
  data?: QueryCarProcessEventsResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Specified access key is not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B8E77F0-7713-0139-A3D6-93482A025D45
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCarProcessEventsResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

