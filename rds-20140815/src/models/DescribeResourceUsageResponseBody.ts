// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The storage consumed by archived backups. Unit: bytes.
   * 
   * @example
   * 0
   */
  archiveBackupSize?: number;
  /**
   * @remarks
   * The total storage consumed by data backups, excluding archived backups. Unit: bytes.
   * 
   * > For **SQL Server** instances, this value indicates the total size of physical backups and snapshot backups.
   * 
   * @example
   * 94324736
   */
  backupDataSize?: number;
  /**
   * @remarks
   * The storage consumed by snapshot backups for **SQL Server instances**. Unit: bytes. A value of 0 indicates no data.
   * 
   * @example
   * 0
   */
  backupEcsSnapshotSize?: string;
  /**
   * @remarks
   * The total storage consumed by log backups, excluding archived backups. Unit: bytes.
   * 
   * @example
   * 45145563
   */
  backupLogSize?: number;
  /**
   * @remarks
   * The size of data files in backup sets stored in OSS. Unit: bytes. A value of 0 indicates no data.
   * 
   * > For **SQL Server** instances, this value indicates the storage consumed by physical backups.
   * 
   * @example
   * 8821760
   */
  backupOssDataSize?: number;
  /**
   * @remarks
   * The size of log files in backup sets stored in OSS. Unit: bytes. A value of 0 indicates no data.
   * 
   * @example
   * 44180999
   */
  backupOssLogSize?: number;
  /**
   * @remarks
   * The storage consumed by backups (data backups + log backups). Unit: bytes. A value of -1 indicates no data.
   * 
   * @example
   * 53002759
   */
  backupSize?: number;
  /**
   * @remarks
   * The storage consumed by cold backups. Unit: bytes. A value of -1 indicates no data.
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
   * The storage consumed by data files. Unit: bytes. A value of -1 indicates no data.
   * 
   * @example
   * 1292094741
   */
  dataSize?: number;
  /**
   * @remarks
   * The used storage (DataSize + LogSize). Unit: bytes. A value of -1 indicates no data.
   * 
   * @example
   * 2337275904
   */
  diskUsed?: number;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The storage consumed by log files. Unit: bytes. A value of -1 indicates no data.
   * 
   * @example
   * 1045181163
   */
  logSize?: number;
  /**
   * @remarks
   * The billable storage consumed by backups after the free quota is deducted. Unit: bytes.
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
   * The storage consumed by SQL data. Unit: bytes. A value of -1 indicates no data.
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

