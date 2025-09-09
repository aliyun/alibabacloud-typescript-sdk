// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyBackupPolicyDO extends $dara.Model {
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
   * The backup level. Valid values:
   * 
   * *   **db**: database backup
   * *   **instance**: instance backup
   * 
   * @example
   * instance
   */
  backupLevel?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **1**: The log backup feature is enabled.
   * *   **0**: The log backup feature is disabled.
   * 
   * @example
   * 1
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **logic**: logical backup
   * *   **phy**: fast backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The type of the backup policy. Valid values:
   * 
   * *   **DataBackupPolicy**: a data backup policy
   * *   **LogBackupPolicy**: a log backup policy
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * The retention period of backup files. Unit: days.
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
   * The retention period of data backup files. Unit: days.
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
   * No value is returned.
   * 
   * @example
   * 0
   */
  highSpaceUsageProtection?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  localLogRetentionSpace?: number;
  /**
   * @remarks
   * The retention period of log backup files. Unit: days.
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
   * The backup cycle. You can specify multiple backup cycles. Separate multiple backup cycles with commas (,). Valid values:
   * 
   * *   **0**: every Monday
   * *   **1**: every Tuesday
   * *   **2**: every Wednesday
   * *   **3**: every Thursday
   * *   **4**: every Friday
   * *   **5**: every Saturday
   * *   **6**: every Sunday
   * 
   * @example
   * 1,4
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range in which a backup is performed. The time is displayed in UTC.
   * 
   * @example
   * 22:00:00-23:00:00
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

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backup policy.
   */
  backupPolicyDO?: DescribeBackupPolicyResponseBodyBackupPolicyDO;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FAF3989-79CD-4A67-8FFD-97899B64****
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
      backupPolicyDO: DescribeBackupPolicyResponseBodyBackupPolicyDO,
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

