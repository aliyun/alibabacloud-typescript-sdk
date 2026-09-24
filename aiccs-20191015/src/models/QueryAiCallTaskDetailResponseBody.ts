// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskDetailResponseBodyDataCallTimes extends $dara.Model {
  /**
   * @remarks
   * The end time in the format of HH:mm:ss.
   * 
   * @example
   * 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in the format of HH:mm:ss.
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
   * The end time in the format of HH:mm:ss.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in the format of HH:mm:ss.
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
   * The code of the published agent.
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
   * Test agent
   */
  agentName?: string;
  /**
   * @remarks
   * The application code.
   * 
   * @example
   * Sample value
   */
  applicationCode?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Sample value
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of callable days.
   */
  callDays?: string[];
  /**
   * @remarks
   * The expiration date of outbound call details (specific deadline) in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-07-30 20:00:20
   */
  callExpireDate?: string;
  /**
   * @remarks
   * The expiration duration of outbound call details. Unit: minutes.
   * 
   * @example
   * 20
   */
  callExpireMinutes?: number;
  /**
   * @remarks
   * The expiration type of outbound calls. Valid values:
   * 
   * 0: permanently valid.
   * 1: valid for a period of time after import.
   * 2: valid until a specified time.
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
   * The callable time periods of the current outbound call instance.
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
   * @remarks
   * The line encoding.
   * 
   * @example
   * Sample value
   */
  lineEncoding?: string;
  /**
   * @remarks
   * The phone number of the custom line.
   * 
   * @example
   * Sample value
   */
  linePhoneNum?: string;
  /**
   * @remarks
   * The phone number type. Valid values: 0 indicates an Alibaba Cloud number. 1 indicates a custom line provided by the customer.
   * 
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
   * The list of failure reasons that allow retry.
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
   * The start mode. Valid values:
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
   * Test task
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
   * The details about the access denial. This parameter is returned only when the RAM permission verification fails.
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
   * The error message. This parameter is not returned if the call is successful.
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
   * Indicates whether the call was successful. Valid values:
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

