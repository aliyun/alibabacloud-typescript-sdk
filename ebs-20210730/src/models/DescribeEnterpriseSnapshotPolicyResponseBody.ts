// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of snapshot copies in the destination region. Unit: day.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cross-region replication feature is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination regions that store snapshot copies.
   */
  regions?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule extends $dara.Model {
  /**
   * @remarks
   * The maximum number of snapshots that can be retained.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The value of the retention period of snapshots.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period of snapshots.
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule extends $dara.Model {
  /**
   * @remarks
   * The cron expression of the enterprise-level snapshot policy.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The unit of the special retention period.
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * The value of the retention period.
   * 
   * @example
   * 1
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period.
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention period is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instant access feature is enabled.
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * value
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

export class DescribeEnterpriseSnapshotPolicyResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the enterprise-level snapshot policy was created.
   * 
   * @example
   * 2023-06-24T06:03:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * The replication rule of snapshots in the enterprise-level snapshot policy.
   */
  crossRegionCopyInfo?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The disks that are associated with the snapshot policy.
   */
  diskIds?: string[];
  /**
   * @remarks
   * Indicates whether snapshots are managed.
   * 
   * @example
   * false
   */
  managedForEcs?: boolean;
  /**
   * @remarks
   * The name of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The ID of the enterprise-level snapshot policy.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * the resource group
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention rule of the enterprise-level snapshot policy.
   */
  retainRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule;
  /**
   * @remarks
   * The scheduling rule of the enterprise-level snapshot policy.
   */
  schedule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule;
  /**
   * @remarks
   * The special retention rules of the enterprise-level snapshot policy.
   */
  specialRetainRules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * DISABLED
   */
  state?: string;
  /**
   * @remarks
   * The storage rule of snapshots in the enterprise-level snapshot policy.
   */
  storageRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule;
  /**
   * @remarks
   * the pair tags
   */
  tags?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags[];
  /**
   * @remarks
   * The number of objects that are associated with the enterprise-level snapshot policy.
   * 
   * @example
   * 10
   */
  targetCount?: number;
  /**
   * @remarks
   * The type of the enterprise-level snapshot policy.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      diskIds: 'DiskIds',
      managedForEcs: 'ManagedForEcs',
      name: 'Name',
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tags: 'Tags',
      targetCount: 'TargetCount',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossRegionCopyInfo: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo,
      desc: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      managedForEcs: 'boolean',
      name: 'string',
      policyId: 'string',
      resourceGroupId: 'string',
      retainRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule,
      schedule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule,
      specialRetainRules: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules,
      state: 'string',
      storageRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule,
      tags: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags },
      targetCount: 'number',
      targetType: 'string',
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
    }
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(this.retainRule && typeof (this.retainRule as any).validate === 'function') {
      (this.retainRule as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.specialRetainRules && typeof (this.specialRetainRules as any).validate === 'function') {
      (this.specialRetainRules as any).validate();
    }
    if(this.storageRule && typeof (this.storageRule as any).validate === 'function') {
      (this.storageRule as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned snapshot policies.
   */
  policies?: DescribeEnterpriseSnapshotPolicyResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CA35A83-8D8A-5B67-BAA0-2E124F194DA4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

