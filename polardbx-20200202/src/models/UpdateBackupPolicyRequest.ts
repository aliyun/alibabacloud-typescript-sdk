// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The backup cycle. You must specify at least 2 days. The value is a 7-digit number. From left to right, each digit indicates whether backup is enabled from Monday to Sunday. A value of 0 indicates that backup is disabled, and a value of 1 indicates that backup is enabled:
   * 
   * - First digit: Monday
   * - Second digit: Tuesday
   * - Third digit: Wednesday
   * - Fourth digit: Thursday
   * - Fifth digit: Friday
   * - Sixth digit: Saturday
   * - Seventh digit: Sunday.
   * 
   * @example
   * 1001000
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The start time of the daily backup, in UTC.
   * 
   * @example
   * 03:00Z
   */
  backupPlanBegin?: string;
  /**
   * @remarks
   * The retention period of backup sets. Unit: days.
   * 
   * @example
   * 30
   */
  backupSetRetention?: number;
  /**
   * @remarks
   * The backup type. Currently, only "0" is supported, which indicates fast backup.
   * 
   * @example
   * 0
   */
  backupType?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * - **P**: physical backup
   * - **L**: logical backup.
   * 
   * @example
   * P
   */
  backupWay?: string;
  /**
   * @remarks
   * The interval for cold data backups. Unit: days. Valid values: 1 to 59.
   * 
   * @example
   * 30
   */
  coldDataBackupInterval?: number;
  /**
   * @remarks
   * The retention period for cold data backups. Unit: days. Valid values: 30 to 730.
   * 
   * @example
   * 30
   */
  coldDataBackupRetention?: number;
  /**
   * @remarks
   * The retention period for cross-region data backups. Unit: days.
   * 
   * @example
   * 30
   */
  crossRegionDataBackupRetention?: number;
  crossRegionFilterValue?: string;
  /**
   * @remarks
   * The retention period for cross-region log backups. Unit: days.
   * 
   * @example
   * 30
   */
  crossRegionLogBackupRetention?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasdyuoo
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The destination region for cross-region backup.
   * 
   * @example
   * cn-shanghai
   */
  destCrossRegion?: string;
  /**
   * @remarks
   * Specifies whether to forcibly clean up binary logs when the total space usage of the instance exceeds 80% or the remaining space is less than 50 GB. The cleanup starts from the earliest logs until the total space usage drops below 80% and the remaining space exceeds 50 GB. Valid values:
   * 
   * - **1**: yes
   * - **0**: no.
   * 
   * @example
   * 1
   */
  forceCleanOnHighSpaceUsage?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-region data backup. Default value: false.
   * 
   * @example
   * false
   */
  isCrossRegionDataBackupEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable cross-region log backup. Default value: false.
   * 
   * @example
   * false
   */
  isCrossRegionLogBackupEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable backup. The value is fixed to 1, which indicates that backup is enabled.
   * 
   * @example
   * 1
   */
  isEnabled?: number;
  /**
   * @remarks
   * The number of hours that log backups are retained locally. Valid values: 0 to 168 (7 × 24 hours). A value of 0 indicates that log backups are not retained locally. Default value: 7.
   * 
   * @example
   * 7
   */
  localLogRetention?: number;
  /**
   * @remarks
   * The number of binary logs retained locally. Default value: 60. Valid values: 6 to 100.
   * 
   * @example
   * 60
   */
  localLogRetentionNumber?: number;
  /**
   * @remarks
   * The maximum space usage for binary logs, expressed as a percentage. Valid values: 0 to 50. This parameter specifies a loop space. Default value: 30.
   * 
   * @example
   * 30
   */
  logLocalRetentionSpace?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of days that log backups are retained remotely. Valid values: 7 to 730. Unit: days. Default value: 7.
   * 
   * @example
   * 7
   */
  removeLogRetention?: number;
  static names(): { [key: string]: string } {
    return {
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      coldDataBackupInterval: 'ColdDataBackupInterval',
      coldDataBackupRetention: 'ColdDataBackupRetention',
      crossRegionDataBackupRetention: 'CrossRegionDataBackupRetention',
      crossRegionFilterValue: 'CrossRegionFilterValue',
      crossRegionLogBackupRetention: 'CrossRegionLogBackupRetention',
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isCrossRegionDataBackupEnabled: 'IsCrossRegionDataBackupEnabled',
      isCrossRegionLogBackupEnabled: 'IsCrossRegionLogBackupEnabled',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
      localLogRetentionNumber: 'LocalLogRetentionNumber',
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
      regionId: 'RegionId',
      removeLogRetention: 'RemoveLogRetention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPeriod: 'string',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      backupType: 'string',
      backupWay: 'string',
      coldDataBackupInterval: 'number',
      coldDataBackupRetention: 'number',
      crossRegionDataBackupRetention: 'number',
      crossRegionFilterValue: 'string',
      crossRegionLogBackupRetention: 'number',
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isCrossRegionDataBackupEnabled: 'boolean',
      isCrossRegionLogBackupEnabled: 'boolean',
      isEnabled: 'number',
      localLogRetention: 'number',
      localLogRetentionNumber: 'number',
      logLocalRetentionSpace: 'number',
      regionId: 'string',
      removeLogRetention: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

