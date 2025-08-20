// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResultExportJobHistoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The RAM user ID.
   * 
   * @example
   * 120010511678****
   */
  aliUid?: string;
  /**
   * @remarks
   * The time when the result set export job was created. The time follows the ISO 8601 standard in the *yyyy-mm-ddThh:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-01T09:50:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-7xv5ty5m9o4v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database account that is associated with the RAM user.
   * 
   * @example
   * ram_user
   */
  databaseUser?: string;
  /**
   * @remarks
   * The end time of the result set export job. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2023-06-15T02:13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The engine that is used to execute the result set export job. Only XIHE is returned.
   * 
   * @example
   * XIHE
   */
  engine?: string;
  /**
   * @remarks
   * The unique identifier of the result set export job.
   * 
   * @example
   * export_2024051319271219802100800401300****
   */
  exportJobId?: string;
  /**
   * @remarks
   * The complete URL of the path to store the exported result set.
   */
  exportPath?: string;
  /**
   * @remarks
   * The number of exported rows. This parameter is returned only when the request was successful.
   * 
   * @example
   * 10000
   */
  exportRows?: string;
  /**
   * @remarks
   * The type of the result set export job.
   * 
   * @example
   * -
   */
  exportType?: string;
  /**
   * @remarks
   * Indicates whether the result set export job has expired. Valid values:
   * 
   * *   **false**
   * *   **true**
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The returned message. This parameter is returned only when the request failed.
   * 
   * @example
   * Failed to execute SQL
   */
  message?: string;
  /**
   * @remarks
   * The query ID that can be used for diagnostics.
   * 
   * >  You can call the [DescribeDiagnosisSQLInfo](https://help.aliyun.com/document_detail/612337.html) operation to query the execution information about a query.
   * 
   * @example
   * 202306121421111720161451770345339****
   */
  processId?: string;
  /**
   * @remarks
   * The progress of the result set export job. Unit: %. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  progress?: string;
  /**
   * @remarks
   * The name of the resource group that runs the result set export job.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * lake_db
   */
  schema?: string;
  /**
   * @remarks
   * The SQL statement that is used in the result set export job.
   * 
   * @example
   * SELECT * FROM `ADB_SampleData_TPCH`.`supplier` LIMIT 20
   */
  sql?: string;
  /**
   * @remarks
   * The start time of the result set export job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T04:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The execution status of the result set export job. Valid values:
   * 
   * 1.  **SUBMITTED**
   * 2.  **RUNNING**
   * 3.  **SUCCEEDED**
   * 4.  **FAILED**
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The amount of time consumed to export execution records. Unit: milliseconds.
   * 
   * >  The value is the duration between the time when the result set export job starts and the time when the result set export job ends.
   * 
   * @example
   * 560
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      databaseUser: 'DatabaseUser',
      endTime: 'EndTime',
      engine: 'Engine',
      exportJobId: 'ExportJobId',
      exportPath: 'ExportPath',
      exportRows: 'ExportRows',
      exportType: 'ExportType',
      isExpired: 'IsExpired',
      message: 'Message',
      processId: 'ProcessId',
      progress: 'Progress',
      resourceGroup: 'ResourceGroup',
      schema: 'Schema',
      sql: 'Sql',
      startTime: 'StartTime',
      status: 'Status',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      DBClusterId: 'string',
      databaseUser: 'string',
      endTime: 'string',
      engine: 'string',
      exportJobId: 'string',
      exportPath: 'string',
      exportRows: 'string',
      exportType: 'string',
      isExpired: 'boolean',
      message: 'string',
      processId: 'string',
      progress: 'string',
      resourceGroup: 'string',
      schema: 'string',
      sql: 'string',
      startTime: 'string',
      status: 'string',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResultExportJobHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The queried result set export jobs.
   */
  items?: ListResultExportJobHistoryResponseBodyItems[];
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, an **OK** message is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 174
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListResultExportJobHistoryResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

