// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvancedBackupPolicyResponseBodyAdvancedBackupDataPolicies extends $dara.Model {
  /**
   * @remarks
   * The action type.
   * 
   * @example
   * xx
   */
  actionType?: string;
  /**
   * @remarks
   * The scheduling type of the advanced policy. Valid values:
   * - dayOfWeek: weekly scheduling
   * - dayOfMonth: monthly scheduling
   * - dayOfYear: yearly scheduling
   * - backupInterval: fixed-interval scheduling (high-frequency backup)
   * 
   * @example
   * dayOfWeek
   */
  backupPolicy?: string;
  /**
   * @remarks
   * The destination region of the backup policy.
   * 
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @remarks
   * The destination type of the backup policy. Valid values:
   * - level1: same-region backup
   * - level2Cross: cross-region backup
   * 
   * @example
   * level1
   */
  destType?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * xxxxxx
   */
  policyId?: string;
  /**
   * @remarks
   * The backup cycle. 
   * - When **BackupPolicy** is set to **dayOfWeek**, the values 1, 2, 3, 4, 5, 6, and 7 represent Monday to Sunday.
   * - When **BackupPolicy** is set to **dayOfMonth**, the values 1, 3, and -1 represent the 1st, 3rd, and last day of each month.
   * - When **BackupPolicy** is set to **dayOfYear**, the value 01-07 represents January 7.
   * - When **BackupPolicy** is set to **backupInterval**, the value 30 represents a backup every 30 minutes.
   * 
   * @example
   * 1,2,3
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * Specifies whether to enable sparse backup within an hour. Valid values:
   * - true: When the backup frequency is minute-level, all snapshots taken within 1 hour from the current time are retained. For snapshots taken more than 1 hour but within 24 hours from the current time, only the first snapshot after each hour is retained.
   * - false: Sparse backup within an hour is disabled. All snapshots within the retention period of high-frequency backups are retained.
   * 
   * @example
   * False
   */
  preserveOneEachHour?: boolean;
  /**
   * @remarks
   * The number of days for which backups are retained.
   * 
   * @example
   * 7
   */
  retentionPeriod?: number;
  /**
   * @remarks
   * The retention epoch type of the backup set. Valid values:
   * - **never**: long-term retention (LTR)
   * - **delay**: fixed-day retention
   * 
   * @example
   * delay
   */
  retentionType?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  /**
   * @remarks
   * The source type of the backup policy. Valid values:
   * - db: same-region backup
   * - level1: cross-region backup
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

export class DescribeAdvancedBackupPolicyResponseBodyAdvancedBackupLogPolicies extends $dara.Model {
  /**
   * @remarks
   * The destination region of the log backup policy.
   * 
   * @example
   * cn-guangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The destination type of the log backup policy. Valid values:
   * - level1: same-region backup
   * - level2Cross: cross-region backup
   * 
   * @example
   * RDS
   */
  destType?: string;
  /**
   * @remarks
   * Specifies whether log backup is enabled. Valid values:
   * - **1**: enabled
   * - **0**: disabled
   * 
   * @example
   * 1
   */
  enableLogBackup?: number;
  /**
   * @remarks
   * The ID of the log backup policy. This parameter is returned only for cross-region log backup policies.
   * 
   * @example
   * xxxx
   */
  policyId?: string;
  /**
   * @remarks
   * The number of days for which log backups are retained. This parameter takes effect only when RetentionType is set to delay.
   * 
   * @example
   * 4
   */
  retentionPeriod?: string;
  /**
   * @remarks
   * The retention epoch type of log backups. Valid values:
   * - **never**: long-term retention (LTR)
   * - **delay**: fixed-day retention
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
   * - db: same-region backup
   * - level1: cross-region backup
   * 
   * @example
   * et
   */
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
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
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      policyId: 'string',
      retentionPeriod: 'string',
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

export class DescribeAdvancedBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup policies.
   */
  advancedBackupDataPolicies?: DescribeAdvancedBackupPolicyResponseBodyAdvancedBackupDataPolicies[];
  /**
   * @remarks
   * The list of log backup policies.
   */
  advancedBackupLogPolicies?: DescribeAdvancedBackupPolicyResponseBodyAdvancedBackupLogPolicies[];
  /**
   * @remarks
   * The data retention policy. Valid values:
   * - 0: All backup sets of the instance are immediately deleted when the instance is released.
   * - 1: The last backup set is retained for long-term retention (LTR) when the instance is released.
   * - 2: All backup sets are retained for long-term retention (LTR) when the instance is released.
   * 
   * @example
   * 2
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp14bf67a76d****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The backup time in the <i>HH:mm</i>Z-<i>HH:mm</i>Z format (UTC).
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time range for starting a backup. The time is in the `HH:mmZ-HH:mmZ` format (UTC). Example: 01:00Z-02:00Z. The backup starts within this time range.
   * 
   * @example
   * 2024-06-19T19:11Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 111E7B16-0A87-4CBA-B271-F34AD61E099F
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * - **Flash**: backup within seconds
   * - **Standard**: standard backup
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
      preferredNextBackupTime: 'PreferredNextBackupTime',
      requestId: 'RequestId',
      snapshotBackupType: 'SnapshotBackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedBackupDataPolicies: { 'type': 'array', 'itemType': DescribeAdvancedBackupPolicyResponseBodyAdvancedBackupDataPolicies },
      advancedBackupLogPolicies: { 'type': 'array', 'itemType': DescribeAdvancedBackupPolicyResponseBodyAdvancedBackupLogPolicies },
      backupRetentionPolicyOnClusterDeletion: 'number',
      DBInstanceId: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      requestId: 'string',
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

