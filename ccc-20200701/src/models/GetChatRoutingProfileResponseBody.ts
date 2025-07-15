// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatRoutingProfileResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   *     "AllowExceedingLimitWhenTransferring": false,
   *     "ConcurrencyLimit": 4,
   *     "AllowExceedingLimitWhenClaiming": true,
   *     "Enabled": true
   * }
   */
  agentConcurrencySettings?: string;
  /**
   * @example
   * {"IdleChatTimeoutSeconds":300}
   */
  chatSettings?: string;
  /**
   * @example
   * {
   *     "AgentRingTimeoutSeconds": 30,
   *     "Enabled": true,
   *     "MaxNumberOfConversationsAgentCanMiss": 5,
   *     "PostAgentMissingConversionsAction": "Nothing"
   * }
   */
  distributionSettings?: string;
  /**
   * @example
   * Automatic
   */
  routingType?: string;
  static names(): { [key: string]: string } {
    return {
      agentConcurrencySettings: 'AgentConcurrencySettings',
      chatSettings: 'ChatSettings',
      distributionSettings: 'DistributionSettings',
      routingType: 'RoutingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConcurrencySettings: 'string',
      chatSettings: 'string',
      distributionSettings: 'string',
      routingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatRoutingProfileResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetChatRoutingProfileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 30C7D235-DDCF-4C7F-A462-5E2598252C2B
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
      data: GetChatRoutingProfileResponseBodyData,
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

