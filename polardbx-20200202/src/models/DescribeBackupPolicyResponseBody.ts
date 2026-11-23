// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The backup cycle. You must specify at least 2 days. The value is a 7-digit string. Each digit from left to right indicates whether backup is enabled from Monday to Sunday. A value of 0 indicates that backup is disabled, and a value of 1 indicates that backup is enabled:
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
   * The start time of the daily backup, in UTC.
   * 
   * @example
   * 03:00Z
   */
  backupPlanBegin?: string;
  /**
   * @remarks
   * The retention period of backup sets, in days.
   * 
   * @example
   * 30
   */
  backupSetRetention?: number;
  /**
   * @remarks
   * The backup type. A value of 0 indicates quick backup.
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
   * The interval for cold data backups, in days. Valid values: 1 to 59.
   * 
   * @example
   * 30
   */
  coldDataBackupInterval?: number;
  /**
   * @remarks
   * The retention period of cold data backups, in days.
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
   * The name of the instance.
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
   * Indicates whether binary logs are forcibly cleared when the space usage of the instance is excessively high. A value of 1 indicates yes, and a value of 0 indicates no.
   * 
   * @example
   * 1
   */
  forceCleanOnHighSpaceUsage?: number;
  /**
   * @remarks
   * Indicates whether cross-region data backup is enabled. Default value: false.
   */
  isCrossRegionDataBackupEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether cross-region log backup is enabled. Default value: false.
   */
  isCrossRegionLogBackupEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether backup is enabled. The value is fixed as 1, which indicates that backup is enabled.
   * 
   * @example
   * 1
   */
  isEnabled?: number;
  /**
   * @remarks
   * The retention period of local log backups, in hours. Valid values: 0 to 7 × 24. A value of 0 indicates that local log backups are not retained. Default value: 7.
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
   * The maximum space usage of binary logs. The parameter value ranges from 0 to 50. This is a loop space. Default value: 30.
   * 
   * @example
   * 30
   */
  logLocalRetentionSpace?: number;
  /**
   * @remarks
   * The retention period of remote log backups, in days. Valid values: 7 to 730. Default value: 7.
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

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  data?: DescribeBackupPolicyResponseBodyData;
  /**
   * @remarks
   * The message returned. If the request is successful, success is returned. If the request fails, the corresponding error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B87E2AB3-B7C9-4394-9160-7F639F732031
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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
      data: DescribeBackupPolicyResponseBodyData,
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

