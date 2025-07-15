// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeAgentStatesResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * agent1@ccc-test
   */
  agentId?: string;
  agentName?: string;
  breakCode?: string;
  /**
   * @example
   * Outbound
   */
  callType?: string;
  /**
   * @example
   * agent@ccc-test
   */
  counterParty?: string;
  /**
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * 80317391
   */
  extension?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  skillGroupIdList?: string[];
  skillGroupNameList?: string[];
  /**
   * @example
   * ACW
   */
  state?: string;
  /**
   * @example
   * Monitored
   */
  stateCode?: string;
  /**
   * @example
   * 8
   */
  stateTime?: number;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      breakCode: 'BreakCode',
      callType: 'CallType',
      counterParty: 'CounterParty',
      duration: 'Duration',
      extension: 'Extension',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      skillGroupIdList: 'SkillGroupIdList',
      skillGroupNameList: 'SkillGroupNameList',
      state: 'State',
      stateCode: 'StateCode',
      stateTime: 'StateTime',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      breakCode: 'string',
      callType: 'string',
      counterParty: 'string',
      duration: 'number',
      extension: 'string',
      instanceId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      skillGroupNameList: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      stateCode: 'string',
      stateTime: 'number',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupIdList)) {
      $dara.Model.validateArray(this.skillGroupIdList);
    }
    if(Array.isArray(this.skillGroupNameList)) {
      $dara.Model.validateArray(this.skillGroupNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBodyData extends $dara.Model {
  list?: ListRealtimeAgentStatesResponseBodyDataList[];
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
   * 1
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
      list: { 'type': 'array', 'itemType': ListRealtimeAgentStatesResponseBodyDataList },
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

export class ListRealtimeAgentStatesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListRealtimeAgentStatesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListRealtimeAgentStatesResponseBodyData,
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

