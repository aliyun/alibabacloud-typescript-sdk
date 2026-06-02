// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSummaryInfoResponseBodyAgentBotInstanceSummaryList extends $dara.Model {
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  /**
   * @example
   * 12
   */
  totalCallCount?: number;
  /**
   * @example
   * 10
   */
  totalCallTime?: number;
  /**
   * @example
   * 10
   */
  usedRecordingStorageSpace?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      totalCallCount: 'TotalCallCount',
      totalCallTime: 'TotalCallTime',
      usedRecordingStorageSpace: 'UsedRecordingStorageSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      totalCallCount: 'number',
      totalCallTime: 'number',
      usedRecordingStorageSpace: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryInfoResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  agentBotInstanceSummaryList?: GetSummaryInfoResponseBodyAgentBotInstanceSummaryList[];
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentBotInstanceSummaryList: 'AgentBotInstanceSummaryList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentBotInstanceSummaryList: { 'type': 'array', 'itemType': GetSummaryInfoResponseBodyAgentBotInstanceSummaryList },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.agentBotInstanceSummaryList)) {
      $dara.Model.validateArray(this.agentBotInstanceSummaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

