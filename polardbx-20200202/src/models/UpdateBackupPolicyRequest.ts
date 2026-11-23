// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The backup cycle. Specify at least two days. The value is a 7-digit string, where each digit from left to right represents whether backups are enabled for Monday through Sunday. A value of 0 indicates that backups are disabled, and a value of 1 indicates that backups are enabled:
   * 
   * - First digit: Monday
   * - Second digit: Tuesday
   * - Third digit: Wednesday
   * - Fourth digit: Thursday
   * - Fifth digit: Friday
   * - Sixth digit: Saturday
   * - Seventh digit: Sunday
   * 
   * @example
   * 1001000
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The time when the daily backup starts, in UTC.
   * 
   * @example
   * 03:00Z
   */
  backupPlanBegin?: string;
  /**
   * @remarks
   * The retention period of the backup set, in days.
   * 
   * @example
   * 30
   */
  backupSetRetention?: number;
  /**
   * @remarks
   * The backup type. Currently, only 0 is supported, which indicates a quick backup.
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
   * - **L**: logical backup
   * 
   * @example
   * P
   */
  backupWay?: string;
  /**
   * @remarks
   * The interval at which cold data is backed up, in days. Valid values: 1 to 59.
   * 
   * @example
   * 30
   */
  coldDataBackupInterval?: number;
  /**
   * @remarks
   * The retention period of cold data backups, in days. Valid values: 30 to 730.
   * 
   * @example
   * 30
   */
  coldDataBackupRetention?: number;
  /**
   * @remarks
   * The retention period of cross-region data backups, in days.
   * 
   * @example
   * 30
   */
  crossRegionDataBackupRetention?: number;
  /**
   * @remarks
   * The number of days selected for cross-region backups.
   * 
   * @example
   * 3,7,1,5,6,2,4
   */
  crossRegionFilterValue?: string;
  /**
   * @remarks
   * The retention period of cross-region log backups, in days.
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
   * The destination region for cross-region backups.
   * 
   * @example
   * cn-shanghai
   */
  destCrossRegion?: string;
  /**
   * @remarks
   * Specifies whether to forcibly clear binary logs when the total storage usage of the instance exceeds 80% or the remaining storage is less than 50 GB. The system clears the earliest binary logs until the total storage usage drops below 80% and the remaining storage is greater than 50 GB. Valid values:
   * 
   * - **1**: yes
   * - **0**: no
   * 
   * @example
   * 1
   */
  forceCleanOnHighSpaceUsage?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-region data backups. Default value: false.
   * 
   * @example
   * false
   */
  isCrossRegionDataBackupEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable cross-region log backups. Default value: false.
   * 
   * @example
   * false
   */
  isCrossRegionLogBackupEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable backups. The fixed value is 1, which indicates that backups are enabled.
   * 
   * @example
   * 1
   */
  isEnabled?: number;
  /**
   * @remarks
   * The local retention period of log backups, in hours. Valid values: 0 to 168. A value of 0 indicates that log backups are not retained. Default value: 7.
   * 
   * @example
   * 7
   */
  localLogRetention?: number;
  /**
   * @remarks
   * The number of local binary logs to retain. Valid values: 6 to 100. Default value: 60.
   * 
   * @example
   * 60
   */
  localLogRetentionNumber?: number;
  /**
   * @remarks
   * The maximum space usage for binary logs. The parameter value ranges from 0 to 50. This is a loop space. Default value: 30.
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
   * The remote retention period of log backups, in days. Valid values: 7 to 730. Default value: 7.
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

