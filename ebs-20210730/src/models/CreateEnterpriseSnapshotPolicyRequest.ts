// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination region for snapshot replication. You can invoke [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) to query the region information of existing asynchronous replication relationships.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of days to retain snapshots in the destination region. The value must be greater than 1.
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

export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable cross-region replication. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination region information.
   */
  regions?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
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

export class CreateEnterpriseSnapshotPolicyRequestRetainRule extends $dara.Model {
  /**
   * @remarks
   * The number of snapshots to retain. Valid values: 1 to 256.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval of the retention rule. The unit is specified by the TimeUnit parameter. The value must be greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention time. Valid values:
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

export class CreateEnterpriseSnapshotPolicyRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The cycle and time at which the policy is executed. Specify the value in a cron expression.
   * 
   * For example, `0 0 4 1/1 * ?` specifies that the snapshot operation is performed at 4:00 AM every day, starting from the first day of each month.
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

export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The period unit for specially retained snapshots. For example, if this parameter is set to WEEKS, the first snapshot of each week is specially retained. The retention duration is determined by TimeUnit and TimeInterval. Valid values:
   * 
   * - WEEKS
   * - MONTHS
   * - YEARS
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * The time interval of the retention rule. The unit is specified by the TimeUnit parameter. The value must be greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention time for special snapshots. Valid values:
   * 
   * - DAYS
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

export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable special retention. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of special retention rules.
   */
  rules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
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

export class CreateEnterpriseSnapshotPolicyRequestStorageRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable instant access for snapshots. Valid values:
   * 
   * - true
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

export class CreateEnterpriseSnapshotPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a parameter value from your client that is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The snapshot replication information.
   */
  crossRegionCopyInfo?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The Policy Name.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the regions that support asynchronous replication.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention rule.
   * 
   * This parameter is required.
   */
  retainRule?: CreateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The schedule rule.
   * 
   * This parameter is required.
   */
  schedule?: CreateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special retention rules.
   */
  specialRetainRules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - DISABLED
   * - ENABLED
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * The advanced snapshot feature.
   */
  storageRule?: CreateEnterpriseSnapshotPolicyRequestStorageRule;
  /**
   * @remarks
   * The tag key-value pairs. Valid values of n: 1 to 20.
   */
  tag?: CreateEnterpriseSnapshotPolicyRequestTag[];
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - DISK
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRule: CreateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: CreateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: CreateEnterpriseSnapshotPolicyRequestStorageRule,
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestTag },
      targetType: 'string',
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

