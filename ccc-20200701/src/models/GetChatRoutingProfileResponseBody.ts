// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatRoutingProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent session concurrent configuration.
   * 
   * - AllowExceedingLimitWhenTransferring: Allow exceeding the limit when transferring. When transferring sessions to other agents, exceeding the recipient\\"s limit is allowed, but the total cannot exceed 30.
   * 
   * - AllowExceedingLimitWhenClaiming: Allow exceeding the limit when claiming. When an agent actively claims sessions from the queue, exceeding the limit is allowed, but the total cannot exceed 30.
   * 
   * - ConcurrencyLimit: The number of network business sessions an agent can process simultaneously.
   * 
   * - Enabled: Enable this configuration.
   * 
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
   * @remarks
   * Session configuration.
   * 
   * - IdleChatTimeoutSeconds: Automatic session end time. If no customer response is received within a specific period, the system ends the session. Unit: seconds.
   * 
   * @example
   * {"IdleChatTimeoutSeconds":300}
   */
  chatSettings?: string;
  /**
   * @remarks
   * Agent session allocation configuration.
   * 
   * - AgentRingTimeoutSeconds: Agent processing timeout limit.
   * 
   * - MaxNumberOfConversationsAgentCanMiss: The maximum number of consecutive unanswered sessions an agent can miss.
   * 
   * - PostAgentMissingConversionsAction: After an agent misses more than the set number of consecutive responses, the system sets the agent\\"s status, such as Break, Invisible, or Nothing (remain unchanged).
   * 
   * - Enabled: Enable.
   * 
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
   * @remarks
   * Call distribution type.
   * 
   * - Automatic distribution (Automatic).
   * 
   * - Manual distribution (Manual).
   * 
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
  data?: GetChatRoutingProfileResponseBodyData;
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

