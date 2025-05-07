// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrateTasksResponseBodyItemsMigrateTask extends $dara.Model {
  /**
   * @remarks
   * The migration task type. Valid values:
   * 
   * *   **FULL**: The migration task migrates full backup files that can be used to restore the full data of the instance.
   * *   **UPDF**: The migration task migrates incremental or log backup files that can be used to restore the incremental data of the instance.
   * 
   * @example
   * FULL
   */
  backupMode?: string;
  /**
   * @remarks
   * The time when the migration task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-05-30T12:11:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The description of the migration task.
   * 
   * @example
   * Api description
   */
  description?: string;
  /**
   * @remarks
   * The time when the migration task was completed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-05-30T13:11:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the imported data overwrites the existing data.
   * 
   * @example
   * True
   */
  isDBReplaced?: string;
  /**
   * @remarks
   * The migration task ID.
   * 
   * @example
   * 564522545
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The status of the migration task. Valid values:
   * 
   * *   **NoStart**: The task is not started.
   * *   **Running**:The task is in progress.
   * *   **Success**: The task is successful.
   * *   **Failed**: The task failed.
   * *   **Waiting**: The task is waiting for an incremental backup file to be imported.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      createTime: 'CreateTime',
      DBName: 'DBName',
      description: 'Description',
      endTime: 'EndTime',
      isDBReplaced: 'IsDBReplaced',
      migrateTaskId: 'MigrateTaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      createTime: 'string',
      DBName: 'string',
      description: 'string',
      endTime: 'string',
      isDBReplaced: 'string',
      migrateTaskId: 'string',
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

