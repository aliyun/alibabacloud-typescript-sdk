// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyV2RequestRulesDataSourceFiltersAccounts extends $dara.Model {
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

export class UpdatePolicyV2RequestRulesDataSourceFilters extends $dara.Model {
  accountScope?: string;
  accounts?: UpdatePolicyV2RequestRulesDataSourceFiltersAccounts[];
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
   * - **UDM_ECS**: ECS instance backup. This data source type is supported only when **RuleType** is set to **UDM_ECS_ONLY**.
   * - **OSS**: OSS backup. This data source type is supported only when **RuleType** is set to **STANDARD**.
   * - **NAS**: Alibaba Cloud NAS backup. This data source type is supported only when **RuleType** is set to **STANDARD**.
   * - **ECS_FILE**: ECS File Backup Essential Edition. This data source type is supported only when **RuleType** is set to **STANDARD**.
   * - **OTS**: Tablestore backup. This data source type is supported only when **RuleType** is set to **STANDARD**.
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
      accounts: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesDataSourceFiltersAccounts },
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

export class UpdatePolicyV2RequestRulesRetentionRules extends $dara.Model {
  /**
   * @remarks
   * The type of the special retention rule. Valid values:
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
   * 365
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

export class UpdatePolicyV2RequestRulesTagFilters extends $dara.Model {
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

export class UpdatePolicyV2RequestRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The number of days after which the backup is converted to archive storage. Unit: days.
   * 
   * @example
   * 90
   */
  archiveDays?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **BACKUP**. The backup type. Set the value to **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The number of days after which the backup is converted to cold archive storage. Unit: days.
   * 
   * @example
   * 365
   */
  coldArchiveDays?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. The data source filter rules.
   */
  dataSourceFilters?: UpdatePolicyV2RequestRulesDataSourceFilters[];
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
   * This parameter is required only when **RuleType** is set to **TRANSITION** or **REPLICATION**.
   * - If **RuleType** is set to **TRANSITION**: the retention period of the backup. Minimum value: 1. Unit: days.
   * - If **RuleType** is set to **REPLICATION**: the retention period of the cross-region backup. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The special retention rules.
   */
  retentionRules?: UpdatePolicyV2RequestRulesRetentionRules[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * rule-000************rof
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule type. Each policy must have at least one **BACKUP** rule and exactly one **TRANSITION** rule. Valid values:
   * - **BACKUP**: backup rule.
   * - **TRANSITION**: lifecycle rule.
   * - **REPLICATION**: replication rule.
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **BACKUP**. The backup schedule settings. Supported formats:
   * - `I|{startTime}|{interval}`: specifies that a backup job is run at the {interval} from the {startTime}. Example: `I|1631685600|P1D` specifies that a backup job is run once a day starting from 2021-09-15 14:00:00.
   * 
   *   * startTime: the start time of the backup. This value is a UNIX timestamp. Unit: seconds.
   *   * interval: the ISO 8601 time interval. Example: `PT1H` specifies an interval of one hour. `P1D` specifies an interval of one day.
   * - `C|{startTime}|{crontab}`: specifies that a backup job is run based on the {crontab} expression from the {startTime}. Example: `C|1631685600|0 0 2 ? * 3,5,7` specifies that a backup job is run at 02:00:00 every Tuesday, Thursday, and Saturday starting from 2021-09-15 14:00:00.
   *   * startTime: the start time of the backup. This value is a UNIX timestamp. Unit: seconds.
   *   * crontab: the crontab expression. Example: `0 0 2 ? * 3,5,7` specifies every Tuesday, Thursday, and Saturday at 02:00:00.
   * 
   * Backup jobs for elapsed time periods are not compensated. If the previous backup job is not completed, the next backup job is not triggered.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. The resource tag filter rules.
   */
  tagFilters?: UpdatePolicyV2RequestRulesTagFilters[];
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
      coldArchiveDays: 'ColdArchiveDays',
      dataSourceFilters: 'DataSourceFilters',
      immutable: 'Immutable',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleId: 'RuleId',
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
      coldArchiveDays: 'number',
      dataSourceFilters: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesDataSourceFilters },
      immutable: 'boolean',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesRetentionRules },
      ruleId: 'string',
      ruleType: 'string',
      schedule: 'string',
      tagFilters: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesTagFilters },
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

export class UpdatePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Back up once every day at 10:00 AM, with cross-region backup to Shanghai.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * po-000************viy
   */
  policyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Daily backup + geo-redundancy
   */
  policyName?: string;
  /**
   * @remarks
   * The list of policy rules.
   */
  rules?: UpdatePolicyV2RequestRules[];
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      rules: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRules },
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

