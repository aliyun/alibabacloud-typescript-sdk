// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsResponseBodyItemsSQL extends $dara.Model {
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
   * The database name.
   * 
   * @example
   * demo
   */
  databaseName?: string;
  /**
   * @remarks
   * The time when the command was run.
   * 
   * @example
   * 2019-03-25T03:22:08Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
  hostAddress?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 192.16.100.***
   */
  IPAddress?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * > A specific node ID is returned only if the instance uses the cluster or read/write splitting architecture.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The command that was run.
   * 
   * @example
   * CONFIG GET maxmemory
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the command.
   * 
   * @example
   * non_read_write
   */
  SQLType?: string;
  /**
   * @remarks
   * The amount of time consumed to run the command.
   * 
   * @example
   * 0
   */
  totalExecutionTimes?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      databaseName: 'DatabaseName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      IPAddress: 'IPAddress',
      nodeId: 'NodeId',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      totalExecutionTimes: 'TotalExecutionTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      databaseName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      IPAddress: 'string',
      nodeId: 'string',
      SQLText: 'string',
      SQLType: 'string',
      totalExecutionTimes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItems extends $dara.Model {
  SQL?: DescribeAuditRecordsResponseBodyItemsSQL[];
  static names(): { [key: string]: string } {
    return {
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQL: { 'type': 'array', 'itemType': DescribeAuditRecordsResponseBodyItemsSQL },
    };
  }

  validate() {
    if(Array.isArray(this.SQL)) {
      $dara.Model.validateArray(this.SQL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2019-03-25T12:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceName?: string;
  /**
   * @remarks
   * The collection of returned audit log entries.
   */
  items?: DescribeAuditRecordsResponseBodyItems;
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
   * The maximum number of entries returned per page.
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
   * 9F5EB478-824E-4AC4-8D2B-58F31A02****
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2019-03-24T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 22222
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceName: 'string',
      items: DescribeAuditRecordsResponseBodyItems,
      pageNumber: 'number',
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

