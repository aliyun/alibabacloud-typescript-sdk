// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrateTaskByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the migration task. Valid values:
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
   * 2020-05-30T12:11:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mytestdb
   */
  DBName?: string;
  /**
   * @remarks
   * The description of the migration task.
   * 
   * @example
   * Success to DBCC checkdb asynchronously
   */
  description?: string;
  /**
   * @remarks
   * The time when the migration task was completed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-30T15:15:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the imported data overwrites the existing data. Valid values:
   * 
   * *   **False**: The imported data does not overwrite the existing data.
   * *   **True**: The imported data overwrites the existing data.
   * 
   * @example
   * False
   */
  isDBReplaced?: string;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * @example
   * 235943
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6ED3635A-01F9-47BD-B9C8-CB3FD70A336E
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the migration task. Valid values:
   * 
   * *   **NoStart**: The task has not started.
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

