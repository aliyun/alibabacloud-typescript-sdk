// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CacheLoadTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The data catalog ID.
   * 
   * @example
   * clg-paimon-xxxx
   */
  catalogId?: string;
  /**
   * @remarks
   * The number of files with completed cache loading.
   * 
   * @example
   * 100
   */
  completedFiles?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database_name
   */
  database?: string;
  /**
   * @remarks
   * The number of enumerated files.
   * 
   * @example
   * 100
   */
  enumeratedFiles?: number;
  /**
   * @remarks
   * The file enumeration completion status.
   * 
   * @example
   * true
   */
  enumerationDone?: boolean;
  /**
   * @remarks
   * The additional parameters.
   */
  extraOptions?: { [key: string]: string };
  /**
   * @remarks
   * The number of files with failed cache loading.
   * 
   * @example
   * 0
   */
  failedFiles?: number;
  /**
   * @remarks
   * The most recent error message, which is empty when the status is normal.
   * 
   * @example
   * null
   */
  lastError?: string;
  /**
   * @remarks
   * The number of bytes loaded into the cache.
   * 
   * @example
   * 1024
   */
  loadedBytes?: number;
  /**
   * @remarks
   * The storage location.
   * 
   * @example
   * oss://clg-xxxx/db-xxxx/tbl-xxxx
   */
  path?: string;
  /**
   * @remarks
   * The start time of the task execution, in milliseconds.
   * 
   * @example
   * 1790576716926
   */
  startedAt?: number;
  /**
   * @remarks
   * The task execution status.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table_name
   */
  table?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * lc-81afc0f7812ec737-1790576716926
   */
  taskId?: string;
  /**
   * @remarks
   * The task update time, in milliseconds.
   * 
   * @example
   * 1790576746926
   */
  taskUpdatedAt?: number;
  /**
   * @remarks
   * The total number of bytes.
   * 
   * @example
   * 1024
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 100
   */
  totalFiles?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      completedFiles: 'completedFiles',
      database: 'database',
      enumeratedFiles: 'enumeratedFiles',
      enumerationDone: 'enumerationDone',
      extraOptions: 'extraOptions',
      failedFiles: 'failedFiles',
      lastError: 'lastError',
      loadedBytes: 'loadedBytes',
      path: 'path',
      startedAt: 'startedAt',
      status: 'status',
      table: 'table',
      taskId: 'taskId',
      taskUpdatedAt: 'taskUpdatedAt',
      totalBytes: 'totalBytes',
      totalFiles: 'totalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      completedFiles: 'number',
      database: 'string',
      enumeratedFiles: 'number',
      enumerationDone: 'boolean',
      extraOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedFiles: 'number',
      lastError: 'string',
      loadedBytes: 'number',
      path: 'string',
      startedAt: 'number',
      status: 'string',
      table: 'string',
      taskId: 'string',
      taskUpdatedAt: 'number',
      totalBytes: 'number',
      totalFiles: 'number',
    };
  }

  validate() {
    if(this.extraOptions) {
      $dara.Model.validateMap(this.extraOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

