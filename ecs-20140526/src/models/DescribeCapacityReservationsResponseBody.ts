// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage extends $dara.Model {
  accountId?: string;
  serviceName?: string;
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
  availableAmount?: number;
  capacityReservationUsages?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages;
  instanceType?: string;
  totalAmount?: number;
  usedAmount?: number;
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
  allocatedResources?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResources;
  capacityReservationOwnerId?: string;
  description?: string;
  endTime?: string;
  endTimeType?: string;
  instanceChargeType?: string;
  platform?: string;
  privatePoolOptionsId?: string;
  privatePoolOptionsMatchCriteria?: string;
  privatePoolOptionsName?: string;
  regionId?: string;
  reservedInstanceId?: string;
  resourceGroupId?: string;
  savingPlanId?: string;
  startTime?: string;
  startTimeType?: string;
  status?: string;
  tags?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemTags;
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

