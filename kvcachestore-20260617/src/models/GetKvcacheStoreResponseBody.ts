// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKVCacheStoreResponseBodyKvCacheStoreTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * ac-cus-tag-6
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * advanced
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

export class GetKVCacheStoreResponseBodyKvCacheStore extends $dara.Model {
  /**
   * @remarks
   * The storage capacity, in GiB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2026-06-18T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance.
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
   * The cluster number.
   * 
   * @example
   * default
   */
  hpnZone?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * kvcs-xxxxx
   */
  kvcsId?: string;
  /**
   * @remarks
   * The ID of the file system-level mount point. The mount point is shared by instances in the same file system. For more information, call the ListKVCacheInstanceAttachInfo operation.
   * 
   * @example
   * mp-xxxxx
   */
  mountPointId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * production-instance
   */
  name?: string;
  /**
   * @remarks
   * The billing method. Valid values: PREPAY and POSTPAY.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzrwkxbdvkctq
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
   * The tags of the resource.
   */
  tags?: GetKVCacheStoreResponseBodyKvCacheStoreTags[];
  /**
   * @remarks
   * The instance type, such as kvcs (KVCacheStore, CPFS).
   * 
   * @example
   * kvcs
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
      tags: { 'type': 'array', 'itemType': GetKVCacheStoreResponseBodyKvCacheStoreTags },
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

export class GetKVCacheStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the KvCacheStore instance.
   */
  kvCacheStore?: GetKVCacheStoreResponseBodyKvCacheStore;
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * 019FB5E9-F9E8-52F5-9C56-2CDF479CBEB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kvCacheStore: 'KvCacheStore',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvCacheStore: GetKVCacheStoreResponseBodyKvCacheStore,
      requestId: 'string',
    };
  }

  validate() {
    if(this.kvCacheStore && typeof (this.kvCacheStore as any).validate === 'function') {
      (this.kvCacheStore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

