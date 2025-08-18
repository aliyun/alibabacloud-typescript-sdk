// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheReserveInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * Cache reserve capacity. Unit: GB.
   * 
   * @example
   * 512000
   */
  cacheReserveCapacity?: number;
  /**
   * @remarks
   * Cache reserve usage region.
   * 
   * @example
   * HK
   */
  cacheReserveRegion?: string;
  chargeType?: string;
  /**
   * @remarks
   * Instance purchase time.
   * 
   * @example
   * 2024-04-12T05:41:51Z
   */
  createTime?: string;
  /**
   * @remarks
   * Duration of the instance purchase, unit: months.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * Instance expiration time.
   * 
   * @example
   * 2024-10-05T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **online**: The instance is in service.
   * *   **offline**: The instance has expired within an allowable period. In this state, it is unavailable.
   * *   **disable**: The instance has been released.
   * *   **overdue**: The instance has been stopped due to overdue payments.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cacheReserveCapacity: 'CacheReserveCapacity',
      cacheReserveRegion: 'CacheReserveRegion',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserveCapacity: 'number',
      cacheReserveRegion: 'string',
      chargeType: 'string',
      createTime: 'string',
      duration: 'number',
      expireTime: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCacheReserveInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cache reserve instances.
   */
  instanceInfo?: ListCacheReserveInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * Page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default **500**, range: **1~500**.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * Total pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListCacheReserveInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfo)) {
      $dara.Model.validateArray(this.instanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

