// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage extends $dara.Model {
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
  availableAmount?: number;
  elasticityAssuranceUsages?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages;
  /**
   * @example
   * 1
   */
  failedAmount?: number;
  instanceType?: string;
  /**
   * @example
   * 1
   */
  lockedAmount?: number;
  totalAmount?: number;
  usedAmount?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      elasticityAssuranceUsages: 'ElasticityAssuranceUsages',
      failedAmount: 'FailedAmount',
      instanceType: 'InstanceType',
      lockedAmount: 'LockedAmount',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      elasticityAssuranceUsages: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages,
      failedAmount: 'number',
      instanceType: 'string',
      lockedAmount: 'number',
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
  endHour?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
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
  allocatedResources?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources;
  description?: string;
  elasticityAssuranceOwnerId?: string;
  endTime?: string;
  instanceChargeType?: string;
  latestStartTime?: string;
  packageType?: string;
  privatePoolOptionsId?: string;
  privatePoolOptionsMatchCriteria?: string;
  privatePoolOptionsName?: string;
  recurrenceRules?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: string;
  startTimeType?: string;
  status?: string;
  tags?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags;
  totalAssuranceTimes?: string;
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

