// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 43
   */
  concurrentCount?: number;
  /**
   * @example
   * 2023-04-23 02:00:34
   */
  endTime?: string;
  /**
   * @example
   * 55
   */
  instanceCount?: number;
  /**
   * @example
   * ga-bp12pismsw4v3tzhf62p1
   */
  instanceId?: string;
  /**
   * @example
   * 7
   */
  orderId?: number;
  /**
   * @example
   * CUSTOMIZE
   */
  productType?: string;
  /**
   * @example
   * 13
   */
  quota?: number;
  /**
   * @example
   * 2023-05-27 04:11:00
   */
  startTime?: string;
  /**
   * @example
   * 65
   */
  useQuota?: number;
  versionDetail?: string;
  /**
   * @example
   * 试用版
   */
  versionName?: string;
  /**
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListVersionsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
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

