// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckTableDetailsResponseBodyTableDetails extends $dara.Model {
  /**
   * @remarks
   * The time when data verification was performed.
   * 
   * @example
   * 2023-01-18 11:26:59
   */
  bootTime?: string;
  /**
   * @remarks
   * The number of data rows that contain inconsistent data.
   * 
   * @example
   * 1
   */
  diffCount?: number;
  /**
   * @remarks
   * The error code returned if the data verification task failed. Valid values:
   * 
   * *   **1**: The number of tables that do not contain primary keys exceeds the limit.
   * *   **2**: The number of data rows that contain inconsistent data exceeds 300.
   * *   **3**: One or more tables to be verified do not exist.
   * *   **4**: The SQL statements used for verifying data contain a syntax error.
   * 
   * @example
   * 1
   */
  errorCode?: number;
  /**
   * @remarks
   * The number of data rows that were verified.
   * 
   * @example
   * 7
   */
  finishCount?: number;
  /**
   * @remarks
   * The auto-increment primary key that is used to identify the data in a verification result.
   * 
   * @example
   * 167401241974****
   */
  id?: number;
  /**
   * @remarks
   * The name of the source database.
   * 
   * @example
   * testdb
   */
  sourceDbName?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * student
   */
  sourceTbName?: string;
  /**
   * @remarks
   * The status of data verification results. Valid values:
   * 
   * *   **0**: The data verification task was complete.
   * *   **2**: The data verification task was being initialized.
   * *   **3**: The data verification task was in progress.
   * *   **5**: The data verification task failed.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * @example
   * testdb
   */
  targetDbName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * person
   */
  targetTbName?: string;
  /**
   * @remarks
   * The total number of data rows.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      diffCount: 'DiffCount',
      errorCode: 'ErrorCode',
      finishCount: 'FinishCount',
      id: 'Id',
      sourceDbName: 'SourceDbName',
      sourceTbName: 'SourceTbName',
      status: 'Status',
      targetDbName: 'TargetDbName',
      targetTbName: 'TargetTbName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      diffCount: 'number',
      errorCode: 'number',
      finishCount: 'number',
      id: 'number',
      sourceDbName: 'string',
      sourceTbName: 'string',
      status: 'string',
      targetDbName: 'string',
      targetTbName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of tables that contain inconsistent data.
   * 
   * @example
   * 1
   */
  diffTableCount?: number;
  /**
   * @remarks
   * The dynamic error code. This parameter will be discontinued in the future.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * > For example, if the returned value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **Type**, the specified **Type** parameter is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The total number of data rows that were failed.
   * 
   * @example
   * 1
   */
  failedTableCount?: number;
  /**
   * @remarks
   * The total number of data rows that were verified.
   * 
   * @example
   * 7
   */
  finishedCount?: number;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of data verification results.
   */
  tableDetails?: DescribeDataCheckTableDetailsResponseBodyTableDetails[];
  /**
   * @remarks
   * The total number of tables on which data verification was performed.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diffTableCount: 'DiffTableCount',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      failedTableCount: 'FailedTableCount',
      finishedCount: 'FinishedCount',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      tableDetails: 'TableDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffTableCount: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      failedTableCount: 'number',
      finishedCount: 'number',
      httpStatusCode: 'number',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      tableDetails: { 'type': 'array', 'itemType': DescribeDataCheckTableDetailsResponseBodyTableDetails },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableDetails)) {
      $dara.Model.validateArray(this.tableDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

