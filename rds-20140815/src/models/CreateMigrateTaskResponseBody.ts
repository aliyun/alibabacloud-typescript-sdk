// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the migration task. Valid values:
   * 
   * *   **FULL**: The migration task migrates full backup files.
   * *   **UPDF**: The migration task migrates incremental or log backup files.
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
   * rm-uf6wjk******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test02
   */
  DBName?: string;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * @example
   * 564******
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
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

