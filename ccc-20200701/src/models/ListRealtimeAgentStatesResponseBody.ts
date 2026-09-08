// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeAgentStatesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent1@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Agent name.
   * 
   * @example
   * 坐席小王
   */
  agentName?: string;
  /**
   * @remarks
   * Break code.
   * 
   * **Enumeration values:**
   * 
   * - RingingTimeout: Break caused by agent ringing timeout.
   * 
   * - RejectCall: Break caused by agent call rejection.
   * 
   * - Warm-up: Temporary break state after the agent is published and before becoming idle.
   * 
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @remarks
   * Call type.
   * 
   * @example
   * Outbound
   */
  callType?: string;
  /**
   * @remarks
   * Used in specific three-party scenarios, primarily for listener, coaching, and consultation. In three-party scenarios, it represents the third party—for example, the agent being monitored or coached in a listener or coaching scenario, or the agent or external number to which a call is transferred in a consultation scenario.
   * 
   * @example
   * agent@ccc-test
   */
  counterParty?: string;
  /**
   * @remarks
   * Duration of the current status, in seconds.
   * 
   * @example
   * 16
   */
  duration?: number;
  /**
   * @remarks
   * The agent\\"s extension number.
   * 
   * @example
   * 80317391
   */
  extension?: string;
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
   * The agent\\"s personal phone number.
   * 
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @remarks
   * Whether the agent is in outbound-only mode.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * List of skill group IDs that the agent has signed into.
   */
  skillGroupIdList?: string[];
  /**
   * @remarks
   * List of skill group names that the agent has signed into.
   */
  skillGroupNameList?: string[];
  /**
   * @remarks
   * Agent status.
   * 
   * @example
   * ACW
   */
  state?: string;
  /**
   * @remarks
   * Sub-status. In some scenarios, the agent\\"s status cannot be fully represented by the State field alone, so a sub-status is required for clarification. For example, when an agent is being monitored, State=Talking and StateCode=Monitoring.
   * 
   * @example
   * Monitored
   */
  stateCode?: string;
  /**
   * @remarks
   * Time when the status started.
   * 
   * @example
   * 1696670640774
   */
  stateTime?: number;
  /**
   * @remarks
   * Work mode.
   * 
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
  /**
   * @remarks
   * List of real-time agent status data.
   */
  list?: ListRealtimeAgentStatesResponseBodyDataList[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
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
  data?: ListRealtimeAgentStatesResponseBodyData;
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

