// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsLifecycleStrategyResponseBodyItemsOperationTables extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether all tables in the database are selected.
   * 
   * @example
   * true
   */
  processAll?: string;
  /**
   * @remarks
   * The names of the tables.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      processAll: 'ProcessAll',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      processAll: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApsLifecycleStrategyResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * aps-******
   */
  apsJobId?: string;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2021-06-30T02:44:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2021-07-03T06:33:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The operation tables.
   */
  operationTables?: ListApsLifecycleStrategyResponseBodyItemsOperationTables[];
  /**
   * @remarks
   * The status of the lifecycle management policy. Valid values:
   * 
   * 1.  on: enables the current policy.
   * 2.  off: disables the current policy.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The number of databases that are managed during the lifecycle management.
   * 
   * @example
   * 5
   */
  strategyDatabases?: number;
  /**
   * @remarks
   * The description of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyDesc?: string;
  /**
   * @remarks
   * The name of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The number of tables that are managed during the lifecycle management.
   * 
   * @example
   * 5
   */
  strategyTables?: number;
  /**
   * @remarks
   * The type of the lifecycle management policy.
   * 
   * @example
   * KEEP_BY_TIME
   */
  strategyType?: string;
  /**
   * @remarks
   * The value of the lifecycle management policy.
   * 
   * @example
   * 10
   */
  strategyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      modifiedTime: 'ModifiedTime',
      operationTables: 'OperationTables',
      status: 'Status',
      strategyDatabases: 'StrategyDatabases',
      strategyDesc: 'StrategyDesc',
      strategyName: 'StrategyName',
      strategyTables: 'StrategyTables',
      strategyType: 'StrategyType',
      strategyValue: 'StrategyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      createdTime: 'string',
      DBClusterId: 'string',
      modifiedTime: 'string',
      operationTables: { 'type': 'array', 'itemType': ListApsLifecycleStrategyResponseBodyItemsOperationTables },
      status: 'string',
      strategyDatabases: 'number',
      strategyDesc: 'string',
      strategyName: 'string',
      strategyTables: 'number',
      strategyType: 'string',
      strategyValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTables)) {
      $dara.Model.validateArray(this.operationTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApsLifecycleStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or the error code.
   * 
   * @example
   * 200
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
   * The queried lifecycle management policies.
   */
  items?: ListApsLifecycleStrategyResponseBodyItems[];
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
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
   * ******-3EEC-******-9F06-******
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
   * 10
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
      items: { 'type': 'array', 'itemType': ListApsLifecycleStrategyResponseBodyItems },
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

