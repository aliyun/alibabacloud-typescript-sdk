// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the database on which a flashback task is performed.
   * 
   * @example
   * drds_flashback
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the download URL.
   * 
   * @example
   * http://...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Indicates the time when the download URL expires.
   * 
   * @example
   * 1569216270000
   */
  expireTime?: number;
  /**
   * @remarks
   * Indicates the point in time when the instance was created.
   * 
   * @example
   * 1568611408000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Indicates the point in time when the flashback task is performed.
   * 
   * @example
   * 1568611469000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates the ID of the primary key that corresponds to a table used in the flashback task.
   * 
   * @example
   * 238
   */
  id?: number;
  /**
   * @remarks
   * Indicates the ID of the instance.
   * 
   * @example
   * drdshbga76p6****
   */
  instId?: string;
  /**
   * @remarks
   * Indicates the progress of the reverse call.
   * 
   * @example
   * 10
   */
  recallProgress?: number;
  /**
   * @remarks
   * Indicates the type of the flashback task. Valid values:
   * 
   * *   **1**: image restoration
   * *   **2**: reverse restoration
   * 
   * @example
   * 1
   */
  recallRestoreType?: number;
  /**
   * @remarks
   * Indicates the status of the data recall task.
   * 
   * @example
   * 1
   */
  recallStatus?: number;
  /**
   * @remarks
   * Indicates the type of the reverse call. Valid values:
   * 
   * *   **0**: exact search
   * *   **1**: fuzzy search
   * 
   * @example
   * 1
   */
  recallType?: number;
  /**
   * @remarks
   * Indicates the start time of the reverse call.
   * 
   * @example
   * 1568509597000
   */
  searchEndTime?: number;
  /**
   * @remarks
   * Indicates the end time of the reverse call.
   * 
   * @example
   * 1568609597000
   */
  searchStartTime?: number;
  /**
   * @remarks
   * Indicates the number of data rows that are flashed back.
   * 
   * @example
   * 0
   */
  sqlCounter?: number;
  /**
   * @remarks
   * Indicates the primary key specified in the SQL statements.
   * 
   * @example
   * id
   */
  sqlPk?: string;
  /**
   * @remarks
   * Indicates the types of the SQL statements.
   * 
   * @example
   * Insert,Update,Delete
   */
  sqlType?: string;
  /**
   * @remarks
   * Indicates the name of the table that contains the data that are flashed back.
   * 
   * @example
   * drds_params
   */
  tableName?: string;
  /**
   * @remarks
   * Indicates the ID of the trace of the SQL query.
   * 
   * @example
   * trace
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instId: 'InstId',
      recallProgress: 'RecallProgress',
      recallRestoreType: 'RecallRestoreType',
      recallStatus: 'RecallStatus',
      recallType: 'RecallType',
      searchEndTime: 'SearchEndTime',
      searchStartTime: 'SearchStartTime',
      sqlCounter: 'SqlCounter',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      downloadUrl: 'string',
      expireTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      instId: 'string',
      recallProgress: 'number',
      recallRestoreType: 'number',
      recallStatus: 'number',
      recallType: 'number',
      searchEndTime: 'number',
      searchStartTime: 'number',
      sqlCounter: 'number',
      sqlPk: 'string',
      sqlType: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks extends $dara.Model {
  sqlFlashbackTask?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask[];
  static names(): { [key: string]: string } {
    return {
      sqlFlashbackTask: 'SqlFlashbackTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlFlashbackTask: { 'type': 'array', 'itemType': DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask },
    };
  }

  validate() {
    if(Array.isArray(this.sqlFlashbackTask)) {
      $dara.Model.validateArray(this.sqlFlashbackTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 5D64DE59-44A1-E541-E0CB-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates the information about flashback tasks.
   */
  sqlFlashbackTasks?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sqlFlashbackTasks: 'SqlFlashbackTasks',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sqlFlashbackTasks: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks,
      success: 'boolean',
    };
  }

  validate() {
    if(this.sqlFlashbackTasks && typeof (this.sqlFlashbackTasks as any).validate === 'function') {
      (this.sqlFlashbackTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

