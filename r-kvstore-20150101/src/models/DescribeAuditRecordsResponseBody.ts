// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsResponseBodyItemsSQL extends $dara.Model {
  accountName?: string;
  databaseName?: string;
  executeTime?: string;
  hostAddress?: string;
  IPAddress?: string;
  nodeId?: string;
  SQLText?: string;
  SQLType?: string;
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

