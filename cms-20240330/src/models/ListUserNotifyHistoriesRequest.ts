// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserNotifyHistoriesRequest extends $dara.Model {
  /**
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa7
   */
  batchId?: string;
  /**
   * @example
   * arms
   * 
   * @deprecated
   */
  bizSource?: string;
  /**
   * @example
   * DING
   */
  channel?: string;
  /**
   * @example
   * WEBHOOK
   */
  channelCategory?: string;
  /**
   * @example
   * 1729400000
   */
  from?: number;
  /**
   * @example
   * 运维联系人组
   */
  group?: string;
  /**
   * @example
   * 5d41402abc4b2a76b9719d911017c592
   */
  incidentId?: string;
  includeNoChannel?: boolean;
  isDesc?: boolean;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2f8aKz3mNq9p****
   */
  nextToken?: string;
  /**
   * @example
   * 2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e
   */
  notifyStrategyId?: string;
  /**
   * @example
   * 默认通知策略
   */
  notifyStrategyName?: string;
  /**
   * @example
   * 1234567890123456
   * 
   * @deprecated
   */
  partitionKey?: string;
  /**
   * @example
   * 13800138000
   */
  receiver?: string;
  /**
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa6
   */
  ruleId?: string;
  /**
   * @example
   * CPU使用率告警
   */
  ruleName?: string;
  /**
   * @example
   * SUBSCRIBE
   */
  sendType?: string;
  /**
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d
   */
  subscriptionId?: string;
  /**
   * @example
   * 默认订阅
   */
  subscriptionName?: string;
  success?: boolean;
  /**
   * @example
   * 1729421600
   */
  to?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-cms-5884500827389836-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      bizSource: 'bizSource',
      channel: 'channel',
      channelCategory: 'channelCategory',
      from: 'from',
      group: 'group',
      incidentId: 'incidentId',
      includeNoChannel: 'includeNoChannel',
      isDesc: 'isDesc',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      notifyStrategyId: 'notifyStrategyId',
      notifyStrategyName: 'notifyStrategyName',
      partitionKey: 'partitionKey',
      receiver: 'receiver',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      sendType: 'sendType',
      severity: 'severity',
      subscriptionId: 'subscriptionId',
      subscriptionName: 'subscriptionName',
      success: 'success',
      to: 'to',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      bizSource: 'string',
      channel: 'string',
      channelCategory: 'string',
      from: 'number',
      group: 'string',
      incidentId: 'string',
      includeNoChannel: 'boolean',
      isDesc: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      notifyStrategyId: 'string',
      notifyStrategyName: 'string',
      partitionKey: 'string',
      receiver: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendType: 'string',
      severity: 'string',
      subscriptionId: 'string',
      subscriptionName: 'string',
      success: 'boolean',
      to: 'number',
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

