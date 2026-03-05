// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunningLogRecordsResponseBodyItemsLogRecords extends $dara.Model {
  content?: string;
  createTime?: string;
  instanceId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      instanceId: 'string',
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

export class DescribeRunningLogRecordsResponseBodyItems extends $dara.Model {
  logRecords?: DescribeRunningLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeRunningLogRecordsResponseBodyItemsLogRecords },
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

export class DescribeRunningLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
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
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  items?: DescribeRunningLogRecordsResponseBodyItems;
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
   * 5
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The maximum number of entries returned on each page.
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
   * 093B8579-9264-43A0-ABA9-AA86****
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2018-12-03T07:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
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
      items: DescribeRunningLogRecordsResponseBodyItems,
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

