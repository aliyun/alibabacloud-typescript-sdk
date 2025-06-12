// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList } from "./ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList";


export class ListRealtimeSkillGroupStatesResponseBodyDataList extends $dara.Model {
  breakCodeDetailList?: ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList[];
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
   * 2
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
  outboundScenarioReadyAgents?: number;
  /**
   * @example
   * 2
   */
  readyAgents?: number;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @example
   * 0
   */
  talkingAgents?: number;
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
      loggedInAgents: 'LoggedInAgents',
      longestWaitingTime: 'LongestWaitingTime',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      readyAgents: 'ReadyAgents',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      talkingAgents: 'TalkingAgents',
      totalAgents: 'TotalAgents',
      waitingCalls: 'WaitingCalls',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCodeDetailList: { 'type': 'array', 'itemType': ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList },
      breakingAgents: 'number',
      instanceId: 'string',
      loggedInAgents: 'number',
      longestWaitingTime: 'number',
      outboundScenarioReadyAgents: 'number',
      readyAgents: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
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

