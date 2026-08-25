// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFiltersAccounts extends $dara.Model {
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

export class DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters extends $dara.Model {
  accountScope?: string;
  accounts?: DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFiltersAccounts[];
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
   * - **UDM_ECS**: ECS instance backup.
   * - **OSS**: OSS backup.
   * - **NAS**: Alibaba Cloud NAS backup.
   * - **ECS_FILE**: ECS File Backup Essential Edition.
   * - **OTS**: Tablestore backup.
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
      accounts: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFiltersAccounts },
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

export class DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules extends $dara.Model {
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
   * 730
   */
  retention?: number;
  /**
   * @remarks
   * The backup to which the rule applies. Currently, only the first backup is supported. The value is 1.
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

export class DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters extends $dara.Model {
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
   * - **EQUAL**: matches both the tag key and the tag value.
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

export class DescribePoliciesV2ResponseBodyPoliciesRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The number of days after which the backup is converted to archive storage. Unit: days.
   * 
   * @example
   * 30
   */
  archiveDays?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **BACKUP**. The backup type. The value is **COMPLETE**, which indicates a full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. The data source filter rules.
   */
  dataSourceFilters?: DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is valid only when **PolicyType** is set to **UDM_ECS_ONLY**. Specifies whether to enable backup locking.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Specifies whether to retain at least one backup version. Valid values:
   * - **0**: Do not retain.
   * - **1**: Retain.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **REPLICATION**. The destination region ID for replication.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION** or **REPLICATION**.
   * - **RuleType** is set to **TRANSITION**: the retention period of the backup. Minimum value: 1. Unit: days.
   * - **RuleType** is set to **REPLICATION**: the retention period of the geo-redundancy backup. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TRANSITION**. The list of special retention rules.
   */
  retentionRules?: DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * rule-000************f1e
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
   * This parameter is required only when **RuleType** is set to **BACKUP**. The backup schedule. Optional format: `I|{startTime}|{interval}`. This indicates that a backup job is executed at every {interval} starting from {startTime}. Backup jobs for past time periods are not compensated. If the previous backup job is not completed, the next backup job is not triggered. For example, `I|1631685600|P1D` indicates that a backup is performed once a day starting from 2021-09-15 14:00:00.
   * 
   * * startTime: the start time of the backup. UNIX timestamp, in seconds.
   * * interval: the ISO 8601 time interval. For example, PT1H indicates an interval of one hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. The resource tag filter rules.
   */
  tagFilters?: DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters[];
  /**
   * @remarks
   * This parameter is required only when RuleType is set to BACKUP. The backup vault ID.
   * 
   * @example
   * v-000**************kgm
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
      dataSourceFilters: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters },
      immutable: 'boolean',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules },
      ruleId: 'string',
      ruleType: 'string',
      schedule: 'string',
      tagFilters: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters },
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

export class DescribePoliciesV2ResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The user business status.
   * 
   * @example
   * ACTIVE
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time. UNIX timestamp, in seconds.
   * 
   * @example
   * 1650248136
   */
  createdTime?: number;
  /**
   * @remarks
   * The number of data sources bound to the policy.
   * 
   * @example
   * 5
   */
  policyBindingCount?: number;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Back up every day at 10:00 AM and replicate to Shanghai
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * po-000************bkz
   */
  policyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Daily backup + geo-redundancy backup
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **STANDARD**: general backup policy. Supports backing up data sources other than ECS instance backup.
   * - **UDM_ECS_ONLY**: ECS instance backup policy. Supports backing up only ECS instances.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The list of policy rules.
   */
  rules?: DescribePoliciesV2ResponseBodyPoliciesRules[];
  /**
   * @remarks
   * The update time. UNIX timestamp, in seconds.
   * 
   * @example
   * 1662080404
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      createdTime: 'CreatedTime',
      policyBindingCount: 'PolicyBindingCount',
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      rules: 'Rules',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      createdTime: 'number',
      policyBindingCount: 'number',
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      rules: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRules },
      updatedTime: 'number',
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

export class DescribePoliciesV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of results per query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message. The value "successful" is returned for a successful request. An error message is returned for a failed request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token required to retrieve the next page of policies.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of policies.
   */
  policies?: DescribePoliciesV2ResponseBodyPolicies[];
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
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

