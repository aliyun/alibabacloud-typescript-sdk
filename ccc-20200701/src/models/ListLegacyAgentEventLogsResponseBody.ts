// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAgentEventLogsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * false
   */
  agentDropCall?: string;
  /**
   * @example
   * agent@ccc-test
   */
  agentNo?: string;
  callDir?: string;
  /**
   * @example
   * 378654****
   */
  callId?: string;
  callMode?: string;
  callType?: string;
  /**
   * @example
   * 1312343****
   */
  calleeId?: string;
  /**
   * @example
   * 08331111****
   */
  callerId?: string;
  /**
   * @example
   * 345467****
   */
  connId?: string;
  event?: string;
  /**
   * @example
   * skillgroup1@ccc-test,skillgroup2@ccc-test
   */
  groupNo?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * 8012****
   */
  phoneNo?: string;
  /**
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  targetRequest?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  targetSelect?: string;
  /**
   * @example
   * acc101
   */
  tenantId?: string;
  /**
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
  list?: ListLegacyAgentEventLogsResponseBodyDataList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: ListLegacyAgentEventLogsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 2802EE59-3B53-513A-A130-85E480AF689D
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

