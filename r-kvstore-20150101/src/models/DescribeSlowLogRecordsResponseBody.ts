// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  account?: string;
  accountName?: string;
  command?: string;
  DBName?: string;
  dataBaseName?: string;
  elapsedTime?: number;
  executeTime?: string;
  IPAddress?: string;
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

