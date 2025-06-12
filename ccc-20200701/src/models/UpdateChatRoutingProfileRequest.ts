// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatRoutingProfileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "RoutingType": "Automatic",
   *     "AgentConcurrencySettings": {
   *         "AllowExceedingLimitWhenTransferring": false,
   *         "ConcurrencyLimit": 4,
   *         "AllowExceedingLimitWhenClaiming": true,
   *         "Enabled": true
   *     },
   *     "ChatSettings": {
   *         "IdleChatTimeoutSeconds": 300
   *     },
   *     "DistributionSettings": {
   *         "Enabled": true,
   *         "AgentRingTimeoutSeconds": 119,
   *         "MaxNumberOfConversationsAgentCanMiss": 5,
   *         "PostAgentMissingConversionsAction": "Nothing"
   *     }
   * }
   */
  routingProfiles?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      routingProfiles: 'RoutingProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      routingProfiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

