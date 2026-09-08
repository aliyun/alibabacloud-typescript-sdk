// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAgentEventLogsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the agent hung up the call.
   * 
   * @example
   * false
   */
  agentDropCall?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  agentNo?: string;
  /**
   * @remarks
   * Call direction.
   * 
   * @example
   * 内部
   */
  callDir?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * 378654****
   */
  callId?: string;
  /**
   * @remarks
   * Call pattern.
   * 
   * @example
   * 呼入
   */
  callMode?: string;
  /**
   * @remarks
   * Call type.
   * 
   * @example
   * 呼入
   */
  callType?: string;
  /**
   * @remarks
   * Callee number.
   * 
   * @example
   * 1312343****
   */
  calleeId?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * @example
   * 08331111****
   */
  callerId?: string;
  /**
   * @remarks
   * Call channel ID.
   * 
   * @example
   * 345467****
   */
  connId?: string;
  /**
   * @remarks
   * Type of management event.
   * 
   * @example
   * 拨号
   */
  event?: string;
  /**
   * @remarks
   * List of skill group IDs that the agent signed in to. Separate multiple skill group IDs with commas.
   * 
   * @example
   * skillgroup1@ccc-test,skillgroup2@ccc-test
   */
  groupNo?: string;
  /**
   * @remarks
   * Indicates whether the agent is in outbound-only mode.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * Agent extension number.
   * 
   * @example
   * 8012****
   */
  phoneNo?: string;
  /**
   * @remarks
   * Statistics timestamp.
   * 
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  targetRequest?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  targetSelect?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * acc101
   */
  tenantId?: string;
  /**
   * @remarks
   * Transfer number.
   * 
   * @example
   * 07518888****
   */
  transferNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentDropCall: 'AgentDropCall',
      agentNo: 'AgentNo',
      callDir: 'CallDir',
      callId: 'CallId',
      callMode: 'CallMode',
      callType: 'CallType',
      calleeId: 'CalleeId',
      callerId: 'CallerId',
      connId: 'ConnId',
      event: 'Event',
      groupNo: 'GroupNo',
      outboundScenario: 'OutboundScenario',
      phoneNo: 'PhoneNo',
      statisticDate: 'StatisticDate',
      targetRequest: 'TargetRequest',
      targetSelect: 'TargetSelect',
      tenantId: 'TenantId',
      transferNumber: 'TransferNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDropCall: 'string',
      agentNo: 'string',
      callDir: 'string',
      callId: 'string',
      callMode: 'string',
      callType: 'string',
      calleeId: 'string',
      callerId: 'string',
      connId: 'string',
      event: 'string',
      groupNo: 'string',
      outboundScenario: 'boolean',
      phoneNo: 'string',
      statisticDate: 'string',
      targetRequest: 'string',
      targetSelect: 'string',
      tenantId: 'string',
      transferNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentEventLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of agent event logs.
   */
  list?: ListLegacyAgentEventLogsResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 1000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 1000.
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
      list: { 'type': 'array', 'itemType': ListLegacyAgentEventLogsResponseBodyDataList },
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

export class ListLegacyAgentEventLogsResponseBody extends $dara.Model {
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
  data?: ListLegacyAgentEventLogsResponseBodyData;
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
   * 2802EE59-3B53-513A-A130-85E480AF689D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
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
      data: ListLegacyAgentEventLogsResponseBodyData,
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

