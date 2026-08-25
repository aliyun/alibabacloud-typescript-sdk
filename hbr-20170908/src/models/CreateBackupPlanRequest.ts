// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OtsDetail } from "./OtsDetail";


export class CreateBackupPlanRequestRule extends $dara.Model {
  /**
   * @remarks
   * The backup type.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the destination region for cross-region replication.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of the geo-redundancy backup. Unit: days.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Specifies whether the rule is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable cross-region replication.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The retention period of the backup.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Format: I|{startTime}|{interval}. This indicates that a backup job is executed at every {interval} starting from {startTime}. Backup jobs for past time periods are not executed. If the previous backup job is not completed, the next backup job is not triggered. Example: I|1631685600|P1D indicates that a backup is performed once a day starting from 2021-09-15 14:00:00.
   * 
   * startTime: the start time of the backup. The value is a UNIX timestamp. Unit: seconds.
   * interval: the ISO 8601 time interval. Example: PT1H indicates an interval of one hour. P1D indicates an interval of one day.
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

export class CreateBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. Set the value to **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **OSS**. The name of the OSS bucket.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The configuration of the incremental file synchronization list. This parameter is required only for data synchronization.
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
   * This parameter is required only when **SourceType** is set to **NAS**. The time when the file system was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the RAM role created in the source account for cross-account backup.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The cross-account backup type. Valid values: 
   * - SELF_ACCOUNT: backup within the same account.
   * - CROSS_ACCOUNT: cross-account backup.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source account for cross-account backup.
   * 
   * @example
   * 15897534xxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the source data source. This parameter is required only for data synchronization.
   * 
   * @example
   * ds-****************
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The details of the destination data source. This parameter is required only for data synchronization.
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetail?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the destination data source. This parameter is required only for data synchronization.
   * 
   * @example
   * ds-*********************
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The type of the destination data source. This parameter is required only for data synchronization.
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * The details of the full-copy backup. The value is a JSON string.
   * 
   * * snapshotGroup: specifies whether to use a consistent snapshot group. This parameter is valid only when all cloud disks of the instance are ESSDs.
   * * appConsistent: specifies whether to use application consistency. This parameter must be used together with the preScriptPath and postScriptPath parameters.
   * * preScriptPath: the path of the pre-freeze script.
   * * postScriptPath: the path of the post-thaw script.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether the plan is disabled by default.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * The edition type. Valid values: BASIC and STANDARD. Default value: STANDARD.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. The path to exclude from the backup. All files in this path are not backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **NAS**. The file system ID.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. The path to include in the backup. All files in this path are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. The ECS instance ID.
   * 
   * @example
   * i-m5e*****6q
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
   * Specifies whether to retain at least one backup version. Valid values:
   * - 0: does not retain.
   * - 1: retains.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. Specifies whether to use Windows Volume Shadow Copy Service (VSS) to define the source path.
   * 
   * - This feature is supported only for Windows ECS instances.
   * - If the backup source contains data changes and you need to ensure consistency between the backup data and the source data, set this parameter to `["UseVSS":true]`.
   * - After VSS is enabled, multiple file folders cannot be backed up simultaneously.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details of the Tablestore instance.
   */
  otsDetail?: OtsDetail;
  /**
   * @remarks
   * The source paths.
   */
  path?: string[];
  /**
   * @remarks
   * The name of the backup plan. The name must be 1 to 64 characters in length. The backup plan name must be unique for each data source type within a single vault.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **OSS**. The backup prefix. If specified, only objects that match the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The retention period of the backup data. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The backup plan rules.
   */
  rule?: CreateBackupPlanRequestRule[];
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. This indicates that a backup job is executed at every `{interval}` starting from `{startTime}`. Backup jobs for past time periods are not compensated. If the previous backup job is not completed, the next backup job is not triggered. Example: `I|1631685600|P1D` indicates that a backup is performed once a day starting from 2021-09-15 14:00:00.
   * 
   * - **startTime**: the start time of the backup. The value is a UNIX timestamp. Unit: seconds.
   * - **interval**: the ISO 8601 time interval. Example: PT1H indicates an interval of one hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: backs up ECS files.
   * - **OSS**: backs up Alibaba Cloud OSS.
   * - **NAS**: backs up Alibaba Cloud NAS.
   * - **OTS**: backs up Alibaba Cloud OTS.
   * - **UDM_ECS**: backs up an entire ECS instance.
   * - **SYNC**: data synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. The backup traffic control. Format: `{start}:{end}:{bandwidth}`. Separate multiple traffic control configurations with vertical bars (|). The time ranges of the configurations cannot overlap.
   * 
   * - **start**: the start hour.
   * - **end**: the end hour.
   * - **bandwidth**: the rate limit. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * The region where the ECS instance for full-copy backup resides.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * The vault ID.
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
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      edition: 'Edition',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetail: 'OtsDetail',
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
      destDataSourceDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      disabled: 'boolean',
      edition: 'string',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetail: OtsDetail,
      path: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': CreateBackupPlanRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.destDataSourceDetail) {
      $dara.Model.validateMap(this.destDataSourceDetail);
    }
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
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

