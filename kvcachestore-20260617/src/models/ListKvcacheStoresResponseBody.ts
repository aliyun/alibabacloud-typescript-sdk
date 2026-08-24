// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoresResponseBodyKVCacheStoresTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * chapter
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * test-value-1766542011
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoresResponseBodyKVCacheStores extends $dara.Model {
  /**
   * @remarks
   * The storage capacity. Unit: GiB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-06-18T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * production kvcachestore
   */
  description?: string;
  /**
   * @remarks
   * The extra status information. Valid values: CapacityExpanding, CapacityExpandSuccess, and CapacityExpandFail.
   * 
   * @example
   * CapacityExpanding
   */
  extraStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * default
   */
  hpnZone?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * kvcs-xxxxx
   */
  kvcsId?: string;
  /**
   * @remarks
   * The file system-level mount point ID. Instances under the same file system share this mount point. For more information, call ListKVCacheInstanceAttachInfo.
   * 
   * @example
   * mp-xxxxx
   */
  mountPointId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * production-instance
   */
  name?: string;
  /**
   * @remarks
   * The payment type. Valid values: PREPAY and POSTPAY.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek3dnrvdxj2dvq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status. Valid values: Creating, Available, InUse, Stopping, Stopped, and Deleting.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: ListKVCacheStoresResponseBodyKVCacheStoresTags[];
  /**
   * @remarks
   * The instance type. Valid values: kvcs (KVCacheStore, CPFS).
   * 
   * @example
   * preview
   */
  type?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      createTime: 'CreateTime',
      description: 'Description',
      extraStatus: 'ExtraStatus',
      hpnZone: 'HpnZone',
      kvcsId: 'KvcsId',
      mountPointId: 'MountPointId',
      name: 'Name',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      createTime: 'string',
      description: 'string',
      extraStatus: 'string',
      hpnZone: 'string',
      kvcsId: 'string',
      mountPointId: 'string',
      name: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListKVCacheStoresResponseBodyKVCacheStoresTags },
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of KVCacheStore instances. Each element contains the following fields: KvcsId, Name, Status, ExtraStatus, RegionId, ZoneId, HpnZone, Type, Capacity, PaymentType, MountPointId, CreateTime, and Description.
   */
  KVCacheStores?: ListKVCacheStoresResponseBodyKVCacheStores[];
  /**
   * @remarks
   * The maximum number of entries returned per pagination request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. This value is empty when no more data is available. This parameter is valid only for cursor-based pagination.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. This parameter is valid only for page number-based pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This parameter is valid only for page number-based pagination.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages. This value is returned only for page number-based pagination.
   * 
   * @example
   * 1
   */
  pageTotal?: number;
  /**
   * @remarks
   * The request ID. A request ID is returned regardless of whether the API call succeeds.
   * 
   * @example
   * 56AC37CD-388E-5D21-951B-C50D16D8E812
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances. This value is returned only for page number-based pagination. For cursor-based pagination, the value is -1.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      KVCacheStores: 'KVCacheStores',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVCacheStores: { 'type': 'array', 'itemType': ListKVCacheStoresResponseBodyKVCacheStores },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.KVCacheStores)) {
      $dara.Model.validateArray(this.KVCacheStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

