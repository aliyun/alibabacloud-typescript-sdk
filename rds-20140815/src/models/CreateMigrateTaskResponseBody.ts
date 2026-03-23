// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskResponseBody extends $dara.Model {
  backupMode?: string;
  DBInstanceId?: string;
  DBName?: string;
  migrateTaskId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      migrateTaskId: 'MigrateTaskId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      migrateTaskId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

