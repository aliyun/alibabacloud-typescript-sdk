// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTraceTasksResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1077********7468
   */
  aliuid?: string;
  /**
   * @remarks
   * The IP address of the local DNS server.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientAddr?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The time when the report was created. Format: yyyy-MM-dd HH:mm:ss. Time zone: UTC+8.
   * 
   * @example
   * 2022-12-10 15:11:47
   */
  createTime?: string;
  /**
   * @remarks
   * The diagnose ID.
   * 
   * @example
   * f2a18ad5
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The diagnostic URL.
   * 
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/xxxxxx
   */
  diagnoseUrl?: string;
  /**
   * @remarks
   * The domain name to diagnose.
   * 
   * @example
   * http://www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The expiration time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1669285111
   */
  expireTime?: number;
  /**
   * @remarks
   * The remaining number of available diagnostic attempts.
   * 
   * @example
   * 10
   */
  remainDiagnoseTimes?: number;
  /**
   * @remarks
   * The report generation status. Valid values:
   * 
   * - 0: Succeeded.
   * - 1: Failed.
   * - 2: Timed out.
   * - 3: Running.
   * - 4: Waiting.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The status of the diagnostic URL. Valid values:
   * 
   * - 1: active
   * - 0: expired.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 000000xxxxxxxxxxxxxxxxxxxxxxxxxxxx475e
   */
  taskId?: string;
  /**
   * @remarks
   * The time consumed to generate the report.
   * 
   * @example
   * 1
   */
  timeConsuming?: number;
  /**
   * @remarks
   * The diagnostic trace ID.
   * 
   * @example
   * 000000xxxxxxxxxxxxxxxxxxxxxx25941e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      clientAddr: 'ClientAddr',
      clientIp: 'ClientIp',
      createTime: 'CreateTime',
      diagnoseId: 'DiagnoseId',
      diagnoseUrl: 'DiagnoseUrl',
      domain: 'Domain',
      expireTime: 'ExpireTime',
      remainDiagnoseTimes: 'RemainDiagnoseTimes',
      state: 'State',
      status: 'Status',
      taskId: 'TaskId',
      timeConsuming: 'TimeConsuming',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      clientAddr: 'string',
      clientIp: 'string',
      createTime: 'string',
      diagnoseId: 'string',
      diagnoseUrl: 'string',
      domain: 'string',
      expireTime: 'number',
      remainDiagnoseTimes: 'number',
      state: 'string',
      status: 'number',
      taskId: 'string',
      timeConsuming: 'number',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of pages.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The returned list information.
   */
  list?: ListTraceTasksResponseBodyList[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: any integer from 1 to 1000.
   * 
   * @example
   * 6
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E09C5D7-E1CF-4CAA-A45E-8727F4C8FD70
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      list: { 'type': 'array', 'itemType': ListTraceTasksResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

