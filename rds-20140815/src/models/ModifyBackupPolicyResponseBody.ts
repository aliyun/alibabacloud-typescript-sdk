// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup compression method. Valid values:
   * * **0**: not compressed.
   * * **1**: zlib compression.
   * * **2**: parallel zlib compression.
   * * **4**: quicklz compression with database and table restoration enabled.
   * * **8**: MySQL 8.0 quicklz compression without database and table restoration support.
   * 
   * @example
   * 4
   */
  compressType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceID?: string;
  /**
   * @remarks
   * Indicates whether instance log backup is enabled. Valid values:
   * * **1**: enabled.
   * * **0**: disabled.
   * 
   * 
   * > Instance log backup for SQL Server instances is enabled by default and cannot be disabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  enableIncrementDataBackup?: boolean;
  enablePitrProtection?: boolean;
  /**
   * @remarks
   * Indicates whether binary logs are unconditionally cleaned up when the storage usage of a **MySQL** instance exceeds 80% or the remaining storage is less than 5 GB.
   * 
   * @example
   * Disable
   */
  highSpaceUsageProtection?: string;
  incBackupInterval?: number;
  /**
   * @remarks
   * The number of hours for which instance log backups are retained on the local storage of a **MySQL** instance.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum loop space usage of binary logs for a **MySQL** instance.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The number of binary logs retained locally for a **MySQL** instance.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA147739-AEAD-4417-9089-65E9B1D8240D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compressType: 'CompressType',
      DBInstanceID: 'DBInstanceID',
      enableBackupLog: 'EnableBackupLog',
      enableIncrementDataBackup: 'EnableIncrementDataBackup',
      enablePitrProtection: 'EnablePitrProtection',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      incBackupInterval: 'IncBackupInterval',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressType: 'string',
      DBInstanceID: 'string',
      enableBackupLog: 'string',
      enableIncrementDataBackup: 'boolean',
      enablePitrProtection: 'boolean',
      highSpaceUsageProtection: 'string',
      incBackupInterval: 'number',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'string',
      logBackupLocalRetentionNumber: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

