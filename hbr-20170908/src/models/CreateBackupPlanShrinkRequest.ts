// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPlanShrinkRequestRule extends $dara.Model {
  /**
   * @remarks
   * Backup type.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * ID of the region for offsite replication.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * Number of days to retain offsite backups.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Whether the rule is enabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Whether to enable offsite replication.
   * 
   * @example
   * true
   */
  doCopy?: boolean;
  /**
   * @remarks
   * Backup retention period.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * Backup strategy. Optional format: I|{startTime}|{interval}. This means that a backup task is executed every {interval} starting from {startTime}. Backup tasks for past times will not be executed. If the previous backup task has not been completed, the next backup task will not be triggered. For example, I|1631685600|P1D means a backup is performed every day starting from 2021-09-15 14:00:00.
   * 
   * - startTime: The start time of the backup, in UNIX time, in seconds.
   * - interval: ISO8601 time interval. For example, PT1H means an interval of one hour. P1D means an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
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

export class CreateBackupPlanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Backup type. Value: **COMPLETE**, indicating a full backup.
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **OSS**. It represents the OSS bucket name.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * Configuration for the incremental file synchronization list. (Required only for synchronization)
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The ID of the client group that executes the data synchronization plan. This parameter is required only for data synchronization.
   * 
   * @example
   * cl-***************
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **NAS**. It represents the creation time of the file system, in UNIX timestamp, in seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The role name created in the RAM of the original account for cross-account backup.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values:
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The original account ID used for cross-account backup.
   * 
   * @example
   * 15897534xxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the data source. This parameter is required only for data synchronization.
   * 
   * @example
   * ds-****************
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Destination data source details. (Required only for synchronization)
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetailShrink?: string;
  /**
   * @remarks
   * Destination data source ID. (Required only for synchronization)
   * 
   * @example
   * ds-*********************
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * Destination data source type. (Required only for synchronization)
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * Details of the whole machine backup, in JSON string format.
   * 
   * * snapshotGroup: Whether to use a consistent snapshot group (only valid if all instance disks are ESSD).
   * * appConsistent: Whether to use application consistency (requires the use of preScriptPath and postScriptPath parameters).
   * * preScriptPath: Path to the freeze script.
   * * postScriptPath: Path to the thaw script.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detailShrink?: string;
  /**
   * @remarks
   * Is the plan disabled by default
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. It specifies the path that should not be backed up, meaning all files under this path will not be included in the backup. The maximum length is 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **NAS**. It represents the file system ID.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the path to be backed up, and all files under this path will be backed up. Supports up to 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the ECS instance ID.
   * 
   * @example
   * i-m5e*****6q
   */
  instanceId?: string;
  /**
   * @remarks
   * Table store instance name.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * Whether to enable retaining at least one backup version.
   * - 0 - Do not retain
   * - 1 - Retain
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It indicates whether to use the Windows system VSS to define the backup path.
   * 
   * - This feature only supports Windows type ECS instances.
   * - If there are data changes in the backup source and you need to ensure consistency between the backup data and the source data, you can configure it as `["UseVSS":true]`.
   * - After choosing to use VSS, multiple file directories cannot be backed up simultaneously.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetailShrink?: string;
  /**
   * @remarks
   * Backup paths.
   */
  path?: string[];
  /**
   * @remarks
   * Name of the backup plan. 1 to 64 characters. The name must be unique for each data source type within a single backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **OSS**. It represents the backup prefix. When specified, only objects matching the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * Number of days to retain the backup, with a minimum value of 1, in days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * Backup plan rules.
   */
  rule?: CreateBackupPlanShrinkRequestRule[];
  /**
   * @remarks
   * Backup policy. Optional format: `I|{startTime}|{interval}`. This indicates that a backup task will be executed every `{interval}` starting from `{startTime}`. It does not compensate for missed backup tasks due to past time. If the previous backup task has not been completed, the next backup task will not be triggered. For example, `I|1631685600|P1D` means a backup is performed every day starting from 2021-09-15 14:00:00.
   * 
   * - **startTime**: Start time of the backup, in UNIX timestamp, in seconds.
   * - **interval**: ISO8601 time interval. For example, PT1H indicates an interval of one hour, and P1D indicates an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: File Storage NAS (NAS) file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * *   **SYNC**: data synchronization
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the backup traffic control. Format: `{start}:{end}:{bandwidth}`. Multiple traffic control configurations are separated by |, and the configured times should not overlap.
   * 
   * - **start**: Start hour.
   * - **end**: End hour.
   * - **bandwidth**: Limit rate, in KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Region where the whole machine backup instance is located.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * Backup vault ID.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      destDataSourceDetailShrink: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detailShrink: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      path: 'Path',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      clusterId: 'string',
      createTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      destDataSourceDetailShrink: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detailShrink: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetailShrink: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': CreateBackupPlanShrinkRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

