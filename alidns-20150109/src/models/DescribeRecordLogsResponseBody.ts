// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordLogsResponseBodyRecordLogsRecordLog extends $dara.Model {
  /**
   * @remarks
   * The operation that you performed.
   */
  action?: string;
  /**
   * @remarks
   * The time when you performed the operation.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  actionTime?: string;
  /**
   * @remarks
   * The time when you performed the operation. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 134514540000
   */
  actionTimestamp?: number;
  /**
   * @remarks
   * The IP address of the operator.
   * 
   * @example
   * 182.92.253.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The operation message.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBodyRecordLogs extends $dara.Model {
  recordLog?: DescribeRecordLogsResponseBodyRecordLogsRecordLog[];
  static names(): { [key: string]: string } {
    return {
      recordLog: 'RecordLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLog: { 'type': 'array', 'itemType': DescribeRecordLogsResponseBodyRecordLogsRecordLog },
    };
  }

  validate() {
    if(Array.isArray(this.recordLog)) {
      $dara.Model.validateArray(this.recordLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBody extends $dara.Model {
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
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The operation logs.
   */
  recordLogs?: DescribeRecordLogsResponseBodyRecordLogs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordLogs: 'RecordLogs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recordLogs: DescribeRecordLogsResponseBodyRecordLogs,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.recordLogs && typeof (this.recordLogs as any).validate === 'function') {
      (this.recordLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

