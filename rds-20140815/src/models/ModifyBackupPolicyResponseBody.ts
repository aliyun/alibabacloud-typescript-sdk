// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to compress backups. Valid values:
   * 
   * *   **0:** Backups are not compressed.
   * *   **1**: Backups are compressed by using the zlib tool.
   * *   **2**: Backups are compressed in parallel by using the zlib tool.
   * *   **4**: Backups are compressed by using the QuickLZ tool and can be used to restore individual databases and tables.
   * *   **8**: Backups are compressed by using the QuickLZ tool but cannot be used to restore individual databases or tables. This value is supported only for instances that run MySQL 8.0.
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
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceID?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **1**: The feature is enabled.
   * *   **0**: The feature is disabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Specifies whether to forcefully delete log backup files from the instance when the storage usage of the instance exceeds 80% or the amount of remaining storage on the instance is less than 5 GB.
   * 
   * @example
   * Disable
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The number of hours for which log backup files are retained on the instance.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum storage usage that is allowed for log backup files on the instance.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The number of binary log files on the instance.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The ID of the request.
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
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
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
      highSpaceUsageProtection: 'string',
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

