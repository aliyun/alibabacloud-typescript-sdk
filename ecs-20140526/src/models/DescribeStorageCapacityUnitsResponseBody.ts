// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * TestValue
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * TestKey
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

export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags extends $dara.Model {
  tag?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTagsTag },
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

export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit extends $dara.Model {
  /**
   * @remarks
   * Indicates the allocation state of the SCU when the AllocationType parameter is set to Shared. Valid values:
   * 
   * *   allocated: The SCU is allocated to other accounts.
   * *   BeAllocated: The SCU is allocated from another account.
   * 
   * @example
   * allocated
   */
  allocationStatus?: string;
  /**
   * @remarks
   * The capacity of the SCU.
   * 
   * @example
   * 20
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the SCU was created.
   * 
   * @example
   * 2021-08-17T02:55Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the SCU.
   * 
   * @example
   * testScuDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the SCU expires.
   * 
   * @example
   * 2021-09-17T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the SCU.
   * 
   * @example
   * testScuName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the SCU.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the SCU took effect.
   * 
   * @example
   * 2021-08-17T02:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the SCU. Valid values:
   * 
   * *   Creating: The SCUs are being created.
   * *   Active: The SCUs are in effect.
   * *   Expired: The SCUs have expired.
   * *   Pending: The SCUs have not taken effect.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the SCU.
   * 
   * @example
   * scu-bp67acfmxazb4p****
   */
  storageCapacityUnitId?: string;
  /**
   * @remarks
   * The tag key-value pairs of the SCU.
   */
  tags?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      capacity: 'Capacity',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
      storageCapacityUnitId: 'StorageCapacityUnitId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      capacity: 'number',
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      name: 'string',
      regionId: 'string',
      startTime: 'string',
      status: 'string',
      storageCapacityUnitId: 'string',
      tags: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags,
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

export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits extends $dara.Model {
  storageCapacityUnit?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit[];
  static names(): { [key: string]: string } {
    return {
      storageCapacityUnit: 'StorageCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacityUnit: { 'type': 'array', 'itemType': DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit },
    };
  }

  validate() {
    if(Array.isArray(this.storageCapacityUnit)) {
      $dara.Model.validateArray(this.storageCapacityUnit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageCapacityUnitsResponseBody extends $dara.Model {
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
   * 10
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
   * Details about the SCUs.
   */
  storageCapacityUnits?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits;
  /**
   * @remarks
   * The total number of SCUs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageCapacityUnits: 'StorageCapacityUnits',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      storageCapacityUnits: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.storageCapacityUnits && typeof (this.storageCapacityUnits as any).validate === 'function') {
      (this.storageCapacityUnits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

