// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAgentStatusLogsResponseBodyDataList extends $dara.Model {
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
   * Hang-up reason.
   * 
   * @example
   * 无
   */
  aliHangupCause?: string;
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
   * 454326****
   */
  callId?: string;
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
   * The callee number.
   * 
   * @example
   * 1312121****
   */
  calleeId?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * @example
   * 08337676****
   */
  callerId?: string;
  /**
   * @remarks
   * Call channel ID.
   * 
   * @example
   * 487326****
   */
  connId?: string;
  /**
   * @remarks
   * Custom extension field.
   * 
   * @example
   * 无
   */
  extend1?: string;
  /**
   * @remarks
   * Custom extension field.
   * 
   * @example
   * 无
   */
  extend2?: string;
  /**
   * @remarks
   * Custom extension field.
   * 
   * @example
   * 无
   */
  extend3?: string;
  /**
   * @remarks
   * Custom extension field.
   * 
   * @example
   * 无
   */
  extend4?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  groupNo?: string;
  /**
   * @remarks
   * The listener phone number.
   * 
   * @example
   * 8032****
   */
  monitedAgentNo?: string;
  /**
   * @remarks
   * The monitored agent phone number.
   * 
   * @example
   * 8012****
   */
  monitedAgentPhoneNo?: string;
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
   * The time when the statistics were collected.
   * 
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @remarks
   * Duration of the status, in seconds.
   * 
   * @example
   * 3
   */
  statisticTime?: number;
  /**
   * @remarks
   * Agent status.
   * 
   * @example
   * 振铃
   */
  status?: string;
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
   * acc6736
   */
  tenantId?: string;
  /**
   * @remarks
   * Transfer number.
   * 
   * @example
   * 07551231****
   */
  transferNo?: string;
  /**
   * @remarks
   * Transfer number.
   * 
   * @example
   * 05711231****
   */
  transferNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentDropCall: 'AgentDropCall',
      agentNo: 'AgentNo',
      aliHangupCause: 'AliHangupCause',
      callDir: 'CallDir',
      callId: 'CallId',
      callType: 'CallType',
      calleeId: 'CalleeId',
      callerId: 'CallerId',
      connId: 'ConnId',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      extend4: 'Extend4',
      groupNo: 'GroupNo',
      monitedAgentNo: 'MonitedAgentNo',
      monitedAgentPhoneNo: 'MonitedAgentPhoneNo',
      outboundScenario: 'OutboundScenario',
      phoneNo: 'PhoneNo',
      statisticDate: 'StatisticDate',
      statisticTime: 'StatisticTime',
      status: 'Status',
      targetRequest: 'TargetRequest',
      targetSelect: 'TargetSelect',
      tenantId: 'TenantId',
      transferNo: 'TransferNo',
      transferNumber: 'TransferNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDropCall: 'string',
      agentNo: 'string',
      aliHangupCause: 'string',
      callDir: 'string',
      callId: 'string',
      callType: 'string',
      calleeId: 'string',
      callerId: 'string',
      connId: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      extend4: 'string',
      groupNo: 'string',
      monitedAgentNo: 'string',
      monitedAgentPhoneNo: 'string',
      outboundScenario: 'boolean',
      phoneNo: 'string',
      statisticDate: 'string',
      statisticTime: 'number',
      status: 'string',
      targetRequest: 'string',
      targetSelect: 'string',
      tenantId: 'string',
      transferNo: 'string',
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

export class ListLegacyAgentStatusLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of agent status data.
   */
  list?: ListLegacyAgentStatusLogsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListLegacyAgentStatusLogsResponseBodyDataList },
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

export class ListLegacyAgentStatusLogsResponseBody extends $dara.Model {
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
  data?: ListLegacyAgentStatusLogsResponseBodyData;
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
   * 4C9A5D93-33A6-57F3-A423-4C83BD0A8455
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
      data: ListLegacyAgentStatusLogsResponseBodyData,
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

