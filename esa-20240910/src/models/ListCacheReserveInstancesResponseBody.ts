// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheReserveInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The cache reservation capacity. Unit: GB.
   * 
   * @example
   * 512000
   */
  cacheReserveCapacity?: number;
  /**
   * @remarks
   * The region where the cache reservation is used.
   * 
   * @example
   * HK
   */
  cacheReserveRegion?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PREPAY: Prepaid.
   * - POSTPAY: Pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time of the instance. The time is in UTC and formatted in accordance with the ISO 8601 standard, for example, 2024-04-12T05:41:51Z.
   * 
   * @example
   * 2024-04-12T05:41:51Z
   */
  createTime?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Unit: months.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * The time when the instance expires. The time is in UTC and formatted in accordance with the ISO 8601 standard, for example, 2024-10-05T16:00:00Z.
   * 
   * @example
   * 2024-10-05T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: Normal service status.
   * - **offline**: Expired but not overdue, and in an inactive state.
   * - **disable**: Released.
   * - **overdue**: Stopped due to an overdue payment.
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
   * The list of cache reservation instances.
   */
  instanceInfo?: ListCacheReserveInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **500**. Valid values: **1 to 500**.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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

