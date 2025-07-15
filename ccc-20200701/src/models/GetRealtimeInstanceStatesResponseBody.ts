// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
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
  breakCodeDetailList?: GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList[];
  /**
   * @example
   * 0
   */
  breakingAgents?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 0
   */
  interactiveCalls?: number;
  /**
   * @example
   * 0
   */
  loggedInAgents?: number;
  /**
   * @example
   * 0
   */
  longestWaitingTime?: number;
  /**
   * @example
   * 0
   */
  readyAgents?: number;
  /**
   * @example
   * 0
   */
  talkingAgents?: number;
  /**
   * @example
   * 0
   */
  totalAgents?: number;
  /**
   * @example
   * 0
   */
  waitingCalls?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetRealtimeInstanceStatesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

