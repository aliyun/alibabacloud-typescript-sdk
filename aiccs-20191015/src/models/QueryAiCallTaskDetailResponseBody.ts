// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskDetailResponseBodyDataCallTimes extends $dara.Model {
  /**
   * @remarks
   * The end of the time window.
   * 
   * @example
   * 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time window.
   * 
   * @example
   * 12:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiCallTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployed agent.
   * 
   * @example
   * 1180**************
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * 测试智能体
   */
  agentName?: string;
  /**
   * @example
   * 示例值
   */
  applicationCode?: string;
  /**
   * @example
   * 示例值
   */
  applicationName?: string;
  /**
   * @remarks
   * The days of the week on which calls are permitted.
   */
  callDays?: string[];
  /**
   * @remarks
   * The allowed call time windows.
   */
  callTimes?: QueryAiCallTaskDetailResponseBodyDataCallTimes[];
  /**
   * @remarks
   * The caller ID.
   * 
   * @example
   * 05370124****
   */
  callerNumber?: string;
  /**
   * @remarks
   * The number of concurrent tasks.
   * 
   * @example
   * 10
   */
  concurrentCount?: number;
  /**
   * @example
   * 示例值
   */
  lineEncoding?: string;
  /**
   * @example
   * 示例值
   */
  linePhoneNum?: string;
  /**
   * @example
   * 17
   */
  phoneType?: number;
  /**
   * @remarks
   * The actual start time of the task. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1748932499000
   */
  realStartTime?: number;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 2
   */
  retryCount?: number;
  /**
   * @remarks
   * Indicates whether call retry is enabled. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * @example
   * true
   */
  retryEnable?: boolean;
  /**
   * @remarks
   * The retry interval. Unit: minutes.
   * 
   * @example
   * 1
   */
  retryInterval?: number;
  /**
   * @remarks
   * The reasons for which a failed call can be retried.
   */
  retryReasons?: string[];
  /**
   * @remarks
   * The scheduled start time of the task. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1748932499000
   */
  startTime?: number;
  /**
   * @remarks
   * The start mode. Valid values:
   * 
   * - `IMMEDIATE`: The task starts immediately.
   * 
   * - `SCHEDULE`: The task starts at a scheduled time.
   * 
   * @example
   * IMMEDIATE
   */
  startType?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      applicationCode: 'ApplicationCode',
      applicationName: 'ApplicationName',
      callDays: 'CallDays',
      callTimes: 'CallTimes',
      callerNumber: 'CallerNumber',
      concurrentCount: 'ConcurrentCount',
      lineEncoding: 'LineEncoding',
      linePhoneNum: 'LinePhoneNum',
      phoneType: 'PhoneType',
      realStartTime: 'RealStartTime',
      retryCount: 'RetryCount',
      retryEnable: 'RetryEnable',
      retryInterval: 'RetryInterval',
      retryReasons: 'RetryReasons',
      startTime: 'StartTime',
      startType: 'StartType',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      applicationCode: 'string',
      applicationName: 'string',
      callDays: { 'type': 'array', 'itemType': 'string' },
      callTimes: { 'type': 'array', 'itemType': QueryAiCallTaskDetailResponseBodyDataCallTimes },
      callerNumber: 'string',
      concurrentCount: 'number',
      lineEncoding: 'string',
      linePhoneNum: 'string',
      phoneType: 'number',
      realStartTime: 'number',
      retryCount: 'number',
      retryEnable: 'boolean',
      retryInterval: 'number',
      retryReasons: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      startType: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callDays)) {
      $dara.Model.validateArray(this.callDays);
    }
    if(Array.isArray(this.callTimes)) {
      $dara.Model.validateArray(this.callTimes);
    }
    if(Array.isArray(this.retryReasons)) {
      $dara.Model.validateArray(this.retryReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiCallTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details. This parameter is returned only if RAM validation fails.
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
   * The data returned.
   */
  data?: QueryAiCallTaskDetailResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is returned only if the call fails.
   * 
   * @example
   * 参数无效
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 23822ECB-8CAA-5C52-9C9E-807FD82A5A7F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
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
      data: QueryAiCallTaskDetailResponseBodyData,
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

