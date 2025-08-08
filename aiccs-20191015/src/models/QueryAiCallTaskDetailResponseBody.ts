// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskDetailResponseBodyDataCallTimes extends $dara.Model {
  /**
   * @example
   * 09:00:00
   */
  endTime?: string;
  /**
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
   * @example
   * 示例值示例值
   */
  agentId?: string;
  /**
   * @example
   * 示例值示例值
   */
  agentName?: string;
  callDays?: string[];
  callTimes?: QueryAiCallTaskDetailResponseBodyDataCallTimes[];
  /**
   * @example
   * 05370124****
   */
  callerNumber?: string;
  /**
   * @example
   * 10
   */
  concurrentCount?: number;
  /**
   * @example
   * 1748932499000
   */
  realStartTime?: number;
  /**
   * @example
   * 2
   */
  retryCount?: number;
  /**
   * @example
   * true
   */
  retryEnable?: boolean;
  /**
   * @example
   * 1
   */
  retryInterval?: number;
  retryReasons?: string[];
  /**
   * @example
   * 1748932499000
   */
  startTime?: number;
  /**
   * @example
   * IMMEDIATE
   */
  startType?: string;
  /**
   * @example
   * 11121232222****
   */
  taskId?: string;
  /**
   * @example
   * 示例值示例值
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      callDays: 'CallDays',
      callTimes: 'CallTimes',
      callerNumber: 'CallerNumber',
      concurrentCount: 'ConcurrentCount',
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
      callDays: { 'type': 'array', 'itemType': 'string' },
      callTimes: { 'type': 'array', 'itemType': QueryAiCallTaskDetailResponseBodyDataCallTimes },
      callerNumber: 'string',
      concurrentCount: 'number',
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
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryAiCallTaskDetailResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 23822ECB-8CAA-5C52-9C9E-807FD82A5A7F
   */
  requestId?: string;
  /**
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

