// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrateTaskByIdResponseBody extends $dara.Model {
  backupMode?: string;
  createTime?: string;
  DBInstanceName?: string;
  DBName?: string;
  description?: string;
  endTime?: string;
  isDBReplaced?: string;
  migrateTaskId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      createTime: 'CreateTime',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      description: 'Description',
      endTime: 'EndTime',
      isDBReplaced: 'IsDBReplaced',
      migrateTaskId: 'MigrateTaskId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      createTime: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      description: 'string',
      endTime: 'string',
      isDBReplaced: 'string',
      migrateTaskId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

