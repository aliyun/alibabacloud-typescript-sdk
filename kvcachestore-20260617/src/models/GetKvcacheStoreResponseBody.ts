// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKVCacheStoreResponseBodyKvCacheStoreTags extends $dara.Model {
  /**
   * @example
   * ac-cus-tag-6
   */
  tagKey?: string;
  /**
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
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @example
   * 2026-06-18T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * production kvcachestore
   */
  description?: string;
  /**
   * @example
   * CapacityExpanding
   */
  extraStatus?: string;
  /**
   * @example
   * default
   */
  hpnZone?: string;
  /**
   * @example
   * kvcs-xxxxx
   */
  kvcsId?: string;
  /**
   * @example
   * mp-xxxxx
   */
  mountPointId?: string;
  /**
   * @example
   * production-instance
   */
  name?: string;
  /**
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aekzrwkxbdvkctq
   */
  resourceGroupId?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  tags?: GetKVCacheStoreResponseBodyKvCacheStoreTags[];
  /**
   * @example
   * kvcs
   */
  type?: string;
  /**
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
  kvCacheStore?: GetKVCacheStoreResponseBodyKvCacheStore;
  /**
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

