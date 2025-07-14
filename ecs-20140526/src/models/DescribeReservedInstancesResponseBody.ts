// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock extends $dara.Model {
  /**
   * @remarks
   * The reason why the instance is locked.
   * 
   * @example
   * security
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks extends $dara.Model {
  operationLock?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock },
    };
  }

  validate() {
    if(Array.isArray(this.operationLock)) {
      $dara.Model.validateArray(this.operationLock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTags extends $dara.Model {
  tag?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTagsTag },
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

export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates the sharing status of the reserved instance when the AllocationType parameter is set to Shared. Valid values:
   * 
   * *   allocated: The reserved instance is allocated to another account.
   * *   beAllocated: The reserved instance is allocated by another account.
   * 
   * @example
   * allocated
   */
  allocationStatus?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2018-12-10T12:07Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2019-12-10T12:07Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The number of pay-as-you-go instances that are of the same instance type as the reserved instance and can be matched to the reserved instance.
   * 
   * @example
   * 10
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The instance type of the pay-as-you-go instances that can be matched to the reserved instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The payment option.
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  /**
   * @remarks
   * Details about the lock status of the reserved instance.
   */
  operationLocks?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks;
  /**
   * @remarks
   * The operating system of the image used by the instance. Valid values:
   * 
   * *   Windows
   * *   Linux
   * 
   * @example
   * Linux
   */
  platform?: string;
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
   * The reserved instance ID.
   * 
   * @example
   * ri-bpzhex2ulpzf53****
   */
  reservedInstanceId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * riZbpzhex2ulpzf53****
   */
  reservedInstanceName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * EcsDocTest
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scope.
   * 
   * @example
   * region
   */
  scope?: string;
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 2018-12-10T12:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags of the reserved instance.
   */
  tags?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTags;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-z
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceAmount: 'InstanceAmount',
      instanceType: 'InstanceType',
      offeringType: 'OfferingType',
      operationLocks: 'OperationLocks',
      platform: 'Platform',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      reservedInstanceName: 'ReservedInstanceName',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      instanceAmount: 'number',
      instanceType: 'string',
      offeringType: 'string',
      operationLocks: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks,
      platform: 'string',
      regionId: 'string',
      reservedInstanceId: 'string',
      reservedInstanceName: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      startTime: 'string',
      status: 'string',
      tags: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTags,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseBodyReservedInstances extends $dara.Model {
  reservedInstance?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance[];
  static names(): { [key: string]: string } {
    return {
      reservedInstance: 'ReservedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstance: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance },
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstance)) {
      $dara.Model.validateArray(this.reservedInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E572643C-6A29-49D6-9D4E-6CFA4E063A3E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the reserved instances.
   */
  reservedInstances?: DescribeReservedInstancesResponseBodyReservedInstances;
  /**
   * @remarks
   * The total number of reserved instances.
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
      reservedInstances: 'ReservedInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      reservedInstances: DescribeReservedInstancesResponseBodyReservedInstances,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.reservedInstances && typeof (this.reservedInstances as any).validate === 'function') {
      (this.reservedInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

