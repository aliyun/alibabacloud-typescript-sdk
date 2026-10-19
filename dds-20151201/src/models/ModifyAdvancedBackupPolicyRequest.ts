// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAdvancedBackupPolicyRequestAdvancedBackupDataPolicies extends $dara.Model {
  /**
   * @remarks
   * The action. Valid values:
   * 
   * - **CREATE**: Creates a policy.
   * - **UPDATE**: Updates a policy.
   * - **DELETE**: Deletes a policy. If this value is specified, only the PolicyId parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  actionType?: string;
  /**
   * @remarks
   * The scheduling type of the advanced policy. Valid values:
   * 
   * - dayOfWeek: scheduled by week.
   * - dayOfMonth: scheduled by month.
   * - dayOfYear: scheduled by year.
   * - backupInterval: scheduled at a fixed interval (high-frequency backup).
   * 
   * > 
   * > - Multiple high-frequency backup policies are not supported.
   * > - Multiple geo-redundancy backups are not supported, and geo-redundancy policies only support dayOfWeek.
   * 
   * >Notice: Required when ActionType is not DELETE.
   * 
   * @example
   * dayOfWeek
   */
  backupPolicy?: string;
  /**
   * @remarks
   * The destination region of the backup policy.
   * 
   * >Notice: Required when ActionType is not DELETE.
   * 
   * @example
   * cn-guangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The destination type of the backup policy. Valid values:
   *  
   * - level1: same-region backup.
   * - level2Cross: cross-region backup.
   * 
   * >Notice: Required when ActionType is not DELETE.
   * 
   * @example
   * level1
   */
  destType?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * 
   * >Notice: Required when ActionType is not CREATE.
   * 
   * @example
   * xxxxxx
   */
  policyId?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * - When BackupPolicy is set to dayOfWeek: 1, 2, 3, 4, 5, 6, and 7 represent Monday to Sunday. At least two backups must be performed per week.
   * - When BackupPolicy is set to dayOfMonth: 1, 3, and -1 represent the 1st, 3rd, and last day of each month. -1 represents the last day of the month.
   * - When BackupPolicy is set to dayOfYear: 01-07 represents January 7. Only one day can be selected.
   * - When BackupPolicy is set to backupInterval: specify one of the following numbers in minutes. For sharded clusters, the valid values are 30, 60, 120, 180, 240, 360, 480, and 720. For replica sets, the valid values are 15, 30, 60, 120, 180, 240, 360, 480, and 720.
   * 
   * Note:
   * 
   * >Notice: Required when ActionType is not DELETE.
   * Geo-redundancy policies only support dayOfWeek.
   * 
   * @example
   * 1,4,6
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * Specifies whether to enable hourly sparse backup. Valid values:
   * 
   * - true: When the backup frequency is in minutes, all snapshots taken within 1 hour from the current time are retained. For snapshots taken more than 1 hour but within 24 hours from the current time, only the first snapshot after the hour is retained.
   * - false: All snapshots within the retention period of high-frequency backups are retained.
   * 
   * @example
   * False
   */
  preserveOneEachHour?: boolean;
  /**
   * @remarks
   * The retention period of the backup plan in days. Valid values:
   * 
   * - Same-region backup: 7 to 7300 days.
   * - Geo-redundancy: 3 to 1825 days.
   * 
   * >Notice: Required when RetentionType is set to delay.
   * 
   * @example
   * 7
   */
  retentionPeriod?: number;
  /**
   * @remarks
   * The retention cycle type of the backup set. Valid values:
   * 
   * - **never**: long-term retention (LTR).
   * - **delay**: retention for a fixed number of days.
   * 
   * >Notice: Required when ActionType is not DELETE.
   * 
   * @example
   * delay
   */
  retentionType?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * >Notice: Required when ActionType is not DELETE.
   * 
   * @example
   * cn-guangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The source type of the backup policy. Valid values:
   *   
   * - db: same-region backup.
   * - level1: cross-region backup.
   * 
   * >Notice: Required when ActionType is not DELETE.
   * 
   * @example
   * db
   */
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      backupPolicy: 'BackupPolicy',
      destRegion: 'DestRegion',
      destType: 'DestType',
      policyId: 'PolicyId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preserveOneEachHour: 'PreserveOneEachHour',
      retentionPeriod: 'RetentionPeriod',
      retentionType: 'RetentionType',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      backupPolicy: 'string',
      destRegion: 'string',
      destType: 'string',
      policyId: 'string',
      preferredBackupPeriod: 'string',
      preserveOneEachHour: 'boolean',
      retentionPeriod: 'number',
      retentionType: 'string',
      srcRegion: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvancedBackupPolicyRequestAdvancedBackupLogPolicies extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - CREATE: Creates a policy.
   * - UPDATE: Updates a policy.
   * 
   * >Notice: This parameter takes effect only for geo-redundancy. To delete geo-redundancy, set EnableLogBackup to 0 and set ActionType to UPDATE.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  actionType?: string;
  /**
   * @remarks
   * The region where the geo-redundancy log backup is stored.
   * 
   * > Required for geo-redundancy.
   * 
   * @example
   * cn-huhehaote
   */
  destRegion?: string;
  /**
   * @remarks
   * The destination type of the log backup policy. Valid values:
   *  
   * - level1: same-region backup. 
   * - level2Cross: cross-region backup.
   * 
   * @example
   * level1
   */
  destType?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * 
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * > 
   * > - Log backup must be enabled for sharded instances.
   * > - You must enable same-region log backup before you can enable cross-region log backup.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enableLogBackup?: number;
  /**
   * @remarks
   * The ID of the log backup policy. This parameter is required only for cross-region log backup policies.
   * 
   * @example
   * xxxx
   */
  policyId?: string;
  /**
   * @remarks
   * The retention period of the log backup in days. This parameter takes effect when RetentionType is set to delay. Valid values:
   * 
   * - Same-region backup: 7 to 7300 days. 
   * - Geo-redundancy: 3 to 1825 days. The value must be less than the backup retention period of the geo-redundancy policy.
   * 
   * @example
   * 7
   */
  retentionPeriod?: number;
  /**
   * @remarks
   * The retention cycle type of the log backup. Valid values:
   * 
   * - **never**: long-term retention (LTR).
   * - **delay**: retention for a fixed number of days.
   * 
   * @example
   * delay
   */
  retentionType?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The source type of the log backup policy. Valid values:
   *   
   * - db: same-region backup.
   * - level1: cross-region backup.
   * 
   * @example
   * db
   */
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      enableLogBackup: 'EnableLogBackup',
      policyId: 'PolicyId',
      retentionPeriod: 'RetentionPeriod',
      retentionType: 'RetentionType',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      policyId: 'string',
      retentionPeriod: 'number',
      retentionType: 'string',
      srcRegion: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvancedBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backup policies.
   */
  advancedBackupDataPolicies?: ModifyAdvancedBackupPolicyRequestAdvancedBackupDataPolicies[];
  /**
   * @remarks
   * The list of log backup policies.
   */
  advancedBackupLogPolicies?: ModifyAdvancedBackupPolicyRequestAdvancedBackupLogPolicies[];
  /**
   * @remarks
   * The backup retention policy. Valid values:
   * 
   * - 0: All backup sets of the instance are deleted immediately when the instance is released.
   * - 1: The last backup set is retained for long-term retention (LTR) when the instance is released.
   * - 2: All backup sets are retained for long-term retention (LTR) when the instance is released.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2zeb2d64cb46xxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time period during which the backup is performed. The format is <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC).
   * 
   * > The time range is limited to 1 hour.
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * - **Flash**: backup within seconds.
   * - **Standard**: standard backup. This is the default value.
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedBackupDataPolicies: 'AdvancedBackupDataPolicies',
      advancedBackupLogPolicies: 'AdvancedBackupLogPolicies',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      DBInstanceId: 'DBInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      snapshotBackupType: 'SnapshotBackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedBackupDataPolicies: { 'type': 'array', 'itemType': ModifyAdvancedBackupPolicyRequestAdvancedBackupDataPolicies },
      advancedBackupLogPolicies: { 'type': 'array', 'itemType': ModifyAdvancedBackupPolicyRequestAdvancedBackupLogPolicies },
      backupRetentionPolicyOnClusterDeletion: 'number',
      DBInstanceId: 'string',
      preferredBackupTime: 'string',
      snapshotBackupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advancedBackupDataPolicies)) {
      $dara.Model.validateArray(this.advancedBackupDataPolicies);
    }
    if(Array.isArray(this.advancedBackupLogPolicies)) {
      $dara.Model.validateArray(this.advancedBackupLogPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

