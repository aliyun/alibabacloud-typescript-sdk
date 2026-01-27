// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDataListResponseBodyDataContentPolarSnapshot extends $dara.Model {
  /**
   * @remarks
   * The dump backup ID.
   * 
   * @example
   * abc****
   */
  dumpId?: number;
  /**
   * @remarks
   * The size of the dump backup. Unit: byte.
   * 
   * @example
   * 25669140589
   */
  dumpSize?: number;
  /**
   * @remarks
   * The time when the backup set expires. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-19T05:00:49Z
   */
  expectExpireTime?: string;
  /**
   * @remarks
   * Indicates whether the backup set expires. Valid values:
   * 
   * *   NEVER: The backup set does not expire.
   * *   EXPIRED: The backup set expired.
   * *   DELAY: The backup set expires after a specific period of time.
   * 
   * @example
   * DELAY
   */
  expectExpireType?: string;
  static names(): { [key: string]: string } {
    return {
      dumpId: 'DumpId',
      dumpSize: 'DumpSize',
      expectExpireTime: 'ExpectExpireTime',
      expectExpireType: 'expectExpireType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dumpId: 'number',
      dumpSize: 'number',
      expectExpireTime: 'string',
      expectExpireType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDataListResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to download the backup set over the Internet.
   * 
   * >  This parameter is returned only when the value of BackupMethod is **Physical** or **Logical**.
   * 
   * @example
   * http://oss.com/****
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2024-04-17T17:00:32Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 213088****
   */
  backupId?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over the internal network.
   * 
   * >  This parameter is returned only when the value of BackupMethod is **Physical** or **Logical**.
   * 
   * @example
   * http://oss.com/****
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The storage path of backup files.
   * 
   * @example
   * logic
   */
  backupLocation?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   **Physical**
   * *   **Logical**
   * *   **Snapshot**
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The name of the backup set.
   * 
   * @example
   * logic_backup
   */
  backupName?: string;
  /**
   * @remarks
   * The backup scale. Valid values:
   * 
   * *   **DBInstance**
   * *   **DBTable**
   * 
   * @example
   * DBInstance
   */
  backupScale?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: byte.
   * 
   * @example
   * 25669140480
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2024-04-17T17:00:16Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * *   **OK**: The backup succeeded.
   * *   **ERROR**: The backup failed.
   * 
   * @example
   * OK
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The checksum value.
   * 
   * @example
   * 84a4c16431f969712e6895992719****
   */
  checksum?: string;
  /**
   * @remarks
   * The snapshot checkpoint time. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1713373221
   */
  consistentTime?: number;
  /**
   * @remarks
   * The information about the encryption.
   * 
   * @example
   * psk2
   */
  encryption?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * polardb_mysql
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the backup set expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-19T05:00:49Z
   */
  expectExpireTime?: string;
  /**
   * @remarks
   * Indicates whether the backup set expires. Valid values:
   * 
   * *   NEVER: The backup set does not expire.
   * *   EXPIRED: The backup set expired.
   * *   DELAY: The backup set expires after a specific period of time.
   * 
   * @example
   * DELAY
   */
  expectExpireType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-2ze3nrr64c5******
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **1**: The backup set is available.
   * *   **0**: The backup set is unavailable.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The information about the PolarDB level-2 dump.
   * 
   * >  This parameter is returned only if the level-2 dump feature is enabled for the PolarDB for MySQL cluster and the level-1 backup is dumped.
   */
  polarSnapshot?: DescribeBackupDataListResponseBodyDataContentPolarSnapshot;
  /**
   * @remarks
   * Indicates whether the backup set can be deleted. Valid values:
   * 
   * *   **0**: The backup set can be deleted.
   * *   **1**: The backup set cannot be deleted.
   * 
   * @example
   * 0
   */
  supportDeletion?: number;
  static names(): { [key: string]: string } {
    return {
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupLocation: 'BackupLocation',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupName: 'BackupName',
      backupScale: 'BackupScale',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      checksum: 'Checksum',
      consistentTime: 'ConsistentTime',
      encryption: 'Encryption',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expectExpireTime: 'ExpectExpireTime',
      expectExpireType: 'ExpectExpireType',
      instanceName: 'InstanceName',
      isAvail: 'IsAvail',
      polarSnapshot: 'PolarSnapshot',
      supportDeletion: 'SupportDeletion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupLocation: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupName: 'string',
      backupScale: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      checksum: 'string',
      consistentTime: 'number',
      encryption: 'string',
      engine: 'string',
      engineVersion: 'string',
      expectExpireTime: 'string',
      expectExpireType: 'string',
      instanceName: 'string',
      isAvail: 'number',
      polarSnapshot: DescribeBackupDataListResponseBodyDataContentPolarSnapshot,
      supportDeletion: 'number',
    };
  }

  validate() {
    if(this.polarSnapshot && typeof (this.polarSnapshot as any).validate === 'function') {
      (this.polarSnapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDataListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the task.
   */
  content?: DescribeBackupDataListResponseBodyDataContent[];
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * dbtest
   */
  extra?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of backup sets.
   * 
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      extra: 'Extra',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeBackupDataListResponseBodyDataContent },
      extra: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDataListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeBackupDataListResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Request.Forbidden
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95A5FFD0-7F46-5A7D-9DFE-6A376B4E2A28
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeBackupDataListResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

