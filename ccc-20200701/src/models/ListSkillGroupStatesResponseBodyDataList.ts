// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupStatesResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 3
   */
  averageWaitingTime?: number;
  /**
   * @example
   * 0
   */
  breakingAgents?: number;
  inboundTalkingAgents?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 0
   */
  loggedInAgents?: number;
  /**
   * @example
   * 0
   */
  longestCall?: number;
  /**
   * @example
   * 0
   */
  outboundScenarioReadyAgents?: number;
  outboundTalkingAgents?: number;
  /**
   * @example
   * 1
   */
  readyAgents?: number;
  /**
   * @example
   * skillgroup1@ccc-test
   */
  skillGroupId?: string;
  skillGroupName?: string;
  /**
   * @example
   * 0
   */
  talkingAgents?: number;
  /**
   * @example
   * 0
   */
  waitingCalls?: number;
  /**
   * @example
   * 0
   */
  waitingCallsLevel10?: number;
  /**
   * @example
   * 0
   */
  waitingCallsLevel20?: number;
  /**
   * @example
   * 0
   */
  waitingCallsLevel30?: number;
  /**
   * @example
   * 0
   */
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      averageWaitingTime: 'AverageWaitingTime',
      breakingAgents: 'BreakingAgents',
      inboundTalkingAgents: 'InboundTalkingAgents',
      instanceId: 'InstanceId',
      loggedInAgents: 'LoggedInAgents',
      longestCall: 'LongestCall',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundTalkingAgents: 'OutboundTalkingAgents',
      readyAgents: 'ReadyAgents',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      talkingAgents: 'TalkingAgents',
      waitingCalls: 'WaitingCalls',
      waitingCallsLevel10: 'WaitingCallsLevel10',
      waitingCallsLevel20: 'WaitingCallsLevel20',
      waitingCallsLevel30: 'WaitingCallsLevel30',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageWaitingTime: 'number',
      breakingAgents: 'number',
      inboundTalkingAgents: 'number',
      instanceId: 'string',
      loggedInAgents: 'number',
      longestCall: 'number',
      outboundScenarioReadyAgents: 'number',
      outboundTalkingAgents: 'number',
      readyAgents: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      talkingAgents: 'number',
      waitingCalls: 'number',
      waitingCallsLevel10: 'number',
      waitingCallsLevel20: 'number',
      waitingCallsLevel30: 'number',
      workingAgents: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

