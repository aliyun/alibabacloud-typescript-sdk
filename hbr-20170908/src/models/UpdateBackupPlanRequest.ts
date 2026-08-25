// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OtsDetail } from "./OtsDetail";


export class UpdateBackupPlanRequestRule extends $dara.Model {
  /**
   * @remarks
   * The backup type. Set the value to **COMPLETE**. This indicates a full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the destination region for the geo-redundant backup.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The number of days to retain the geo-redundant backup.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Specifies whether to disable the policy.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable geo-redundant replication.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The number of days to retain backups. The minimum value is 1.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Use the I|{startTime}|{interval} format. This specifies that a backup job runs at a recurring interval. The {startTime} is when the backup starts. The {interval} is the time between jobs. HBR does not run overdue backup jobs. If the previous backup job is not finished, the next one does not start. For example, I|1631685600|P1D means the backup runs once a day, starting at 14:00:00 on September 15, 2021.
   * 
   * startTime: The start time of the backup. This is a UNIX timestamp in seconds. interval: The time interval. Use the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
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

export class UpdateBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the incremental file synchronization list. (This parameter is required only for file synchronization.)
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The details of the ECS instance backup. This is a JSON string.
   * 
   * - snapshotGroup: Specifies whether to use a snapshot-consistent group. This feature is available only when all disks of the instance are Enhanced Solid-State Drives (ESSDs).
   * 
   * - appConsistent: Specifies whether to enable application consistency. You must also configure the preScriptPath and postScriptPath parameters.
   * 
   * - preScriptPath: The path to the pre-freeze script.
   * 
   * - postScriptPath: The path to the post-thaw script.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The edition. Valid values are BASIC and STANDARD. The default value is STANDARD.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. This parameter specifies the paths to the files to exclude from the backup. All files in the specified paths are not backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. This parameter specifies the paths to the files to back up. All files in the specified paths are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Specifies whether to permanently retain the latest backup version.
   * 
   * - 0: No
   * 
   * - 1: Yes
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. This parameter specifies whether to use Volume Shadow Copy Service (VSS) to define the backup path.
   * 
   * - This feature is available only for Windows ECS instances.
   * 
   * - If data changes occur in the backup source, set this parameter to `["UseVSS":true]` to ensure data consistency.
   * 
   * - If you enable VSS, you cannot back up multiple file directories at the same time.
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
   * The backup paths.
   */
  path?: string[];
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-20211***735
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
   * This parameter is required only when **SourceType** is set to **OSS**. This parameter specifies the prefix of objects to back up. After you specify a prefix, only objects that match the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The number of days to retain backups. The minimum value is 1.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The rules of the backup plan.
   */
  rule?: UpdateBackupPlanRequestRule[];
  /**
   * @remarks
   * The backup policy. Use the `I|{startTime}|{interval}` format. This specifies that a backup job runs at a recurring interval. The `{startTime}` is when the backup starts. The `{interval}` is the time between jobs. HBR does not run overdue backup jobs. If the previous backup job is not finished, the next one does not start. For example, `I|1631685600|P1D` means the backup runs once a day, starting at 14:00:00 on September 15, 2021.
   * 
   * - **startTime**: The start time of the backup. This is a UNIX timestamp in seconds.
   * 
   * - **interval**: The time interval. Use the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: Backs up ECS files.
   * 
   * - **OSS**: Backs up Alibaba Cloud OSS.
   * 
   * - **NAS**: Backs up Alibaba Cloud NAS.
   * 
   * - **OTS**: Backs up Alibaba Cloud Tablestore.
   * 
   * - **UDM_ECS**: Backs up an entire ECS instance.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. This parameter specifies traffic shaping for backups. Traffic shaping helps you control backup traffic during peak business hours to avoid affecting your services. The format is `{start}|{end}|{bandwidth}`. You can specify multiple traffic shaping rules. Separate them with vertical bars (|). The time ranges of the rules cannot overlap.
   * 
   * - **start**: The start hour.
   * 
   * - **end**: The end hour.
   * 
   * - **bandwidth**: The maximum speed. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Specifies whether to update the backup paths if the Path parameter is empty.
   * 
   * - true: Updates the backup paths based on the paths specified in this call.
   * 
   * - false: Does not update the backup paths. The backup paths that were configured when the backup plan was created are used.
   * 
   * @example
   * false
   */
  updatePaths?: boolean;
  /**
   * @remarks
   * The ID of the backup repository.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      changeListPath: 'ChangeListPath',
      detail: 'Detail',
      edition: 'Edition',
      exclude: 'Exclude',
      include: 'Include',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetail: 'OtsDetail',
      path: 'Path',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatePaths: 'UpdatePaths',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeListPath: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      edition: 'string',
      exclude: 'string',
      include: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetail: OtsDetail,
      path: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': UpdateBackupPlanRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatePaths: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
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

