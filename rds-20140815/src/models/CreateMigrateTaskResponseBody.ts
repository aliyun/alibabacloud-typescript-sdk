// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud migration task. Valid values:
   * * **FULL**: performs a restore operation by using a full backup file.
   * * **UPDF**: restores incremental data by using an incremental backup file or log file.
   * 
   * @example
   * FULL
   */
  backupMode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test02
   */
  DBName?: string;
  /**
   * @remarks
   * The migration task ID.
   * 
   * @example
   * 564563****
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 866F5EB8-4650-4061-87F0-379F6F968BCE
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 545****
   */
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

