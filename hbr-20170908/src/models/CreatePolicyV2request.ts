// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyV2RequestRulesDataSourceFiltersAccounts extends $dara.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRulesDataSourceFilters extends $dara.Model {
  accountScope?: string;
  accounts?: CreatePolicyV2RequestRulesDataSourceFiltersAccounts[];
  /**
   * @remarks
   * Deprecated.
   * 
   * @deprecated
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * The data source type. Valid values:
   * - **UDM_ECS**: ECS instance backup. This data source type is supported only when **PolicyType** is set to **UDM_ECS_ONLY**.
   * - **OSS**: OSS backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
   * - **NAS**: Alibaba Cloud NAS backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
   * - **ECS_FILE**: ECS File Backup Essential Edition. This data source type is supported only when **PolicyType** is set to **STANDARD**.
   * - **OTS**: Tablestore backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountScope: 'AccountScope',
      accounts: 'Accounts',
      dataSourceIds: 'DataSourceIds',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScope: 'string',
      accounts: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesDataSourceFiltersAccounts },
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
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
   * - **DAILY**: daily backup.
   * - **WEEKLY**: weekly backup.
   * - **MONTHLY**: monthly backup.
   * - **YEARLY**: yearly backup.
   * 
   * @example
   * YEARLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The special retention period of the backup. Minimum value: 1. Unit: days.
   * 
   * @example
   * 730
   */
  retention?: number;
  /**
   * @remarks
   * The backup to which the rule applies. Currently, only the first backup is supported. Set the value to 1.
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
   * The tag matching rule. Valid values:
   * - **EQUAL**: matches both the tag key and tag value.
   * - **NOT**: matches the tag key but not the tag value.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The tag value. An empty value indicates any value.
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
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The number of days after which a backup is automatically moved to the archive tier. Backups must be retained in the standard tier for at least 30 days and in the archive tier for at least 60 days. Unit: days.
   * 
   * @example
   * 90
   */
  archiveDays?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **BACKUP**. The backup type. Set the value to **COMPLETE**, which specifies full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. The data source filter rules.
   */
  dataSourceFilters?: CreatePolicyV2RequestRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is required only when **PolicyType** is set to **UDM_ECS_ONLY** and **RuleType** is set to **SECURITY**. Specifies whether to enable backup locking.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Specifies whether to retain at least one backup version. Valid values:
   * - 0: do not retain.
   * - 1: retain.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **REPLICATION**. The ID of the destination region for replication.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **BACKUP**, **TRANSITION**, or **REPLICATION**.
   * - If **RuleType** is set to **BACKUP**: the retention period of backups. The priority of this parameter is lower than the Retention parameter of the rule whose **RuleType** is **TRANSITION**. Minimum value: 1. Maximum value: 364635. Unit: days.
   * - If **RuleType** is set to **TRANSITION**: the retention period of backups. Minimum value: 1. Maximum value: 364635. Unit: days.
   * - If **RuleType** is set to **REPLICATION**: the retention period of cross-region backups. Minimum value: 1. Maximum value: 364635. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The special retention rules.
   */
  retentionRules?: CreatePolicyV2RequestRulesRetentionRules[];
  /**
   * @remarks
   * The rule type. Each policy must have at least one **BACKUP** rule and exactly one **TRANSITION** rule. Valid values:
   * - **BACKUP**: backup rule.
   * - **TRANSITION**: lifecycle rule.
   * - **REPLICATION**: replication rule.
   * - **TAG**: tag-based resource association rule.
   * 
   * This parameter is required.
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **BACKUP**. The backup schedule settings. Supported formats:
   * - `I|{startTime}|{interval}`: specifies that a backup job is executed at the specified interval starting from {startTime}. For example, `I|1631685600|P1D` specifies that a backup job is executed once a day starting from 2021-09-15 14:00:00.
   * 
   *   * startTime: the start time of the backup. This value is a UNIX timestamp. Unit: seconds.
   *   * interval: the ISO 8601 time interval. For example, `PT1H` specifies an interval of one hour. `P1D` specifies an interval of one day.
   * - `C|{startTime}|{crontab}`: specifies that a backup job is executed based on the {crontab} expression starting from {startTime}. For example, `C|1631685600|0 0 2 ? * 3,5,7` specifies that a backup job is executed at 02:00:00 every Tuesday, Thursday, and Saturday starting from 2021-09-15 14:00:00.
   *   * startTime: the start time of the backup. This value is a UNIX timestamp. Unit: seconds.
   *   * crontab: the crontab expression. For example, `0 0 2 ? * 3,5,7` specifies every Tuesday, Thursday, and Saturday at 02:00:00.
   * 
   * Backup jobs that are missed are not compensated. If the previous backup job is not complete, the next backup job is not triggered.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. The resource tag filter rules.
   */
  tagFilters?: CreatePolicyV2RequestRulesTagFilters[];
  /**
   * @remarks
   * This parameter is required only when RuleType is set to BACKUP. The backup vault ID.
   * 
   * @example
   * v-0001************aseg
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDays: 'ArchiveDays',
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
      archiveDays: 'number',
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
   * The policy description.
   * 
   * @example
   * Backup once every day at 10:00 AM, with cross-region backup to Shanghai.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Daily local backup + geo-redundancy
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **STANDARD**: general backup policy. Supports backing up data sources other than ECS instances.
   * - **UDM_ECS_ONLY**: ECS instance backup policy. Supports backing up only ECS instances.
   * 
   * If you do not specify the policy type, Cloud Backup automatically sets the policy type based on whether a backup vault is specified in the policy rules:
   * - A backup vault is specified in the policy rules: **STANDARD**
   * - No backup vault is specified in the policy rules: **UDM_ECS_ONLY**
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The list of policy rules.
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

