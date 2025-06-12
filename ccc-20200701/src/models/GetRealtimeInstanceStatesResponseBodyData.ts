// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList } from "./GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList";


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

