// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupStatesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The average waiting time, in seconds.
   * 
   * @example
   * 3
   */
  averageWaitingTime?: number;
  /**
   * @remarks
   * Number of agents in break status.
   * 
   * @example
   * 0
   */
  breakingAgents?: number;
  /**
   * @remarks
   * The number of agents on calls in the inbound scenario.
   * 
   * @example
   * 0
   */
  inboundTalkingAgents?: number;
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
   * Number of logged-in agents.
   * 
   * @example
   * 0
   */
  loggedInAgents?: number;
  /**
   * @remarks
   * Maximum waiting duration.
   * 
   * @example
   * 0
   */
  longestCall?: number;
  /**
   * @remarks
   * The number of agents who are idle and in outbound-only status.
   * 
   * @example
   * 0
   */
  outboundScenarioReadyAgents?: number;
  /**
   * @remarks
   * Number of agents on outbound calls.
   * 
   * @example
   * 0
   */
  outboundTalkingAgents?: number;
  /**
   * @remarks
   * The number of idle agents.
   * 
   * @example
   * 1
   */
  readyAgents?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * skillgroup1@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * 测试技能组
   */
  skillGroupName?: string;
  /**
   * @remarks
   * The number of agents on calls.
   * 
   * @example
   * 0
   */
  talkingAgents?: number;
  /**
   * @remarks
   * Number of calls currently in the queue.
   * 
   * @example
   * 0
   */
  waitingCalls?: number;
  /**
   * @remarks
   * The number of calls with a waiting duration of less than 10 seconds.
   * 
   * @example
   * 0
   */
  waitingCallsLevel10?: number;
  /**
   * @remarks
   * Number of calls with waiting duration less than 20 seconds.
   * 
   * @example
   * 0
   */
  waitingCallsLevel20?: number;
  /**
   * @remarks
   * The number of calls with a waiting duration of less than 30 seconds.
   * 
   * @example
   * 0
   */
  waitingCallsLevel30?: number;
  /**
   * @remarks
   * The number of agents in post-processing.
   * 
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
  /**
   * @remarks
   * List of skill group status data.
   */
  list?: ListSkillGroupStatesResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
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
  data?: ListSkillGroupStatesResponseBodyData;
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
   * 1F69EBB0-63E9-5DDE-887F-9FC040ADF309
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
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

