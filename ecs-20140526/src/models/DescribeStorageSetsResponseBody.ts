// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageSetsResponseBodyStorageSetsStorageSetTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponseBodyStorageSetsStorageSetTags extends $dara.Model {
  tag?: DescribeStorageSetsResponseBodyStorageSetsStorageSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeStorageSetsResponseBodyStorageSetsStorageSetTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponseBodyStorageSetsStorageSet extends $dara.Model {
  /**
   * @remarks
   * The time when the storage set was created.
   * 
   * @example
   * 2019-06-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the storage set.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region to which the storage set belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp1d6tsvznfghy7y****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The name of the storage set.
   * 
   * @example
   * testStorageSetName
   */
  storageSetName?: string;
  /**
   * @remarks
   * The maximum number of partitions supported by the storage set.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  tags?: DescribeStorageSetsResponseBodyStorageSetsStorageSetTags;
  /**
   * @remarks
   * The ID of the zone to which the storage set belongs.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageSetId: 'StorageSetId',
      storageSetName: 'StorageSetName',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageSetId: 'string',
      storageSetName: 'string',
      storageSetPartitionNumber: 'number',
      tags: DescribeStorageSetsResponseBodyStorageSetsStorageSetTags,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponseBodyStorageSets extends $dara.Model {
  storageSet?: DescribeStorageSetsResponseBodyStorageSetsStorageSet[];
  static names(): { [key: string]: string } {
    return {
      storageSet: 'StorageSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSet: { 'type': 'array', 'itemType': DescribeStorageSetsResponseBodyStorageSetsStorageSet },
    };
  }

  validate() {
    if(Array.isArray(this.storageSet)) {
      $dara.Model.validateArray(this.storageSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the storage sets. The value of this parameter is an array that consists of StorageSet data.
   */
  storageSets?: DescribeStorageSetsResponseBodyStorageSets;
  /**
   * @remarks
   * The total number of storage sets.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageSets: 'StorageSets',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      storageSets: DescribeStorageSetsResponseBodyStorageSets,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.storageSets && typeof (this.storageSets as any).validate === 'function') {
      (this.storageSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

