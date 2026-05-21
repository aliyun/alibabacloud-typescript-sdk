// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTraceTasksResponseBodyList extends $dara.Model {
  /**
   * @example
   * 1077********7468
   */
  aliuid?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  clientAddr?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  clientIp?: string;
  /**
   * @example
   * 2022-12-10 15:11:47
   */
  createTime?: string;
  /**
   * @example
   * f2a18ad5
   */
  diagnoseId?: string;
  /**
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/xxxxxx
   */
  diagnoseUrl?: string;
  /**
   * @example
   * http://www.example.com
   */
  domain?: string;
  /**
   * @example
   * 1669285111
   */
  expireTime?: number;
  /**
   * @example
   * 10
   */
  remainDiagnoseTimes?: number;
  /**
   * @example
   * 0
   */
  state?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 000000xxxxxxxxxxxxxxxxxxxxxxxxxxxx475e
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  timeConsuming?: number;
  /**
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
   * @example
   * 10
   */
  count?: number;
  list?: ListTraceTasksResponseBodyList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 6
   */
  pageSize?: number;
  /**
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

