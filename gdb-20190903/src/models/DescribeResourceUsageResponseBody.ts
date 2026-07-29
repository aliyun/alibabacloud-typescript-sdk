// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageResponseBody extends $dara.Model {
  backupSize?: number;
  coldBackupSize?: number;
  DBInstanceId?: string;
  dataSize?: number;
  diskUsed?: number;
  engine?: string;
  logSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSize: 'BackupSize',
      coldBackupSize: 'ColdBackupSize',
      DBInstanceId: 'DBInstanceId',
      dataSize: 'DataSize',
      diskUsed: 'DiskUsed',
      engine: 'Engine',
      logSize: 'LogSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSize: 'number',
      coldBackupSize: 'number',
      DBInstanceId: 'string',
      dataSize: 'number',
      diskUsed: 'number',
      engine: 'string',
      logSize: 'number',
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

