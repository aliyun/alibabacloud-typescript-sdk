// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAgentStatusLogsResponseBodyDataList extends $dara.Model {
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
  aliHangupCause?: string;
  callDir?: string;
  /**
   * @example
   * 454326****
   */
  callId?: string;
  callType?: string;
  /**
   * @example
   * 1312121****
   */
  calleeId?: string;
  /**
   * @example
   * 08337676****
   */
  callerId?: string;
  /**
   * @example
   * 487326****
   */
  connId?: string;
  extend1?: string;
  extend2?: string;
  extend3?: string;
  extend4?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  groupNo?: string;
  /**
   * @example
   * 8032****
   */
  monitedAgentNo?: string;
  /**
   * @example
   * 8012****
   */
  monitedAgentPhoneNo?: string;
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
   * 3
   */
  statisticTime?: number;
  status?: string;
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
   * acc6736
   */
  tenantId?: string;
  /**
   * @example
   * 07551231****
   */
  transferNo?: string;
  /**
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

