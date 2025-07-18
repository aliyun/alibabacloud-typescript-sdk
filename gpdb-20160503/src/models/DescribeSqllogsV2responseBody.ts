// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogsV2ResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The database account that executes the SQL statement.
   * 
   * @example
   * testadmin
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbpgadmin
   */
  DBName?: string;
  /**
   * @remarks
   * The role of the database.
   * 
   * @example
   * master
   */
  DBRole?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement.
   * 
   * @example
   * 2
   */
  executeCost?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  executeState?: string;
  /**
   * @remarks
   * The type of the query language.
   * 
   * @example
   * DQL
   */
  operationClass?: string;
  /**
   * @remarks
   * The time when the SQL statement was executed.
   * 
   * @example
   * 2021-03-15T17:02:32Z
   */
  operationExecuteTime?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  operationType?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 2548026401648157601713924318883
   */
  queryId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select 1
   */
  SQLText?: string;
  /**
   * @remarks
   * The number of entries scanned.
   * 
   * @example
   * 1
   */
  scanRowCounts?: number;
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * efc33bd7-f1dc-4b24-b4fb-ab0d5329b7bb
   */
  sessionId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 100.**.**.90
   */
  sourceIP?: string;
  /**
   * @remarks
   * The number of the source port.
   * 
   * @example
   * 50514
   */
  sourcePort?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      DBRole: 'DBRole',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      executeCost: 'ExecuteCost',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationExecuteTime: 'OperationExecuteTime',
      operationType: 'OperationType',
      queryId: 'QueryId',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      scanRowCounts: 'ScanRowCounts',
      sessionId: 'SessionId',
      sourceIP: 'SourceIP',
      sourcePort: 'SourcePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      DBRole: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      executeCost: 'number',
      executeState: 'string',
      operationClass: 'string',
      operationExecuteTime: 'string',
      operationType: 'string',
      queryId: 'string',
      returnRowCounts: 'number',
      SQLText: 'string',
      scanRowCounts: 'number',
      sessionId: 'string',
      sourceIP: 'string',
      sourcePort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * account name invalid
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The queried SQL execution logs.
   */
  items?: DescribeSQLLogsV2ResponseBodyItems[];
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
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7941C94-B92F-46A0-BD3E-2D**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogsV2ResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
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

