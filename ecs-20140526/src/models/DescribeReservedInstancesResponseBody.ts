// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock extends $dara.Model {
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
  tagKey?: string;
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
  allocationStatus?: string;
  creationTime?: string;
  description?: string;
  expiredTime?: string;
  instanceAmount?: number;
  instanceType?: string;
  offeringType?: string;
  operationLocks?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks;
  platform?: string;
  regionId?: string;
  reservedInstanceId?: string;
  reservedInstanceName?: string;
  resourceGroupId?: string;
  scope?: string;
  startTime?: string;
  status?: string;
  tags?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTags;
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

