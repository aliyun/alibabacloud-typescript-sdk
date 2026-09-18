// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskDetailResponseBodyDataCallTimes extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time.
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

export class QueryAiCallTaskDetailResponseBodyDataCallableTimes extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 10:00:00
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
   * The ID of the published agent.
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
   * TestAgent
   */
  agentName?: string;
  /**
   * @example
   * SampleValue
   */
  applicationCode?: string;
  /**
   * @example
   * SampleValue
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of callable days.
   */
  callDays?: string[];
  /**
   * @remarks
   * The expiration date of outbound call details (specific deadline).
   * 
   * @example
   * 2026-07-30 20:00:20
   */
  callExpireDate?: string;
  /**
   * @remarks
   * The expiration duration of outbound call details, in minutes.
   * 
   * @example
   * 20
   */
  callExpireMinutes?: number;
  /**
   * @remarks
   * The outbound call validity type. Valid values:
   * 
   * 0: Permanently valid.
   * 1: Valid for a period of time after import.
   * 2: Valid until a specified time.
   * 
   * @example
   * 0
   */
  callExpireType?: number;
  /**
   * @remarks
   * The allowed call time periods.
   */
  callTimes?: QueryAiCallTaskDetailResponseBodyDataCallTimes[];
  /**
   * @remarks
   * The callable time periods for the current outbound call instance.
   */
  callableTimes?: QueryAiCallTaskDetailResponseBodyDataCallableTimes[];
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 05370124****
   */
  callerNumber?: string;
  /**
   * @remarks
   * The task concurrency.
   * 
   * @example
   * 10
   */
  concurrentCount?: number;
  /**
   * @example
   * SampleValue
   */
  lineEncoding?: string;
  /**
   * @example
   * SampleValue
   */
  linePhoneNum?: string;
  /**
   * @example
   * 17
   */
  phoneType?: number;
  /**
   * @remarks
   * The actual start time of the task. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748932499000
   */
  realStartTime?: number;
  /**
   * @remarks
   * The number of retry attempts.
   * 
   * @example
   * 2
   */
  retryCount?: number;
  /**
   * @remarks
   * Indicates whether call retry is enabled. Valid values:
   * - true: Enabled.
   * - false: Not enabled.
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
   * The list of reasons that allow retry on failure.
   */
  retryReasons?: string[];
  /**
   * @remarks
   * The scheduled start time of the task. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748932499000
   */
  startTime?: number;
  /**
   * @remarks
   * The start type. Valid values:
   * 
   * - IMMEDIATE: Start immediately.
   * 
   * - SCHEDULE: Start at a scheduled time.
   * 
   * @example
   * IMMEDIATE
   */
  startType?: string;
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
   * TestTask
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      applicationCode: 'ApplicationCode',
      applicationName: 'ApplicationName',
      callDays: 'CallDays',
      callExpireDate: 'CallExpireDate',
      callExpireMinutes: 'CallExpireMinutes',
      callExpireType: 'CallExpireType',
      callTimes: 'CallTimes',
      callableTimes: 'CallableTimes',
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
      callExpireDate: 'string',
      callExpireMinutes: 'number',
      callExpireType: 'number',
      callTimes: { 'type': 'array', 'itemType': QueryAiCallTaskDetailResponseBodyDataCallTimes },
      callableTimes: { 'type': 'array', 'itemType': QueryAiCallTaskDetailResponseBodyDataCallableTimes },
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
    if(Array.isArray(this.callableTimes)) {
      $dara.Model.validateArray(this.callableTimes);
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
   * The access denial details. This field is returned only when RAM authentication fails.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryAiCallTaskDetailResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned for successful calls.
   * 
   * @example
   * Invalid parameter
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23822ECB-8CAA-5C52-9C9E-807FD82A5A7F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
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

