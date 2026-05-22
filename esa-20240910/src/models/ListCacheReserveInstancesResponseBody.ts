// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheReserveInstancesResponseBodyInstanceInfo extends $dara.Model {
  cacheReserveCapacity?: number;
  cacheReserveRegion?: string;
  chargeType?: string;
  createTime?: string;
  duration?: number;
  expireTime?: string;
  instanceId?: string;
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
  instanceInfo?: ListCacheReserveInstancesResponseBodyInstanceInfo[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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

