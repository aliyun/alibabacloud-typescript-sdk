// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLocalResponseBodyBackupPolicyDO extends $dara.Model {
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupAppName?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupDbName?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupLevel?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupLog?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupMode?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupType?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  dataBackupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  gmtCreate?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether the feature is enabled to forcibly delete binary log files if the used storage space of the instance exceeds 90% of the total storage space or the remaining storage space is less than 5 GB. Valid values:
   * 
   * *   1: The feature is enabled.
   * *   0: The feature is disabled.
   * 
   * @example
   * 1
   */
  highSpaceUsageProtection?: number;
  /**
   * @remarks
   * The number of hours for which log backup files are retained on the instance. Valid values: 0 to 168. Default value: **18**. The value **0** indicates that log backup files are not retained.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum storage usage that is allowed for local log files. Valid values: 0 to 50. Default value: 30.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  nextBackupActuallyTime?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupAppName: 'BackupAppName',
      backupDbName: 'BackupDbName',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupType: 'BackupType',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupAppName: 'string',
      backupDbName: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      backupType: 'string',
      dataBackupRetentionPeriod: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'number',
      logBackupRetentionPeriod: 'number',
      nextBackupActuallyTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backup policy.
   */
  backupPolicyDO?: DescribeBackupLocalResponseBodyBackupPolicyDO;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FDC9CFD5-306D-4A23-9D8C-057274C6****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDO: 'BackupPolicyDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDO: DescribeBackupLocalResponseBodyBackupPolicyDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.backupPolicyDO && typeof (this.backupPolicyDO as any).validate === 'function') {
      (this.backupPolicyDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

