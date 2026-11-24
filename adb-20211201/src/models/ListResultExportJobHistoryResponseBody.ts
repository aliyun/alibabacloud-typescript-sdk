// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResultExportJobHistoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 120010511678****
   */
  aliUid?: string;
  /**
   * @remarks
   * The time when the result set export task was created. Specify the time in the <i>yyyy-mm-ddThh:mm:ssZ</i> format. The time must be in UTC.
   * 
   * @example
   * 2022-04-01T09:50:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (3.0) cluster.
   * 
   * @example
   * amv-7xv5ty5m9o4v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database account associated with the Resource Access Management (RAM) user.
   * 
   * @example
   * ram_user
   */
  databaseUser?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format. The time must be in UTC.
   * > The end time must be later than the start time.
   * 
   * @example
   * 2023-06-15T02:13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The engine used to execute the task. Only XIHE is supported.
   * 
   * @example
   * XIHE
   */
  engine?: string;
  /**
   * @remarks
   * The unique identifier of the result set export task.
   * 
   * @example
   * export_2024051319271219802100800401300****
   */
  exportJobId?: string;
  /**
   * @remarks
   * The complete address of the result set.
   */
  exportPath?: string;
  /**
   * @remarks
   * The number of exported rows. This parameter is returned only when the operation call is successful.
   * 
   * @example
   * 10000
   */
  exportRows?: string;
  /**
   * @remarks
   * The export type.
   * 
   * @example
   * OSS
   */
  exportType?: string;
  /**
   * @remarks
   * Indicates whether the task has expired. Valid values:
   * 
   * - **false**: The task has not expired.
   * - **true**: The task has expired.
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The error message of the SQL execution for the result set export. This message is returned only when the task fails.
   * 
   * @example
   * Failed to execute SQL
   */
  message?: string;
  /**
   * @remarks
   * The SQL query ID returned for diagnostics.
   * > You can call the [DescribeDiagnosisSQLInfo](https://help.aliyun.com/document_detail/612495.html) operation to diagnose the query.
   * 
   * @example
   * 202306121421111720161451770345339****
   */
  processId?: string;
  /**
   * @remarks
   * The export progress. Unit: percentage (%). Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  progress?: string;
  /**
   * @remarks
   * The resource group in which the task is executed.
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
   * The details of the SQL statement used in the result set export task.
   * 
   * @example
   * SELECT * FROM `ADB_SampleData_TPCH`.`supplier` LIMIT 20
   */
  sql?: string;
  /**
   * @remarks
   * The start time of the task. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-07-03T04:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The execution status of the export task. Valid values:
   * 1. **SUBMITTED**: The task is submitted.
   * 2. **RUNNING**: The task is running.
   * 3. **SUCCEEDED**: The task succeeded.
   * 4. **FAILED**: The task failed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The time consumed for data export, in milliseconds.
   * 
   * > The time is calculated from the start of the data export task to the end of the export.
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
   * The operation status code or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned. A status code of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list details.
   */
  items?: ListResultExportJobHistoryResponseBodyItems[];
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - **Ok**: The request is normal.                                
   * - Specific error code: An exception occurred.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The page number, which is the same as the value passed in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
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
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
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

