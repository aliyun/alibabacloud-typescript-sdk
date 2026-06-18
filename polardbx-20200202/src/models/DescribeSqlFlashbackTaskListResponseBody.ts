// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlFlashbackTaskListResponseBodyDataSqlFlashbackTasks extends $dara.Model {
  /**
   * @remarks
   * The name of the database on which the flashback task was performed.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The download URL of the result file.
   * 
   * @example
   * http://...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL. Unit: ms.
   * 
   * @example
   * 1569216270000
   */
  expireTime?: string;
  /**
   * @remarks
   * The creation time of the flashback task in the database. Unit: ms.
   * 
   * @example
   * 1568611408000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time of the flashback task in the database. Unit: ms.
   * 
   * @example
   * 1568611469000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 111
   */
  id?: string;
  /**
   * @remarks
   * The instance ID of the PolarDB-X instance.
   * 
   * @example
   * pxc-********
   */
  instId?: string;
  /**
   * @remarks
   * The execution progress of the flashback task. Value range: 1 to 100.
   * 
   * @example
   * 10
   */
  recallProgress?: string;
  /**
   * @remarks
   * The SQL flashback restoration type. Valid values: 
   * 
   * - **1**: Image-based restoration.
   * - **2**: Reverse restoration.
   * 
   * @example
   * 0
   */
  recallRestoreType?: string;
  /**
   * @remarks
   * The status of the data recall task. Valid values:
   * 
   * - **1**: In progress.
   * - **2**: Completed.
   * 
   * @example
   * 1
   */
  recallStatus?: string;
  /**
   * @remarks
   * The recall type. Valid values:
   * 
   * - **0**: exact match.
   * - **1**: fuzzy match.
   * 
   * @example
   * 0
   */
  recallType?: string;
  /**
   * @remarks
   * The end time specified when the SQL flashback task was submitted. Unit: ms.
   * 
   * @example
   * 1568609597000
   */
  searchEndTime?: string;
  /**
   * @remarks
   * The start time specified when the SQL flashback task was submitted. Unit: ms.
   * 
   * @example
   * 1568609597000
   */
  searchStartTime?: string;
  /**
   * @remarks
   * The number of recovered data rows.
   * 
   * @example
   * 100
   */
  sqlCounter?: string;
  /**
   * @remarks
   * The primary key value involved in the SQL statement.
   * 
   * @example
   * id
   */
  sqlPk?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: INSERT, UPDATE, and DELETE. Multiple types are separated by commas (,).
   * 
   * @example
   * INSERT,UPDATE
   */
  sqlType?: string;
  /**
   * @remarks
   * The name of the table to which the data belongs.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The trace_id of the SQL statement.
   * 
   * @example
   * 13ed05705f801000
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
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      instId: 'string',
      recallProgress: 'string',
      recallRestoreType: 'string',
      recallStatus: 'string',
      recallType: 'string',
      searchEndTime: 'string',
      searchStartTime: 'string',
      sqlCounter: 'string',
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

export class DescribeSqlFlashbackTaskListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The flashback task objects.
   */
  sqlFlashbackTasks?: DescribeSqlFlashbackTaskListResponseBodyDataSqlFlashbackTasks[];
  static names(): { [key: string]: string } {
    return {
      sqlFlashbackTasks: 'SqlFlashbackTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlFlashbackTasks: { 'type': 'array', 'itemType': DescribeSqlFlashbackTaskListResponseBodyDataSqlFlashbackTasks },
    };
  }

  validate() {
    if(Array.isArray(this.sqlFlashbackTasks)) {
      $dara.Model.validateArray(this.sqlFlashbackTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbackTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned by the request.
   */
  data?: DescribeSqlFlashbackTaskListResponseBodyData;
  /**
   * @remarks
   * The description of the request result.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSqlFlashbackTaskListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

