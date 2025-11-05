// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Number of days to retain the destination snapshot. The range of values is greater than 1.
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

export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Whether cross-region replication is enabled. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Destination region information.
   */
  regions?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
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

export class UpdateEnterpriseSnapshotPolicyRequestRetainRule extends $dara.Model {
  /**
   * @remarks
   * Maximum number of retained snapshots.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval , valid value greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of time, valid values:
   * 
   * - DAYS
   * - WEEKS
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

export class UpdateEnterpriseSnapshotPolicyRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The time when the policy will to be scheduled. Valid values: Set the parameter in a cron expression.
   * 
   * For example, you can use `0 0 4 1/1 * ?` to specify 04:00:00 (UTC+8) on the first day of each month.
   * 
   * This parameter is required.
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

export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The periodic unit for specially retained snapshots. If configured to WEEKS, it provides special retention for the first snapshot of each week. The retention period is determined by TimeUnit and TimeInterval. The range of values are:
   * - WEEKS
   * - MONTHS
   * - YEARS"
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * Retention Time Value. The range of values is greater than 1.
   * 
   * @example
   * 30
   */
  timeInterval?: number;
  /**
   * @remarks
   * Retention time unit for special snapshots. The range of values:
   * 
   * - DAYS
   * 
   * - WEEKS
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

export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
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

export class UpdateEnterpriseSnapshotPolicyRequestStorageRule extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the rapid availability of snapshots. The range of values:
   * 
   * - true
   * 
   * - false
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

export class UpdateEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Snapshot retention rule.
   */
  retainRule?: UpdateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   */
  schedule?: UpdateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **ENABLED**: Enable snapshot policy execution.
   * *   **DISABLED**: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: UpdateEnterpriseSnapshotPolicyRequestStorageRule;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      policyId: 'string',
      regionId: 'string',
      retainRule: UpdateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: UpdateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: UpdateEnterpriseSnapshotPolicyRequestStorageRule,
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

