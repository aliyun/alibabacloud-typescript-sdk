// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyV2RequestRulesDataSourceFilters extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: Elastic Compute Service (ECS) instance This type of data source is supported only if the **PolicyType** parameter is set to **UDM_ECS_ONLY**.
   * *   **OSS**: Object Storage Service (OSS) bucket This type of data source is supported only if the **PolicyType** parameter is set to **STANDARD**.
   * *   **NAS**: File Storage NAS (NAS) file system This type of data source is supported only if the **PolicyType** parameter is set to **STANDARD**.
   * *   **ECS_FILE**: ECS file This type of data source is supported only if the **PolicyType** parameter is set to **STANDARD**.
   * *   **OTS**: Tablestore instance This type of data source is supported only if the **PolicyType** parameter is set to **STANDARD**.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRulesRetentionRules extends $dara.Model {
  /**
   * @remarks
   * The type of the special retention rule. Valid values:
   * 
   * *   **DAILY**: retains daily backups
   * *   **WEEKLY**: retains weekly backups
   * *   **MONTHLY**: retains monthly backups
   * *   **YEARLY**: retains yearly backups
   * 
   * @example
   * YEARLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The special retention period of backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 730
   */
  retention?: number;
  /**
   * @remarks
   * Specifies which backup is retained based on the special retention rule. Only the first backup can be retained.
   * 
   * @example
   * 1
   */
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRulesTagFilters extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag-based matching rule. Valid values:
   * 
   * *   **EQUAL**: Both the tag key and tag value are matched.
   * *   **NOT**: The tag key is matched and the tag value is not matched.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The tag value. If you leave this parameter empty, the value is any value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class CreatePolicyV2RequestRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the data source filter rule.
   */
  dataSourceFilters?: CreatePolicyV2RequestRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is required only if the **PolicyType** parameter is set to **UDM_ECS_ONLY**. This parameter specifies whether to enable the immutable backup feature.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the feature of keeping at least one backup version. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **REPLICATION**. This parameter specifies the ID of the destination region.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**, **TRANSITION**, or **REPLICATION**.
   * 
   * *   If the **RuleType** parameter is set to **BACKUP**, this parameter specifies the retention period of the backup data. The priority is lower than the retention period when the **RuleType** parameter is set to **TRANSITION**. Minimum value: 1. Maximum value: 364635. Unit: days.
   * *   If the **RuleType** parameter is set to **TRANSITION**, this parameter specifies the retention period of the backup data. Minimum value: 1. Maximum value: 364635. Unit: days.
   * *   If the **RuleType** parameter is set to **REPLICATION**, this parameter specifies the retention period of remote backups. Minimum value: 1. Maximum value: 364635. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the special retention rules.
   */
  retentionRules?: CreatePolicyV2RequestRulesRetentionRules[];
  /**
   * @remarks
   * The type of the rule. Each backup policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type. Valid values:
   * 
   * *   **BACKUP**: backup rule
   * *   **TRANSITION**: lifecycle rule
   * *   **REPLICATION**: replication rule
   * *   **TAG**: tag-based resource association rule
   * 
   * This parameter is required.
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup schedule settings. Formats:
   * 
   * *   `I|{startTime}|{interval}`: The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   *     *   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   *     *   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, `PT1H` specifies an interval of 1 hour. `P1D` specifies an interval of one day.
   * 
   * *   `C|{startTime}|{crontab}`: The system runs backup jobs at a point in time that is specified in the {startTime} parameter based on the {crontab} expression. For example, C|1631685600|0 0 2 ?\\* 3,5,7 indicates that the system runs backup jobs at 02:00:00 every Tuesday, Thursday, and Saturday from14:00:00 on September 15, 2021.``
   * 
   *     *   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   *     *   crontab: the crontab expression. For example, 0 0 2 ?\\* 3,5,7 indicates 02:00:00 every Tuesday, Thursday, and Saturday.``
   * 
   * The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the resource tag filter rule.
   */
  tagFilters?: CreatePolicyV2RequestRulesTagFilters[];
  /**
   * @remarks
   * This parameter is required only if the RuleType parameter is set to BACKUP. The ID of the backup vault.
   * 
   * @example
   * v-0001************aseg
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      dataSourceFilters: 'DataSourceFilters',
      immutable: 'Immutable',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleType: 'RuleType',
      schedule: 'Schedule',
      tagFilters: 'TagFilters',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      dataSourceFilters: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesDataSourceFilters },
      immutable: 'boolean',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesRetentionRules },
      ruleType: 'string',
      schedule: 'string',
      tagFilters: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesTagFilters },
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceFilters)) {
      $dara.Model.validateArray(this.dataSourceFilters);
    }
    if(Array.isArray(this.retentionRules)) {
      $dara.Model.validateArray(this.retentionRules);
    }
    if(Array.isArray(this.tagFilters)) {
      $dara.Model.validateArray(this.tagFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * *   **STANDARD**: the general backup policy. This type of policy applies to backups other than Elastic Compute Service (ECS) instance backup.
   * *   **UDM_ECS_ONLY**: This type of policy applies only to ECS instance backup.
   * 
   * If the policy type is not specified, Cloud Backup automatically sets the policy type based on whether the backup vault is specified in the rules of the policy:
   * 
   * *   If the backup vault is specified, Cloud Backup sets the policy type to **STANDARD**.
   * *   If the backup vault is not specified, Cloud Backup sets the policy type to **UDM_ECS_ONLY**.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rules?: CreatePolicyV2RequestRules[];
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      rules: { 'type': 'array', 'itemType': CreatePolicyV2RequestRules },
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

