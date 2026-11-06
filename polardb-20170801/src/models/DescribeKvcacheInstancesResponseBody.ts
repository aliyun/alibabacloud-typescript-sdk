// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKVCacheInstancesResponseBodyItemsKVCacheItem extends $dara.Model {
  AIDBClusterId?: string;
  creationTime?: string;
  DBClusterId?: string;
  expireTime?: string;
  expired?: string;
  KVCacheInstanceId?: string;
  KVCacheInstanceStatus?: string;
  KVCacheSpace?: number;
  payType?: string;
  regionId?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
      creationTime: 'CreationTime',
      DBClusterId: 'DBClusterId',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      KVCacheInstanceId: 'KVCacheInstanceId',
      KVCacheInstanceStatus: 'KVCacheInstanceStatus',
      KVCacheSpace: 'KVCacheSpace',
      payType: 'PayType',
      regionId: 'RegionId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDBClusterId: 'string',
      creationTime: 'string',
      DBClusterId: 'string',
      expireTime: 'string',
      expired: 'string',
      KVCacheInstanceId: 'string',
      KVCacheInstanceStatus: 'string',
      KVCacheSpace: 'number',
      payType: 'string',
      regionId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKVCacheInstancesResponseBodyItems extends $dara.Model {
  KVCacheItem?: DescribeKVCacheInstancesResponseBodyItemsKVCacheItem[];
  static names(): { [key: string]: string } {
    return {
      KVCacheItem: 'KVCacheItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVCacheItem: { 'type': 'array', 'itemType': DescribeKVCacheInstancesResponseBodyItemsKVCacheItem },
    };
  }

  validate() {
    if(Array.isArray(this.KVCacheItem)) {
      $dara.Model.validateArray(this.KVCacheItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKVCacheInstancesResponseBody extends $dara.Model {
  items?: DescribeKVCacheInstancesResponseBodyItems;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances that match the filter conditions.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeKVCacheInstancesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

