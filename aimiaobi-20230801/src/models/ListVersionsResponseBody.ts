// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Concurrency
   * 
   * @example
   * 43
   */
  concurrentCount?: number;
  /**
   * @remarks
   * Service expiration time
   * 
   * @example
   * 2023-04-23 02:00:34
   */
  endTime?: string;
  /**
   * @remarks
   * Number of instances
   * 
   * @example
   * 55
   */
  instanceCount?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * ga-bp12pismsw4v3tzhf62p1
   */
  instanceId?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 7
   */
  orderId?: number;
  /**
   * @remarks
   * Version type (TRIAL: trial edition, STANDARD: Standard Edition, CUSTOMIZE: custom edition)
   * 
   * @example
   * CUSTOMIZE
   */
  productType?: string;
  /**
   * @remarks
   * Trial edition quota
   * 
   * @example
   * 13
   */
  quota?: number;
  /**
   * @remarks
   * Service start time
   * 
   * @example
   * 2023-05-27 04:11:00
   */
  startTime?: string;
  /**
   * @remarks
   * Trial edition usage count
   * 
   * @example
   * 65
   */
  useQuota?: number;
  /**
   * @remarks
   * Version details
   * 
   * @example
   * 标准版-公共并发：1并发
   */
  versionDetail?: string;
  /**
   * @remarks
   * Version
   * 
   * @example
   * 试用版
   */
  versionName?: string;
  /**
   * @remarks
   * Validity status: 0 indicates active, 1 indicates expired (go to the renewal page), and 2 indicates unavailable (go to the purchase page)
   * 
   * @example
   * 87
   */
  versionStatus?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentCount: 'ConcurrentCount',
      endTime: 'EndTime',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productType: 'ProductType',
      quota: 'Quota',
      startTime: 'StartTime',
      useQuota: 'UseQuota',
      versionDetail: 'VersionDetail',
      versionName: 'VersionName',
      versionStatus: 'VersionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentCount: 'number',
      endTime: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      orderId: 'number',
      productType: 'string',
      quota: 'number',
      startTime: 'string',
      useQuota: 'number',
      versionDetail: 'string',
      versionName: 'string',
      versionStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ListVersionsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVersionsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

