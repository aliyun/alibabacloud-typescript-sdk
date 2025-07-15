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

export class ListSkillGroupStatesResponseBodyData extends $dara.Model {
  list?: ListSkillGroupStatesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListSkillGroupStatesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListSkillGroupStatesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListSkillGroupStatesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 1F69EBB0-63E9-5DDE-887F-9FC040ADF309
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSkillGroupStatesResponseBodyData,
      httpStatusCode: 'number',
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

