// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule extends $dara.Model {
  /**
   * @remarks
   * The list of contact group names.
   */
  contactGroupNames?: string[];
  /**
   * @remarks
   * The last trigger time.
   * 
   * @example
   * 2026-07-23 10:20:30
   */
  lastTriggeredAt?: string;
  /**
   * @remarks
   * The percentage of the quota alert threshold.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupNames: 'ContactGroupNames',
      lastTriggeredAt: 'LastTriggeredAt',
      thresholdPercent: 'ThresholdPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupNames: { 'type': 'array', 'itemType': 'string' },
      lastTriggeredAt: 'string',
      thresholdPercent: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupNames)) {
      $dara.Model.validateArray(this.contactGroupNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroupsInstances extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud user ID.
   * 
   * @example
   * 1712418364463000
   */
  aliUid?: number;
  /**
   * @remarks
   * The expiration time. The time is in ISO 8601 format and the UTC time zone.
   * 
   * @example
   * 2026-09-05T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Specifies whether the instance is on a free trial.
   * 
   * @example
   * false
   */
  freeTrial?: boolean;
  /**
   * @remarks
   * The group resource type.
   * 
   * @example
   * GROUP_CORE_PACKAGE
   */
  groupResourceType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * chp-0c1g77wmw50b6cXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The purchase period.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The end time of the current period. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-10-01 00:00:00
   */
  periodEndTime?: string;
  /**
   * @remarks
   * The start time of the current period. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-09-01 00:00:00
   */
  periodStartTime?: string;
  /**
   * @remarks
   * The period unit.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * Specifies whether priority deduction is enabled.
   * 
   * @example
   * true
   */
  priorityDeduction?: boolean;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * GROUP_CORE_PACKAGE
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time. The time is in ISO 8601 format and the UTC time zone.
   * 
   * @example
   * 2026-08-05T02:31Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state.
   * 
   * @example
   * DEDUCTING
   */
  state?: string;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 180000000
   */
  totalTime?: number;
  /**
   * @remarks
   * The total duration with a precision factor.
   * 
   * @example
   * 2000.0000
   */
  totalTimeDecimal?: string;
  /**
   * @remarks
   * The usage Threshold Alerting rule.
   */
  usageAlertRule?: DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule;
  /**
   * @remarks
   * The usage duration.
   * 
   * @example
   * 26959861
   */
  usedTime?: number;
  /**
   * @remarks
   * The usage duration with a precision factor.
   * 
   * @example
   * 11.0000
   */
  usedTimeDecimal?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      expiredTime: 'ExpiredTime',
      freeTrial: 'FreeTrial',
      groupResourceType: 'GroupResourceType',
      instanceId: 'InstanceId',
      period: 'Period',
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      periodUnit: 'PeriodUnit',
      priorityDeduction: 'PriorityDeduction',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      state: 'State',
      totalTime: 'TotalTime',
      totalTimeDecimal: 'TotalTimeDecimal',
      usageAlertRule: 'UsageAlertRule',
      usedTime: 'UsedTime',
      usedTimeDecimal: 'UsedTimeDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      expiredTime: 'string',
      freeTrial: 'boolean',
      groupResourceType: 'string',
      instanceId: 'string',
      period: 'number',
      periodEndTime: 'string',
      periodStartTime: 'string',
      periodUnit: 'string',
      priorityDeduction: 'boolean',
      resourceType: 'string',
      startTime: 'string',
      state: 'string',
      totalTime: 'number',
      totalTimeDecimal: 'string',
      usageAlertRule: DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule,
      usedTime: 'number',
      usedTimeDecimal: 'string',
    };
  }

  validate() {
    if(this.usageAlertRule && typeof (this.usageAlertRule as any).validate === 'function') {
      (this.usageAlertRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group-0c5ambj9yaeqjpXXX
   */
  groupId?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @remarks
   * The list of instance information.
   */
  instances?: DescribeGroupsResponseBodyGroupsInstances[];
  /**
   * @remarks
   * The core-hour usage in the last week.
   * 
   * @example
   * 85949.99
   */
  lastWeekUsedCoreTime?: number;
  /**
   * @remarks
   * The remaining core-hours.
   * 
   * @example
   * 92511.15
   */
  leftCoreTime?: number;
  /**
   * @remarks
   * The list of resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The total duration with a precision factor.
   * 
   * @example
   * 2000.0000
   */
  totalTimeDecimal?: string;
  /**
   * @remarks
   * The used core-hours.
   * 
   * @example
   * 7488.85
   */
  usedCoreTime?: number;
  /**
   * @remarks
   * The usage duration with a precision factor.
   * 
   * @example
   * 11.0000
   */
  usedTimeDecimal?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceCount: 'InstanceCount',
      instances: 'Instances',
      lastWeekUsedCoreTime: 'LastWeekUsedCoreTime',
      leftCoreTime: 'LeftCoreTime',
      resourceIds: 'ResourceIds',
      totalTimeDecimal: 'TotalTimeDecimal',
      usedCoreTime: 'UsedCoreTime',
      usedTimeDecimal: 'UsedTimeDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceCount: 'number',
      instances: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroupsInstances },
      lastWeekUsedCoreTime: 'number',
      leftCoreTime: 'number',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      totalTimeDecimal: 'string',
      usedCoreTime: 'number',
      usedTimeDecimal: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of groups.
   */
  groups?: DescribeGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the `nextToken` value returned in the previous response.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68BD3312-53D8-123E-BB32-1A9F25E07A03
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

