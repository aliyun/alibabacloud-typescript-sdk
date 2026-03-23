// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageResponseBody extends $dara.Model {
  archiveBackupSize?: number;
  backupDataSize?: number;
  backupEcsSnapshotSize?: string;
  backupLogSize?: number;
  backupOssDataSize?: number;
  backupOssLogSize?: number;
  backupSize?: number;
  coldBackupSize?: number;
  DBInstanceId?: string;
  dataSize?: number;
  diskUsed?: number;
  engine?: string;
  logSize?: number;
  paidBackupSize?: number;
  requestId?: string;
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

