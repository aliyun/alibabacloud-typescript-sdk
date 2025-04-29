// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks } from "./DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks";
import { DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTags } from "./DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceTags";


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

