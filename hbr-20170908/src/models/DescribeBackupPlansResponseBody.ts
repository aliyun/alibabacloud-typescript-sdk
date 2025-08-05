// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * type
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
   * The tag value.
   * 
   * @example
   * 0
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

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags extends $dara.Model {
  hitTag?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag[];
  static names(): { [key: string]: string } {
    return {
      hitTag: 'HitTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitTag: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag },
    };
  }

  validate() {
    if(Array.isArray(this.hitTag)) {
      $dara.Model.validateArray(this.hitTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames extends $dara.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableName)) {
      $dara.Model.validateArray(this.tableName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail extends $dara.Model {
  /**
   * @remarks
   * The names of the tables in the Tablestore instance.
   */
  tableNames?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames,
    };
  }

  validate() {
    if(this.tableNames && typeof (this.tableNames as any).validate === 'function') {
      (this.tableNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource extends $dara.Model {
  /**
   * @remarks
   * Additional information about the data source.
   * 
   * @example
   * {\\"doBackup\\":false,\\"diskName\\":\\"data_disk\\",\\"size\\":100,\\"type\\":\\"data\\",\\"category\\":\\"cloud_essd\\",\\"imageId\\":\\"\\",\\"device\\":\\"/dev/xvdb\\",\\"encrypted\\":false}
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * d-j6cgioir6m******lu4
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the data source. Valid value: **UDM_DISK**.
   * 
   * @example
   * UDMDISK
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      resourceId: 'ResourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      resourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources extends $dara.Model {
  resource?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the region in which the remote backup vault resides.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of the backup data in remote backup mode. Unit: days.
   * 
   * @example
   * 90
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Indicates whether the policy is disabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Indicates whether the snapshot data is backed up to the backup vault.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 90
   */
  retention?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * rule-0008i52rf0ulpni6kn6m
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Disk Golden Rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified by `{startTime}` and the subsequent backup jobs at an interval that is specified by `{interval}`. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   `startTime`: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   `interval`: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1631685600|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleId: 'string',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules extends $dara.Model {
  rule?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you are billed based on the pay-as-you-go method after the free trial ends.
   * 
   * @example
   * true
   */
  keepAfterTrialExpiration?: boolean;
  /**
   * @remarks
   * The expiration time of the free trial.
   * 
   * @example
   * 1584597600
   */
  trialExpireTime?: number;
  /**
   * @remarks
   * The start time of the free trial.
   * 
   * @example
   * 1579413159
   */
  trialStartTime?: number;
  /**
   * @remarks
   * The time when the free-trial backup vault is released.
   * 
   * @example
   * 1594965600
   */
  trialVaultReleaseTime?: number;
  static names(): { [key: string]: string } {
    return {
      keepAfterTrialExpiration: 'KeepAfterTrialExpiration',
      trialExpireTime: 'TrialExpireTime',
      trialStartTime: 'TrialStartTime',
      trialVaultReleaseTime: 'TrialVaultReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepAfterTrialExpiration: 'boolean',
      trialExpireTime: 'number',
      trialStartTime: 'number',
      trialVaultReleaseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlan extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source group.
   * 
   * @example
   * System-Database
   */
  backupSourceGroupId?: string;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **OSS**. This parameter indicates the name of the OSS bucket.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  businessStatus?: string;
  /**
   * @remarks
   * The configurations of the incremental file synchronization. This parameter is returned only for data synchronization.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The ID of the backup client.
   * 
   * @example
   * c-000ge4w*****1qb
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the client group.
   * 
   * @example
   * cl-000ht6o9******h
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether a backup plan is automatically created based on tags.
   * 
   * @example
   * false
   */
  createdByTag?: boolean;
  /**
   * @remarks
   * The time when the backup plan was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Indicates whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT
   * *   CROSS_ACCOUNT
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 1841642xxxxx9795
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * ds-000ht6o9*****w61
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source details at the destination. This parameter is returned only for data synchronization.
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetail?: string;
  /**
   * @remarks
   * The data source ID at the destination. This parameter is returned only for data synchronization.
   * 
   * @example
   * ds-*********************
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The data source type at the destination. This parameter is returned only for data synchronization.
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * The details about ECS instance backup.
   * 
   * @example
   * {\\"doCopy\\":true,\\"doBackup\\":false,\\"instanceName\\":\\"instance example\\",\\"appConsistent\\":false,\\"destinationRegionId\\":\\"cn-shanghai\\",\\"enableFsFreeze\\":true,\\"osNameEn\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"osName\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"diskIdList\\":[],\\"backupVaultId\\":\\"\\",\\"snapshotGroup\\":true,\\"destinationRetention\\":35,\\"platform\\":\\"Windows Server 2012\\",\\"timeoutInSeconds\\":60,\\"backupRetention\\":1,\\"osType\\":\\"windows\\",\\"preScriptPath\\":\\"\\",\\"postScriptPath\\":\\"\\",\\"enableWriters\\":true,\\"ecsDeleted\\":false}
   */
  detail?: string;
  /**
   * @remarks
   * Indicates whether the backup plan is disabled. Valid values:
   * 
   * *   true: The backup plan is disabled.
   * *   false: The backup plan is enabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the paths to the files that are excluded from the backup job.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the ID of the NAS file system.
   * 
   * @example
   * 00594
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The matched tag rules.
   */
  hitTags?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the paths to the files that are backed up.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * i-**
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the ID of the ECS instance.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the feature of keeping at least one backup version is enabled. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 0
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * The latest execution job id of plan.
   * 
   * @example
   * job-12345678
   */
  latestExecuteJobId?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates whether Windows Volume Shadow Copy Service (VSS) is used to define a source path.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail;
  /**
   * @remarks
   * The source paths. This parameter is valid only when **SourceType** is set to **ECS_FILE**.
   */
  paths?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **OSS**. This parameter indicates the prefix of the objects that are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The backup resources. This parameter is valid only for disk backup.
   */
  resources?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The backup policies. This parameter is valid only for disk backup.
   */
  rules?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified by `{startTime}` and the subsequent backup jobs at an interval that is specified by `{interval}`. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   **startTime**: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   **interval**: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: OSS buckets
   * *   **NAS**: NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * *   **SYNC**: data synchronization
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the throttling rules. Format: `{start}|{end}|{bandwidth}`. Multiple throttling rules are separated with vertical bars (`|`). A time range cannot overlap with another one.
   * 
   * *   start: the start hour.
   * *   end: the end hour.
   * *   bandwidth: the bandwidth. Unit: KB.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * The free trial information.
   */
  trialInfo?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo;
  /**
   * @remarks
   * The time when the backup plan was updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSourceGroupId: 'BackupSourceGroupId',
      backupType: 'BackupType',
      bucket: 'Bucket',
      businessStatus: 'BusinessStatus',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      createdByTag: 'CreatedByTag',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      hitTags: 'HitTags',
      include: 'Include',
      instanceGroupId: 'InstanceGroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      latestExecuteJobId: 'LatestExecuteJobId',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      resources: 'Resources',
      retention: 'Retention',
      rules: 'Rules',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      trialInfo: 'TrialInfo',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSourceGroupId: 'string',
      backupType: 'string',
      bucket: 'string',
      businessStatus: 'string',
      changeListPath: 'string',
      clientId: 'string',
      clusterId: 'string',
      createTime: 'number',
      createdByTag: 'boolean',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      hitTags: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags,
      include: 'string',
      instanceGroupId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      latestExecuteJobId: 'string',
      options: 'string',
      otsDetail: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail,
      paths: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths,
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      resources: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources,
      retention: 'number',
      rules: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules,
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      trialInfo: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo,
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.hitTags && typeof (this.hitTags as any).validate === 'function') {
      (this.hitTags as any).validate();
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.trialInfo && typeof (this.trialInfo as any).validate === 'function') {
      (this.trialInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlans extends $dara.Model {
  backupPlan?: DescribeBackupPlansResponseBodyBackupPlansBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      backupPlan: 'BackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlan: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlan },
    };
  }

  validate() {
    if(Array.isArray(this.backupPlan)) {
      $dara.Model.validateArray(this.backupPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried backup plans.
   */
  backupPlans?: DescribeBackupPlansResponseBodyBackupPlans;
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
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The total number of returned backup plans that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlans: 'BackupPlans',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlans: DescribeBackupPlansResponseBodyBackupPlans,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.backupPlans && typeof (this.backupPlans as any).validate === 'function') {
      (this.backupPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

