// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserNotifyHistoriesResponseBodyHistoryList extends $dara.Model {
  /**
   * @example
   * DING
   */
  channel?: string;
  /**
   * @example
   * 张三,李四
   */
  contacts?: string;
  /**
   * @example
   * 运维组,值班组
   */
  groups?: string;
  /**
   * @example
   * 5d41402abc4b2a76b9719d911017c592
   */
  incidentId?: string;
  /**
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa8
   */
  jobId?: string;
  noChannel?: boolean;
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
   * 13800138000
   */
  receiver?: string;
  /**
   * @example
   * {"errcode":0,"errmsg":"ok"}
   */
  result?: string;
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
   * TRIGGERED
   */
  status?: string;
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
   * 1729400000
   */
  timestamp?: number;
  /**
   * @example
   * 5884500827389836
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      contacts: 'contacts',
      groups: 'groups',
      incidentId: 'incidentId',
      jobId: 'jobId',
      noChannel: 'noChannel',
      notifyStrategyId: 'notifyStrategyId',
      notifyStrategyName: 'notifyStrategyName',
      receiver: 'receiver',
      result: 'result',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      sendType: 'sendType',
      severity: 'severity',
      status: 'status',
      subscriptionId: 'subscriptionId',
      subscriptionName: 'subscriptionName',
      success: 'success',
      timestamp: 'timestamp',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      contacts: 'string',
      groups: 'string',
      incidentId: 'string',
      jobId: 'string',
      noChannel: 'boolean',
      notifyStrategyId: 'string',
      notifyStrategyName: 'string',
      receiver: 'string',
      result: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendType: 'string',
      severity: 'string',
      status: 'string',
      subscriptionId: 'string',
      subscriptionName: 'string',
      success: 'boolean',
      timestamp: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserNotifyHistoriesResponseBody extends $dara.Model {
  historyList?: ListUserNotifyHistoriesResponseBodyHistoryList[];
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
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  /**
   * @example
   * 128
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      historyList: 'historyList',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyList: { 'type': 'array', 'itemType': ListUserNotifyHistoriesResponseBodyHistoryList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.historyList)) {
      $dara.Model.validateArray(this.historyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

