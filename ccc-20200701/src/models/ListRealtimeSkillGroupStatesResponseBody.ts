// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList extends $dara.Model {
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

export class ListRealtimeSkillGroupStatesResponseBodyData extends $dara.Model {
  list?: ListRealtimeSkillGroupStatesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2
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
      list: { 'type': 'array', 'itemType': ListRealtimeSkillGroupStatesResponseBodyDataList },
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

export class ListRealtimeSkillGroupStatesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListRealtimeSkillGroupStatesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 26A34338-5CD9-4C95-A7A6-5BDCE76C6B94
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
      data: ListRealtimeSkillGroupStatesResponseBodyData,
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

