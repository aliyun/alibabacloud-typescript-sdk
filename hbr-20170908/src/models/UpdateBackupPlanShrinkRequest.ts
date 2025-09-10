// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupPlanShrinkRequestRule extends $dara.Model {
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
   * The ID of the region where the remote backup vault resides.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
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
   * Specifies whether to enable remote replication.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
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
   * The name of the backup policy.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Format: I|{startTime}|{interval}. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, I|1631685600|P1D specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds. interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
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

export class UpdateBackupPlanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the incremental file synchronization. This parameter is required for data synchronization only.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The details about ECS instance backup. The value is a JSON string.
   * 
   * *   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are enhanced SSDs (ESSDs).
   * *   appConsistent: specifies whether to enable application consistency. If you set this parameter to true, you must also specify the preScriptPath and postScriptPath parameters.
   * *   preScriptPath: the path to the pre-freeze scripts.
   * *   postScriptPath: the path to the post-thaw scripts.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detailShrink?: string;
  /**
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the paths to the files that are excluded from the backup job. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the paths to the files that you want to back up. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
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
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies whether to use Windows Volume Shadow Copy Service (VSS) to define a source path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before you can set this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot back up data from multiple directories.
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
   * The source paths.
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
   * This parameter is required only if the **SourceType** parameter is set to **OSS**. This parameter specifies the prefix of objects that you want to back up. After a prefix is specified, only objects whose names start with the prefix are backed up.
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
   * The rule of the backup plan.
   */
  rule?: UpdateBackupPlanShrinkRequestRule[];
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the `{startTime}` parameter and the subsequent backup jobs at an interval that is specified in the `{interval}` parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   **startTime**: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   **interval**: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
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
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the throttling rules. To ensure business continuity, you can limit the bandwidth that is used for file backup during peak hours. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.
   * 
   * *   **start**: the start hour
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Specifies whether to update the source path if the backup source is empty. Valid values:
   * 
   * *   true: The system replaces the original source path with the specified source path.
   * *   false: The system does not update the original source path. The system backs up data based on the source path that you specified when you created the backup plan.
   * 
   * @example
   * false
   */
  updatePaths?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      changeListPath: 'ChangeListPath',
      detailShrink: 'Detail',
      edition: 'Edition',
      exclude: 'Exclude',
      include: 'Include',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
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
      detailShrink: 'string',
      edition: 'string',
      exclude: 'string',
      include: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetailShrink: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': UpdateBackupPlanShrinkRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatePaths: 'boolean',
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

