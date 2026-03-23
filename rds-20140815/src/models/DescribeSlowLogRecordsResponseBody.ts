// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $dara.Model {
  applicationName?: string;
  clientHostName?: string;
  cpuTime?: number;
  DBName?: string;
  executionStartTime?: string;
  hostAddress?: string;
  lastRowsAffectedCount?: number;
  lockTimeMS?: number;
  lockTimes?: number;
  logicalIORead?: number;
  parseRowCounts?: number;
  physicalIORead?: number;
  queryTimeMS?: number;
  queryTimes?: number;
  returnRowCounts?: number;
  rowsAffectedCount?: number;
  SQLHash?: string;
  SQLText?: string;
  userName?: string;
  writeIOCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clientHostName: 'ClientHostName',
      cpuTime: 'CpuTime',
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lastRowsAffectedCount: 'LastRowsAffectedCount',
      lockTimeMS: 'LockTimeMS',
      lockTimes: 'LockTimes',
      logicalIORead: 'LogicalIORead',
      parseRowCounts: 'ParseRowCounts',
      physicalIORead: 'PhysicalIORead',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      rowsAffectedCount: 'RowsAffectedCount',
      SQLHash: 'SQLHash',
      SQLText: 'SQLText',
      userName: 'UserName',
      writeIOCount: 'WriteIOCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clientHostName: 'string',
      cpuTime: 'number',
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lastRowsAffectedCount: 'number',
      lockTimeMS: 'number',
      lockTimes: 'number',
      logicalIORead: 'number',
      parseRowCounts: 'number',
      physicalIORead: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
      rowsAffectedCount: 'number',
      SQLHash: 'string',
      SQLText: 'string',
      userName: 'string',
      writeIOCount: 'number',
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
  SQLSlowRecord?: DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowRecord: 'SQLSlowRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLSlowRecord)) {
      $dara.Model.validateArray(this.SQLSlowRecord);
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
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
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
   * The number of SQL log reports on the current page.
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
   * 4DBB1BB0-E5D8-4D41-B1C9-142364DB****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engine: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
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

