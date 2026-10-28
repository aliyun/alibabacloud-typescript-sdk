// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the AI agent. This parameter is used to filter subscriptions of a specified AI agent.
   * 
   * @example
   * agent-rca-001
   */
  agentUuid?: string;
  /**
   * @remarks
   * The sort order of the returned versions. Valid values:
   * - asc: Ascending order. 
   * - desc: Descending order.
   * 
   * @example
   * asc
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether the subscription is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 2-3408-4595-9d80-****
   */
  nextToken?: string;
  /**
   * @remarks
   * The UUID of the notification policy. This parameter is used to filter subscriptions that are bound to a specified notification policy. The value is a 32-character string.
   * 
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d
   */
  notifyStrategyUuid?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * The ID of the subscription.
   * 
   * @example
   * 123123123123
   */
  subscriptionId?: string;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * @example
   * Test subscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The type of the subscription. Valid values:
   * - NORMAL: Standard subscription.
   * - AI_AGENT: AI agent subscription.
   * 
   * @example
   * NORMAL
   */
  subscriptionType?: string;
  /**
   * @remarks
   * **[Deprecated]** This is an internal reserved parameter. Do not use it.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  unbound?: boolean;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      agentUuid: 'agentUuid',
      direction: 'direction',
      enable: 'enable',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      notifyStrategyUuid: 'notifyStrategyUuid',
      orderBy: 'orderBy',
      subscriptionId: 'subscriptionId',
      subscriptionName: 'subscriptionName',
      subscriptionType: 'subscriptionType',
      unbound: 'unbound',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUuid: 'string',
      direction: 'string',
      enable: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      notifyStrategyUuid: 'string',
      orderBy: 'string',
      subscriptionId: 'string',
      subscriptionName: 'string',
      subscriptionType: 'string',
      unbound: 'boolean',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

