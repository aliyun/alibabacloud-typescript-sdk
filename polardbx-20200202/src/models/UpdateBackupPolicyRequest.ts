// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupPolicyRequest extends $dara.Model {
  /**
   * @example
   * 1001000
   */
  backupPeriod?: string;
  /**
   * @example
   * 03:00Z
   */
  backupPlanBegin?: string;
  /**
   * @example
   * 30
   */
  backupSetRetention?: number;
  /**
   * @example
   * 0
   */
  backupType?: string;
  /**
   * @example
   * P
   */
  backupWay?: string;
  /**
   * @example
   * 30
   */
  coldDataBackupInterval?: number;
  /**
   * @example
   * 30
   */
  coldDataBackupRetention?: number;
  crossRegionDataBackupRetention?: number;
  crossRegionLogBackupRetention?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasdyuoo
   */
  DBInstanceName?: string;
  destCrossRegion?: string;
  /**
   * @example
   * 1
   */
  forceCleanOnHighSpaceUsage?: number;
  isCrossRegionDataBackupEnabled?: boolean;
  isCrossRegionLogBackupEnabled?: boolean;
  /**
   * @example
   * 1
   */
  isEnabled?: number;
  /**
   * @example
   * 7
   */
  localLogRetention?: number;
  localLogRetentionNumber?: number;
  /**
   * @example
   * 30
   */
  logLocalRetentionSpace?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

