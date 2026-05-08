// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord extends $dara.Model {
  DBName?: string;
  executionStartTime?: string;
  hostAddress?: string;
  outputSize?: string;
  parseRowCounts?: number;
  peakMemoryUsage?: string;
  planningTime?: number;
  processID?: string;
  queryTime?: number;
  queueTime?: number;
  returnRowCounts?: number;
  SQLText?: string;
  scanRows?: number;
  scanSize?: string;
  scanTime?: number;
  state?: string;
  userName?: string;
  wallTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      outputSize: 'OutputSize',
      parseRowCounts: 'ParseRowCounts',
      peakMemoryUsage: 'PeakMemoryUsage',
      planningTime: 'PlanningTime',
      processID: 'ProcessID',
      queryTime: 'QueryTime',
      queueTime: 'QueueTime',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      scanTime: 'ScanTime',
      state: 'State',
      userName: 'UserName',
      wallTime: 'WallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      outputSize: 'string',
      parseRowCounts: 'number',
      peakMemoryUsage: 'string',
      planningTime: 'number',
      processID: 'string',
      queryTime: 'number',
      queueTime: 'number',
      returnRowCounts: 'number',
      SQLText: 'string',
      scanRows: 'number',
      scanSize: 'string',
      scanTime: 'number',
      state: 'string',
      userName: 'string',
      wallTime: 'number',
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
  slowLogRecord?: DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord[];
  static names(): { [key: string]: string } {
    return {
      slowLogRecord: 'SlowLogRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowLogRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord },
    };
  }

  validate() {
    if(Array.isArray(this.slowLogRecord)) {
      $dara.Model.validateArray(this.slowLogRecord);
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
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1rqvm70uh2****
   */
  DBClusterId?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7559209-7EC3-41E1-8F78-156990******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

