// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupPolicyResponseBodyData extends $dara.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  coldDataBackupInterval?: number;
  coldDataBackupRetention?: number;
  crossRegionDataBackupRetention?: number;
  crossRegionLogBackupRetention?: number;
  DBInstanceName?: string;
  destCrossRegion?: string;
  forceCleanOnHighSpaceUsage?: number;
  isCrossRegionDataBackupEnabled?: boolean;
  isCrossRegionLogBackupEnabled?: boolean;
  isEnabled?: number;
  localLogRetention?: number;
  localLogRetentionNumber?: number;
  logLocalRetentionSpace?: number;
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

export class UpdateBackupPolicyResponseBody extends $dara.Model {
  data?: UpdateBackupPolicyResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateBackupPolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

