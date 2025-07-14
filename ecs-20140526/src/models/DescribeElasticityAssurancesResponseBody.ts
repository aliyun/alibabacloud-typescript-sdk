// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 1144775968548340
   */
  accountId?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * name
   */
  serviceName?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 1
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

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages extends $dara.Model {
  elasticityAssuranceUsage?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage[];
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceUsage: 'ElasticityAssuranceUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceUsage: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage },
    };
  }

  validate() {
    if(Array.isArray(this.elasticityAssuranceUsage)) {
      $dara.Model.validateArray(this.elasticityAssuranceUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 5
   */
  availableAmount?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  elasticityAssuranceUsages?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The total number of instances for which capacity of an instance type is reserved.
   * 
   * @example
   * 2
   */
  totalAmount?: number;
  /**
   * @remarks
   * The number of instances that have used the elasticity assurance.
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
      elasticityAssuranceUsages: 'ElasticityAssuranceUsages',
      instanceType: 'InstanceType',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      elasticityAssuranceUsages: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages,
      instanceType: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.elasticityAssuranceUsages && typeof (this.elasticityAssuranceUsages as any).validate === 'function') {
      (this.elasticityAssuranceUsages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources extends $dara.Model {
  allocatedResource?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource[];
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'AllocatedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource },
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

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule extends $dara.Model {
  /**
   * @remarks
   * The time when the time-segmented assurance ends.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the recurrence rule. Valid values:
   * 
   * *   Daily
   * *   Weekly
   * *   Monthly
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The recurrence value of the time-segmented assurance. Valid values:
   * 
   * *   If you set `RecurrenceType` to `Daily`, you can set RecurrenceValue to only one value. Valid values: 1 to 31. The time-segmented assurance is performed every few days.
   * *   If you set `RecurrenceType` to `Weekly`, you can set RecurrenceValue to one or more values. Separate the values with commas (,). The values that correspond to Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6. For example, `1,2` indicates that the time-segmented assurance is performed on Monday and Tuesday of every week.
   * *   If you set `RecurrenceType` to `Monthly`, you can set RecurrenceValue to two values in the `A-B` format. Valid values of A and B: 1 to 31. B must be greater than or equal to A. For example, `1-5` indicates that the time-segmented assurance is performed from the 1st to the 5th of each month.
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The time when the time-segmented assurance takes effect.
   * 
   * @example
   * 4
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      endHour: 'EndHour',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endHour: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules extends $dara.Model {
  recurrenceRule?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule[];
  static names(): { [key: string]: string } {
    return {
      recurrenceRule: 'RecurrenceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceRule: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRulesRecurrenceRule },
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceRule)) {
      $dara.Model.validateArray(this.recurrenceRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags extends $dara.Model {
  tag?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTagsTag },
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

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem extends $dara.Model {
  /**
   * @remarks
   * Details of the allocated resources.
   */
  allocatedResources?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources;
  /**
   * @remarks
   * The description of the elasticity assurance.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * e114477596854834
   */
  elasticityAssuranceOwnerId?: string;
  /**
   * @remarks
   * The time when the elasticity assurance expires.
   * 
   * @example
   * 2021-12-03T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The billing method of the instance. The value can be only PostPaid. Only pay-as-you-go instances can be created by using elasticity assurances.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  latestStartTime?: string;
  /**
   * @remarks
   * The type of the elasticity assurance. Valid values:
   * 
   * *   ElasticityAssurance: the general-purpose elasticity assurance.
   * *   TimeDivisionElasticityAssurance: the time-segmented assurance of the elasticity assurance.
   * 
   * @example
   * ElasticityAssurance
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the elasticity assurance.
   * 
   * @example
   * eap-bp1ir35kqtn8ywci****
   */
  privatePoolOptionsId?: string;
  /**
   * @remarks
   * The type of the private pool associated with the elasticity assurance. Valid values:
   * 
   * *   Open: open private pool
   * *   Target: specific private pool
   * 
   * @example
   * Target
   */
  privatePoolOptionsMatchCriteria?: string;
  /**
   * @remarks
   * The name of the elasticity assurance.
   * 
   * @example
   * eapTestName
   */
  privatePoolOptionsName?: string;
  /**
   * @remarks
   * The recurrence rules of the time-segmented assurances.
   */
  recurrenceRules?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules;
  /**
   * @remarks
   * The region ID of the elasticity assurance.
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
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time when the elasticity assurance takes effect.
   * 
   * @example
   * 2020-12-03T05:25Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates when the elasticity assurance takes effect. Valid values:
   * 
   * *   Now: The elasticity assurance takes effect immediately after it is created.
   * *   Later: The elasticity assurance takes effect at a specified time.
   * 
   * @example
   * Now
   */
  startTimeType?: string;
  /**
   * @remarks
   * The status of the elasticity assurance. Valid values:
   * 
   * *   Preparing
   * *   Prepared
   * *   Active
   * *   Released
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags of the elasticity assurance.
   */
  tags?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags;
  /**
   * @remarks
   * The total number of times that the elasticity assurance is applied.
   * 
   * @example
   * Unlimited
   */
  totalAssuranceTimes?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  usedAssuranceTimes?: number;
  static names(): { [key: string]: string } {
    return {
      allocatedResources: 'AllocatedResources',
      description: 'Description',
      elasticityAssuranceOwnerId: 'ElasticityAssuranceOwnerId',
      endTime: 'EndTime',
      instanceChargeType: 'InstanceChargeType',
      latestStartTime: 'LatestStartTime',
      packageType: 'PackageType',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
      privatePoolOptionsName: 'PrivatePoolOptionsName',
      recurrenceRules: 'RecurrenceRules',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      startTimeType: 'StartTimeType',
      status: 'Status',
      tags: 'Tags',
      totalAssuranceTimes: 'TotalAssuranceTimes',
      usedAssuranceTimes: 'UsedAssuranceTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResources: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources,
      description: 'string',
      elasticityAssuranceOwnerId: 'string',
      endTime: 'string',
      instanceChargeType: 'string',
      latestStartTime: 'string',
      packageType: 'string',
      privatePoolOptionsId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
      privatePoolOptionsName: 'string',
      recurrenceRules: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules,
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      startTimeType: 'string',
      status: 'string',
      tags: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags,
      totalAssuranceTimes: 'string',
      usedAssuranceTimes: 'number',
    };
  }

  validate() {
    if(this.allocatedResources && typeof (this.allocatedResources as any).validate === 'function') {
      (this.allocatedResources as any).validate();
    }
    if(this.recurrenceRules && typeof (this.recurrenceRules as any).validate === 'function') {
      (this.recurrenceRules as any).validate();
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

export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet extends $dara.Model {
  elasticityAssuranceItem?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem[];
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceItem: 'ElasticityAssuranceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceItem: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem },
    };
  }

  validate() {
    if(Array.isArray(this.elasticityAssuranceItem)) {
      $dara.Model.validateArray(this.elasticityAssuranceItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the elasticity assurances.
   */
  elasticityAssuranceSet?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet;
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      elasticityAssuranceSet: 'ElasticityAssuranceSet',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceSet: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.elasticityAssuranceSet && typeof (this.elasticityAssuranceSet as any).validate === 'function') {
      (this.elasticityAssuranceSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

