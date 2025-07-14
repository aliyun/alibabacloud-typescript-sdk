// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 105909559088****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * maxcompute.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The number of instances that are used by the Alibaba Cloud account or service.
   * 
   * @example
   * 20
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      serviceName: 'ServiceName',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      serviceName: 'string',
      usedAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages extends $dara.Model {
  capacityReservationUsage?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage[];
  static names(): { [key: string]: string } {
    return {
      capacityReservationUsage: 'CapacityReservationUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationUsage: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage },
    };
  }

  validate() {
    if(Array.isArray(this.capacityReservationUsage)) {
      $dara.Model.validateArray(this.capacityReservationUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource extends $dara.Model {
  /**
   * @remarks
   * The number of available instances.
   * 
   * @example
   * 2
   */
  availableAmount?: number;
  /**
   * @remarks
   * Details of instance usage.
   */
  capacityReservationUsages?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages;
  /**
   * @remarks
   * The instance type of the instances.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The total number of instances for which the capacity of an instance type is reserved.
   * 
   * @example
   * 2
   */
  totalAmount?: number;
  /**
   * @remarks
   * The number of instances that have used the capacity reservation.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      capacityReservationUsages: 'CapacityReservationUsages',
      instanceType: 'InstanceType',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      capacityReservationUsages: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages,
      instanceType: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.capacityReservationUsages && typeof (this.capacityReservationUsages as any).validate === 'function') {
      (this.capacityReservationUsages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResources extends $dara.Model {
  allocatedResource?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource[];
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'AllocatedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource },
    };
  }

  validate() {
    if(Array.isArray(this.allocatedResource)) {
      $dara.Model.validateArray(this.allocatedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTagsTag extends $dara.Model {
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

export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTags extends $dara.Model {
  tag?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTagsTag },
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

export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem extends $dara.Model {
  /**
   * @remarks
   * Details of the allocated resources.
   */
  allocatedResources?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResources;
  /**
   * @remarks
   * The ID of the capacity reservation owner.
   * 
   * @example
   * 100************7
   */
  capacityReservationOwnerId?: string;
  /**
   * @remarks
   * The description of the capacity reservation.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the capacity reservation expires.
   * 
   * @example
   * 2021-02-19T03:02Z
   */
  endTime?: string;
  /**
   * @remarks
   * The release mode of the capacity reservation. Valid values:
   * 
   * *   Limited: The capacity reservation is automatically released at a specified time.
   * *   Unlimited: The capacity reservation is manually released. You can release the capacity reservation anytime.
   * 
   * @example
   * Unlimited
   */
  endTimeType?: string;
  /**
   * @remarks
   * The billing method of the instances created by using the capacity reservation. Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The operating system type of the instances created by using the capacity reservation. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the capacity reservation.
   * 
   * @example
   * crp-bp1gubrkqutenqdd****
   */
  privatePoolOptionsId?: string;
  /**
   * @remarks
   * The type of the private pool generated after the capacity reservation takes effect. Valid values:
   * 
   * *   Open: open private pool. If you use the capacity reservation to create Elastic Compute Service (ECS) instances, the open private pool that is associated with the capacity reservation is automatically matched. If no capacity is available in the open private pool, resources in the public pool are automatically used to create the instances.
   * *   Target: targeted private pool. If you use the capacity reservation to create ECS instances, the targeted private pool that is associated with the capacity reservation is automatically matched. If no capacity is available in the private pool, the instances fail to be created.
   * 
   * @example
   * Open
   */
  privatePoolOptionsMatchCriteria?: string;
  /**
   * @remarks
   * The name of the capacity reservation.
   * 
   * @example
   * crpTestName
   */
  privatePoolOptionsName?: string;
  /**
   * @remarks
   * The region ID of the capacity reservation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the reserved instance used with the capacity reservation.
   * 
   * @example
   * ri-bpzhex2ulpzf53****
   */
  reservedInstanceId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the capacity reservation belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the savings plan used with the capacity reservation.
   * 
   * @example
   * spn-c29b5e18pJMT****
   */
  savingPlanId?: string;
  /**
   * @remarks
   * The time when the capacity reservation takes effect.
   * 
   * @example
   * 2021-02-19T02:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The mode in which the capacity reservation takes effect. Valid values:
   * 
   * *   Now: The capacity reservation takes effect immediately after it is created.
   * *   Later: The capacity reservation takes effect at a specified time.
   * 
   * @example
   * Now
   */
  startTimeType?: string;
  /**
   * @remarks
   * The status of the capacity reservation. Valid values:
   * 
   * *   Pending: The capacity reservation is being initialized.
   * *   Preparing: The capacity reservation is being prepared.
   * *   Prepared: The capacity reservation is to take effect.
   * *   Active: The capacity reservation is in effect.
   * *   Released: The capacity reservation has been released manually or automatically when it expired.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the capacity reservation.
   */
  tags?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTags;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  timeSlot?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedResources: 'AllocatedResources',
      capacityReservationOwnerId: 'CapacityReservationOwnerId',
      description: 'Description',
      endTime: 'EndTime',
      endTimeType: 'EndTimeType',
      instanceChargeType: 'InstanceChargeType',
      platform: 'Platform',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
      privatePoolOptionsName: 'PrivatePoolOptionsName',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      resourceGroupId: 'ResourceGroupId',
      savingPlanId: 'SavingPlanId',
      startTime: 'StartTime',
      startTimeType: 'StartTimeType',
      status: 'Status',
      tags: 'Tags',
      timeSlot: 'TimeSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResources: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResources,
      capacityReservationOwnerId: 'string',
      description: 'string',
      endTime: 'string',
      endTimeType: 'string',
      instanceChargeType: 'string',
      platform: 'string',
      privatePoolOptionsId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
      privatePoolOptionsName: 'string',
      regionId: 'string',
      reservedInstanceId: 'string',
      resourceGroupId: 'string',
      savingPlanId: 'string',
      startTime: 'string',
      startTimeType: 'string',
      status: 'string',
      tags: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTags,
      timeSlot: 'string',
    };
  }

  validate() {
    if(this.allocatedResources && typeof (this.allocatedResources as any).validate === 'function') {
      (this.allocatedResources as any).validate();
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

export class DescribeCapacityReservationsResponseBodyCapacityReservationSet extends $dara.Model {
  capacityReservationItem?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem[];
  static names(): { [key: string]: string } {
    return {
      capacityReservationItem: 'CapacityReservationItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationItem: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem },
    };
  }

  validate() {
    if(Array.isArray(this.capacityReservationItem)) {
      $dara.Model.validateArray(this.capacityReservationItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the capacity reservations.
   */
  capacityReservationSet?: DescribeCapacityReservationsResponseBodyCapacityReservationSet;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityReservationSet: 'CapacityReservationSet',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationSet: DescribeCapacityReservationsResponseBodyCapacityReservationSet,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.capacityReservationSet && typeof (this.capacityReservationSet as any).validate === 'function') {
      (this.capacityReservationSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

