// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters extends $dara.Model {
  /**
   * @remarks
   * Deprecated.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * Data source type. The value range is as follows: 
   * - **UDM_ECS**: Indicates ECS server backup. 
   * - **OSS**: Indicates OSS backup. 
   * - **NAS**: Indicates Alibaba Cloud NAS backup. 
   * - **ECS_FILE**: Indicates ECS file backup. 
   * - **OTS**: Indicates Tablestore backup.
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

export class DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules extends $dara.Model {
  /**
   * @remarks
   * The type of the special retention rule. Valid values:
   * 
   * *   **WEEKLY**: weekly backups
   * *   **MONTHLY**: monthly backups
   * *   **YEARLY**: yearly backups
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
   * Indicates which backup is retained based on the special retention rule. Only the first backup can be retained.
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
   * Tag key
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * Tag matching rules, supporting: - **EQUAL**: Matches both the tag key and tag value. - **NOT**: Matches the tag key but not the tag value.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * Tag value.
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
   * This parameter is returned only if the value of the **RuleType** parameter is **TRANSITION**. This parameter indicates the time when data is dumped from a backup vault to an archive vault. Unit: days.
   * 
   * @example
   * 30
   */
  archiveDays?: number;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **BACKUP**. This parameter indicates the backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. It defines the data source filtering rule.
   */
  dataSourceFilters?: DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is returned only if the **PolicyType** is **UDM_ECS_ONLY**. This parameter indicates whether the immutable backup feature is enabled.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Indicates whether the feature of keeping at least one backup version is enabled. Valid values:
   * 
   * *   **0**: The feature is disabled.
   * *   **1**: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **REPLICATION**. This parameter indicates the ID of the destination region.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **TRANSITION** or **REPLICATION**.
   * 
   * *   If the value of the **RuleType** parameter is **TRANSITION**, this parameter indicates the retention period of the backup data. Minimum value: 1. Unit: days.
   * *   If the value of the **RuleType** parameter is **REPLICATION**, this parameter indicates the retention period of remote backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **TRANSITION**. This parameter indicates the special retention rules.
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
   * The type of the rule. Each backup policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type. Valid values:
   * 
   * *   **BACKUP**: backup rule
   * *   **TRANSITION**: lifecycle rule
   * *   **REPLICATION**: replication rule
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **BACKUP**. This parameter indicates the backup schedule settings. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. It defines the resource tag filtering rule.
   */
  tagFilters?: DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters[];
  /**
   * @remarks
   * This parameter is returned only if the value of the RuleType parameter is BACKUP. The ID of the backup vault.
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
  businessStatus?: string;
  /**
   * @remarks
   * The time when the backup policy was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1650248136
   */
  createdTime?: number;
  /**
   * @remarks
   * The number of data sources that are bound to the backup policy.
   * 
   * @example
   * 5
   */
  policyBindingCount?: number;
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
   * The ID of the backup policy.
   * 
   * @example
   * po-000************bkz
   */
  policyId?: string;
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
   * *   **UDM_ECS_ONLY**: the ECS instance backup policy. This type of policy applies only to ECS instance backup.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rules?: DescribePoliciesV2ResponseBodyPoliciesRules[];
  /**
   * @remarks
   * The time when the backup policy was updated. The value is a UNIX timestamp. Unit: seconds.
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
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token that is used to obtain the next page of backup policies.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The backup policies.
   */
  policies?: DescribePoliciesV2ResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
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

