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

export class DescribeMigrateTasksResponseBodyItems extends $dara.Model {
  migrateTask?: DescribeMigrateTasksResponseBodyItemsMigrateTask[];
  static names(): { [key: string]: string } {
    return {
      migrateTask: 'MigrateTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateTask: { 'type': 'array', 'itemType': DescribeMigrateTasksResponseBodyItemsMigrateTask },
    };
  }

  validate() {
    if(Array.isArray(this.migrateTask)) {
      $dara.Model.validateArray(this.migrateTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details of the migration task.
   */
  items?: DescribeMigrateTasksResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E356DDF-6B83-45DB-99D5-4B1E8A0D286B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: DescribeMigrateTasksResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

