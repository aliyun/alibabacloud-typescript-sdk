// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The storage that is occupied by archived backup files on the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  archiveBackupSize?: number;
  /**
   * @remarks
   * The storage that is occupied by data backup files, excluding archived backup files, on the instance. Unit: bytes.
   * 
   * @example
   * 94324736
   */
  backupDataSize?: number;
  /**
   * @remarks
   * The storage capacity that is used to store the snapshot backup files of the **RDS for SQL Server** instance. Unit: bytes. The value 0 indicates that no snapshot backup files are stored for the instance.
   * 
   * @example
   * 0
   */
  backupEcsSnapshotSize?: string;
  /**
   * @remarks
   * The storage that is occupied by log backup files, excluding archived backup files, on the instance. Unit: bytes.
   * 
   * @example
   * 45145563
   */
  backupLogSize?: number;
  /**
   * @remarks
   * The size of data backup files that are stored in Object Storage Service (OSS) buckets. Unit: bytes. The value 0 indicates no data backup files are stored in OSS buckets.
   * 
   * @example
   * 8821760
   */
  backupOssDataSize?: number;
  /**
   * @remarks
   * The size of log backup files that are stored in OSS buckets. Unit: bytes. The value 0 indicates no log backup files are stored in OSS buckets.
   * 
   * @example
   * 44180999
   */
  backupOssLogSize?: number;
  /**
   * @remarks
   * The storage that is used to store backup files. Unit: bytes. The value -1 indicates that no backup files are stored.
   * 
   * @example
   * 53002759
   */
  backupSize?: number;
  /**
   * @remarks
   * The storage that is used to store cold backup files. Unit: bytes. The value -1 indicates that no cold backup files are stored.
   * 
   * @example
   * 2337275904
   */
  coldBackupSize?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage that is used to store data files. Unit: bytes. The value -1 indicates that no data files are stored.
   * 
   * @example
   * 1292094741
   */
  dataSize?: number;
  /**
   * @remarks
   * The total storage that is occupied by data files and log files on the instance. Unit: bytes. The value -1 indicates that no data files or log files are stored on the instance.
   * 
   * @example
   * 2337275904
   */
  diskUsed?: number;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The storage that is used to store log files. Unit: bytes. The value -1 indicates that no log files are stored.
   * 
   * @example
   * 1045181163
   */
  logSize?: number;
  /**
   * @remarks
   * The backup storage for which you must pay. The system provides a free quota on backup storage. You must pay for the backup storage that exceeds the free quota. Unit: bytes.
   * 
   * @example
   * 0
   */
  paidBackupSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F937E173-559C-4498-8D90-38D32342B9E4
   */
  requestId?: string;
  /**
   * @remarks
   * The storage that is occupied to execute SQL statements on the instance. Unit: bytes. The value -1 indicates that no SQL statements are executed.
   * 
   * @example
   * 315052751
   */
  SQLSize?: number;
  static names(): { [key: string]: string } {
    return {
      archiveBackupSize: 'ArchiveBackupSize',
      backupDataSize: 'BackupDataSize',
      backupEcsSnapshotSize: 'BackupEcsSnapshotSize',
      backupLogSize: 'BackupLogSize',
      backupOssDataSize: 'BackupOssDataSize',
      backupOssLogSize: 'BackupOssLogSize',
      backupSize: 'BackupSize',
      coldBackupSize: 'ColdBackupSize',
      DBInstanceId: 'DBInstanceId',
      dataSize: 'DataSize',
      diskUsed: 'DiskUsed',
      engine: 'Engine',
      logSize: 'LogSize',
      paidBackupSize: 'PaidBackupSize',
      requestId: 'RequestId',
      SQLSize: 'SQLSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveBackupSize: 'number',
      backupDataSize: 'number',
      backupEcsSnapshotSize: 'string',
      backupLogSize: 'number',
      backupOssDataSize: 'number',
      backupOssLogSize: 'number',
      backupSize: 'number',
      coldBackupSize: 'number',
      DBInstanceId: 'string',
      dataSize: 'number',
      diskUsed: 'number',
      engine: 'string',
      logSize: 'number',
      paidBackupSize: 'number',
      requestId: 'string',
      SQLSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

