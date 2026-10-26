// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The storage space occupied by archive backups. Unit: bytes.
   * 
   * @example
   * 0
   */
  archiveBackupSize?: number;
  /**
   * @remarks
   * The total storage space occupied by data backups, excluding archive backups. Unit: bytes.
   * 
   * > For **SQL Server** instances, this parameter indicates the total size of physical backups and snapshot backups.
   * 
   * @example
   * 94324736
   */
  backupDataSize?: number;
  /**
   * @remarks
   * The storage space occupied by snapshot backups of **SQL Server** instances. Unit: bytes. A value of 0 indicates that no data is available.
   * 
   * @example
   * 0
   */
  backupEcsSnapshotSize?: string;
  /**
   * @remarks
   * The total storage space occupied by log backups, excluding archive backups. Unit: bytes.
   * 
   * @example
   * 45145563
   */
  backupLogSize?: number;
  /**
   * @remarks
   * The size of data files in backup sets stored in OSS. Unit: bytes. A value of 0 indicates that no data is available.
   * 
   * > For **SQL Server** instances, this parameter indicates the storage space occupied by physical backups.
   * 
   * @example
   * 8821760
   */
  backupOssDataSize?: number;
  /**
   * @remarks
   * The size of log files in backup sets stored in OSS. Unit: bytes. A value of 0 indicates that no data is available.
   * 
   * @example
   * 44180999
   */
  backupOssLogSize?: number;
  /**
   * @remarks
   * The storage space occupied by backups, including data backups and log backups. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 53002759
   */
  backupSize?: number;
  /**
   * @remarks
   * The storage space occupied by cold backups. Unit: bytes. A value of -1 indicates that no data is available.
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
   * rm-uf6wjk5******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage space occupied by data files. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 1292094741
   */
  dataSize?: number;
  /**
   * @remarks
   * The used storage space, which is the sum of DataSize and LogSize. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 2337275904
   */
  diskUsed?: number;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The storage space occupied by logs. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 1045181163
   */
  logSize?: number;
  /**
   * @remarks
   * The storage space occupied by backups that you are billed for after the free quota is deducted. Unit: bytes.
   * 
   * @example
   * 0
   */
  paidBackupSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F937E173-559C-4498-8D90-38D32342B9E4
   */
  requestId?: string;
  /**
   * @remarks
   * The storage space occupied by SQL data. Unit: bytes. A value of -1 indicates that no data is available.
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

