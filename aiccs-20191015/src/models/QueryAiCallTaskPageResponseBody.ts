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
   * TestAgent.
   */
  agentName?: string;
  /**
   * @example
   * Sample value.
   */
  applicationCode?: string;
  /**
   * @example
   * Sample value.
   */
  applicationName?: string;
  /**
   * @example
   * Sample value.
   */
  callExpireDate?: string;
  /**
   * @example
   * 39
   */
  callExpireMinutes?: number;
  /**
   * @example
   * 72
   */
  callExpireType?: number;
  /**
   * @remarks
   * The number of ongoing calls.
   * 
   * @example
   * 72
   */
  callingCount?: number;
  /**
   * @remarks
   * The task completion rate.
   * 
   * @example
   * 70%
   */
  completeRate?: string;
  /**
   * @remarks
   * The task concurrency.
   * 
   * @example
   * 10
   */
  concurrentCount?: number;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
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
   * The daily connection rate. Daily connection rate = number of connections on the current day ÷ number of calls on the current day (DayCallCount).
   * 
   * @example
   * 74.14%
   */
  dayConnectRate?: string;
  /**
   * @remarks
   * The amount of data imported on the current day.
   * 
   * @example
   * 400
   */
  dayImportCount?: number;
  /**
   * @remarks
   * The total number of failed task executions.
   * 
   * @example
   * 61
   */
  failedCount?: number;
  /**
   * @remarks
   * The historical connection rate. Historical connection rate = historical number of connections ÷ total number of calls (TotalCallCount).
   * 
   * @example
   * 95.89%
   */
  historyConnectRate?: string;
  /**
   * @remarks
   * The actual start time of the task. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1748932499000
   */
  realStartTime?: number;
  /**
   * @remarks
   * The reason for startup failure.
   * 
   * @example
   * Agent is offline.
   */
  startFailedReason?: string;
  /**
   * @remarks
   * The scheduled start time of the task. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1748932499000
   */
  startTime?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The total number of successful task executions.
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
   * TestTask.
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of calls made by the task.
   * 
   * @example
   * 58
   */
  totalCallCount?: number;
  /**
   * @remarks
   * The total number of task items.
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
      callExpireDate: 'CallExpireDate',
      callExpireMinutes: 'CallExpireMinutes',
      callExpireType: 'CallExpireType',
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
      callExpireDate: 'string',
      callExpireMinutes: 'number',
      callExpireType: 'number',
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
   * The task data.
   */
  list?: QueryAiCallTaskPageResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
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
   * The total number of records.
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
   * The detailed reason for access denial.
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
   * The task details.
   */
  data?: QueryAiCallTaskPageResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * Invalid parameter.
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
   * Indicates whether the call was successful. Valid values:
   * - **true**: successful.
   * - **false**: failed.
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

