// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList extends $dara.Model {
  /**
   * @remarks
   * Break code.
   * 
   * @example
   * 默认
   */
  breakCode?: string;
  /**
   * @remarks
   * Break count.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of distributions of break code counts.
   */
  breakCodeDetailList?: GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList[];
  /**
   * @remarks
   * Number of agents on break.
   * 
   * @example
   * 0
   */
  breakingAgents?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Number of calls interacting within IVR.
   * 
   * @example
   * 0
   */
  interactiveCalls?: number;
  /**
   * @remarks
   * Number of logged-in agents (including agents in ready, on break, on call, or other non-unpublished statuses).
   * 
   * @example
   * 0
   */
  loggedInAgents?: number;
  /**
   * @remarks
   * Maximum queue waiting time among currently queued incoming calls.
   * 
   * @example
   * 0
   */
  longestWaitingTime?: number;
  /**
   * @remarks
   * Number of agents in ready status.
   * 
   * @example
   * 0
   */
  readyAgents?: number;
  /**
   * @remarks
   * Number of agents on calls.
   * 
   * @example
   * 0
   */
  talkingAgents?: number;
  /**
   * @remarks
   * Total number of agents.
   * 
   * @example
   * 0
   */
  totalAgents?: number;
  /**
   * @remarks
   * Number of incoming calls currently queued.
   * 
   * @example
   * 0
   */
  waitingCalls?: number;
  /**
   * @remarks
   * Number of agents in post-processing status.
   * 
   * @example
   * 0
   */
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakCodeDetailList: 'BreakCodeDetailList',
      breakingAgents: 'BreakingAgents',
      instanceId: 'InstanceId',
      interactiveCalls: 'InteractiveCalls',
      loggedInAgents: 'LoggedInAgents',
      longestWaitingTime: 'LongestWaitingTime',
      readyAgents: 'ReadyAgents',
      talkingAgents: 'TalkingAgents',
      totalAgents: 'TotalAgents',
      waitingCalls: 'WaitingCalls',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCodeDetailList: { 'type': 'array', 'itemType': GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList },
      breakingAgents: 'number',
      instanceId: 'string',
      interactiveCalls: 'number',
      loggedInAgents: 'number',
      longestWaitingTime: 'number',
      readyAgents: 'number',
      talkingAgents: 'number',
      totalAgents: 'number',
      waitingCalls: 'number',
      workingAgents: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.breakCodeDetailList)) {
      $dara.Model.validateArray(this.breakCodeDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetRealtimeInstanceStatesResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 943D8EF3-3321-471F-A104-51C96FCA94D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRealtimeInstanceStatesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

