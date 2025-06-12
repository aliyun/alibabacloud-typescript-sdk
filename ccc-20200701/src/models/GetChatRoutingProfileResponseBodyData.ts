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

