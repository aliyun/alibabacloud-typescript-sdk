// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 0
   */
  account?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * demo
   */
  accountName?: string;
  /**
   * @remarks
   * The slow query statement.
   * 
   * @example
   * KEYS *
   */
  command?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * -1
   */
  DBName?: string;
  /**
   * @remarks
   * The database name. This parameter serves the same purpose as the **DBName** parameter. We recommend that you use the **DBName** parameter.
   * 
   * @example
   * -1
   */
  dataBaseName?: string;
  /**
   * @remarks
   * The amount of time consumed to execute the slow query statement. Unit: microseconds.
   * 
   * @example
   * 248
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The start time when the slow query statement was executed. The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-03-20T09:18:41Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.16.88.***
   */
  IPAddress?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountName: 'AccountName',
      command: 'Command',
      DBName: 'DBName',
      dataBaseName: 'DataBaseName',
      elapsedTime: 'ElapsedTime',
      executeTime: 'ExecuteTime',
      IPAddress: 'IPAddress',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountName: 'string',
      command: 'string',
      DBName: 'string',
      dataBaseName: 'string',
      elapsedTime: 'number',
      executeTime: 'string',
      IPAddress: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  logRecords?: DescribeSlowLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsLogRecords },
    };
  }

  validate() {
    if(Array.isArray(this.logRecords)) {
      $dara.Model.validateArray(this.logRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine that the instance runs.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp10n********
   */
  instanceId?: string;
  /**
   * @remarks
   * The slow query log entries.
   */
  items?: DescribeSlowLogRecordsResponseBodyItems;
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
   * The number of log entries returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The maximum number of log entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 686BB8A6-BBA5-47E5-8A75-D2ADE433****
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2019-03-10T13:11Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of returned log entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
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

