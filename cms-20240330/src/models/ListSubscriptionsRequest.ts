// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionsRequest extends $dara.Model {
  /**
   * @example
   * agent-rca-001
   */
  agentUuid?: string;
  /**
   * @example
   * asc
   */
  direction?: string;
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 2-3408-4595-9d80-****
   */
  nextToken?: string;
  /**
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d
   */
  notifyStrategyUuid?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @example
   * 123123123123
   */
  subscriptionId?: string;
  /**
   * @example
   * 测试订阅
   */
  subscriptionName?: string;
  /**
   * @example
   * NORMAL
   */
  subscriptionType?: string;
  /**
   * @example
   * true
   * 
   * @deprecated
   */
  unbound?: boolean;
  /**
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

