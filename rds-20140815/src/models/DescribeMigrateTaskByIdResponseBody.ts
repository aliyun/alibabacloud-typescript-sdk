// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrateTaskByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the OSS backup migration task. Valid values:
   * 
   * - **FULL**: restores data by using a full log file.
   * - **UPDF**: restores incremental data by using differential or log log files.
   * 
   * @example
   * FULL
   */
  backupMode?: string;
  /**
   * @remarks
   * The time when the OSS backup migration task was created. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
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
   * rm-uf6wjk5****
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
   * The description of the OSS backup migration task.
   * 
   * @example
   * Success to DBCC checkdb asynchronously
   */
  description?: string;
  /**
   * @remarks
   * The time when the OSS backup migration task ended. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-30T15:15:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the import overwrites the existing database. Valid values: 
   * 
   * - **False**: no
   * - **True**: yes
   * 
   * @example
   * False
   */
  isDBReplaced?: string;
  /**
   * @remarks
   * The ID of the OSS backup migration task.
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
   * The status of the OSS backup migration task. Valid values:
   * 
   * - **NoStart**: The task is not started.
   * - **Running**: The task is running.
   * - **Success**: The task is successful.
   * - **Failed**: The task failed.
   * - **Waiting**: The task is waiting for the import of incremental backup files.
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

