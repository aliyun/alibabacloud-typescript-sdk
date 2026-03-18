// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordLogsResponseBodyRecordLogsRecordLog extends $dara.Model {
  action?: string;
  actionTime?: string;
  actionTimestamp?: number;
  clientIp?: string;
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

