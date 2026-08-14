// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckTableDetailsResponseBodyTableDetails extends $dara.Model {
  /**
   * @remarks
   * The time when the verification was performed.
   * 
   * @example
   * 2023-01-18 11:26:59
   */
  bootTime?: string;
  /**
   * @remarks
   * The number of rows with data inconsistency.
   * 
   * @example
   * 1
   */
  diffCount?: number;
  /**
   * @remarks
   * The error code returned when the task fails. Valid values:
   * 
   * - **1**: the number of tables without primary key exceeds the limit.
   * - **2**: the number of rows with data inconsistency exceeds 300.
   * - **3**: the table to be queried does not exist.
   * - **4**: the SQL statement used to query data contains a syntax error.
   * 
   * @example
   * 1
   */
  errorCode?: number;
  /**
   * @remarks
   * The number of rows that have been verified in the table.
   * 
   * @example
   * 7
   */
  finishCount?: number;
  /**
   * @remarks
   * The auto-increment primary key that identifies a verification result record.
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
   * The status of the verification result. Valid values:
   * 
   * - **0**: completed.
   * - **2**: initializing.
   * - **3**: running.
   * - **5**: failed.
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
   * The total number of rows to be verified.
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
   * The number of tables with data inconsistency.
   * 
   * @example
   * 1
   */
  diffTableCount?: number;
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** variable in the **ErrMessage** response parameter.
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **Type**, the request parameter **Type** is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The number of tables that failed the verification.
   * 
   * @example
   * 1
   */
  failedTableCount?: number;
  /**
   * @remarks
   * The total number of rows that have been verified.
   * 
   * @example
   * 7
   */
  finishedCount?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The page number.
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
   * The details of the data consistency verification results for tables.
   */
  tableDetails?: DescribeDataCheckTableDetailsResponseBodyTableDetails[];
  /**
   * @remarks
   * The total number of tables to be verified.
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

