// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskPageResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 1180**************
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * 测试智能体
   */
  agentName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  applicationCode?: string;
  /**
   * @example
   * 示例值
   */
  applicationName?: string;
  /**
   * @remarks
   * The number of calls in progress.
   * 
   * @example
   * 72
   */
  callingCount?: number;
  /**
   * @remarks
   * The completion rate of the task.
   * 
   * @example
   * 70%
   */
  completeRate?: string;
  /**
   * @remarks
   * The number of concurrent tasks.
   * 
   * @example
   * 10
   */
  concurrentCount?: number;
  /**
   * @remarks
   * The time when the task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1748932499000
   */
  createTime?: number;
  /**
   * @remarks
   * The number of calls made on the current day.
   * 
   * @example
   * 22
   */
  dayCallCount?: number;
  /**
   * @remarks
   * The connection rate of the current day. This is the number of connected calls on the current day divided by the total number of calls on the current day (`DayCallCount`).
   * 
   * @example
   * 74.14%
   */
  dayConnectRate?: string;
  /**
   * @remarks
   * The number of data entries imported on the current day.
   * 
   * @example
   * 400
   */
  dayImportCount?: number;
  /**
   * @remarks
   * The total number of failed tasks.
   * 
   * @example
   * 61
   */
  failedCount?: number;
  /**
   * @remarks
   * The historical connection rate. This is the historical number of connected calls divided by the total number of calls (`TotalCallCount`).
   * 
   * @example
   * 95.89%
   */
  historyConnectRate?: string;
  /**
   * @remarks
   * The time when the task actually starts. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1748932499000
   */
  realStartTime?: number;
  /**
   * @remarks
   * The reason why the task failed to start.
   * 
   * @example
   * 智能体不在线
   */
  startFailedReason?: string;
  /**
   * @remarks
   * The time when the task is scheduled to start. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1748932499000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The total number of successful tasks.
   * 
   * @example
   * 36
   */
  succeedCount?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of calls.
   * 
   * @example
   * 58
   */
  totalCallCount?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 71
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      applicationCode: 'ApplicationCode',
      applicationName: 'ApplicationName',
      callingCount: 'CallingCount',
      completeRate: 'CompleteRate',
      concurrentCount: 'ConcurrentCount',
      createTime: 'CreateTime',
      dayCallCount: 'DayCallCount',
      dayConnectRate: 'DayConnectRate',
      dayImportCount: 'DayImportCount',
      failedCount: 'FailedCount',
      historyConnectRate: 'HistoryConnectRate',
      realStartTime: 'RealStartTime',
      startFailedReason: 'StartFailedReason',
      startTime: 'StartTime',
      status: 'Status',
      succeedCount: 'SucceedCount',
      taskId: 'TaskId',
      taskName: 'TaskName',
      totalCallCount: 'TotalCallCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      applicationCode: 'string',
      applicationName: 'string',
      callingCount: 'number',
      completeRate: 'string',
      concurrentCount: 'number',
      createTime: 'number',
      dayCallCount: 'number',
      dayConnectRate: 'string',
      dayImportCount: 'number',
      failedCount: 'number',
      historyConnectRate: 'string',
      realStartTime: 'number',
      startFailedReason: 'string',
      startTime: 'number',
      status: 'number',
      succeedCount: 'number',
      taskId: 'string',
      taskName: 'string',
      totalCallCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiCallTaskPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The tasks.
   */
  list?: QueryAiCallTaskPageResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 37
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 74
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 72
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryAiCallTaskPageResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
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

export class QueryAiCallTaskPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the tasks.
   */
  data?: QueryAiCallTaskPageResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is returned only if the call fails.
   * 
   * @example
   * 参数不合法
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B99C5955-5664-573D-97BE-A7CC1AFD8401
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryAiCallTaskPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

