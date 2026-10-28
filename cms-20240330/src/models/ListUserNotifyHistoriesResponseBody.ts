// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserNotifyHistoriesResponseBodyHistoryList extends $dara.Model {
  /**
   * @remarks
   * The notification channel. The valid values are the same as those of the `channel` request parameter.
   * 
   * @example
   * DING
   */
  channel?: string;
  /**
   * @remarks
   * The list of contacts. Multiple contacts are separated by commas.
   * 
   * @example
   * Zhang San, Li Si
   */
  contacts?: string;
  /**
   * @remarks
   * The list of contact groups. Multiple contact groups are separated by commas.
   * 
   * @example
   * O&M group, on-call group
   */
  groups?: string;
  /**
   * @remarks
   * The incident ID.
   * 
   * @example
   * 5d41402abc4b2a76b9719d911017c592
   */
  incidentId?: string;
  /**
   * @remarks
   * The notification job ID.
   * 
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa8
   */
  jobId?: string;
  /**
   * @remarks
   * Indicates whether the notification record has no actual delivery channel. Valid values:
   * - true: The notification record has no actual delivery channel, and the notifyResult is NO_CHANNEL.
   * - false: The notification record has an actual delivery channel.
   */
  noChannel?: boolean;
  /**
   * @remarks
   * The notification policy ID.
   * 
   * @example
   * 2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The notification policy name.
   * 
   * @example
   * Default notification policy
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * The recipient address, such as a phone number, email address, or webhook URL, depending on the notification channel.
   * 
   * @example
   * 13800138000
   */
  receiver?: string;
  /**
   * @remarks
   * The notification delivery result details. This is the raw response content returned by the channel, such as the API response from a DingTalk or Lark bot.
   * 
   * @example
   * {"errcode":0,"errmsg":"ok"}
   */
  result?: string;
  /**
   * @remarks
   * The alert rule ID.
   * 
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa6
   */
  ruleId?: string;
  /**
   * @remarks
   * The alert rule name.
   * 
   * @example
   * CPU usage alert
   */
  ruleName?: string;
  /**
   * @remarks
   * The notification delivery type. Valid values:
   * - SUBSCRIBE: subscription notifications
   * - DIRECT: direct event notifications
   * - ITSM: ticket or action notifications
   * 
   * @example
   * SUBSCRIBE
   */
  sendType?: string;
  /**
   * @remarks
   * The alert severity. Valid values:
   * - CRITICAL: critical
   * - ERROR: error
   * - WARNING: warning
   * - INFO: information
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @remarks
   * The incident status. Valid values:
   * - TRIGGERED: triggered
   * - RESOLVED: resolved
   * - ACK: acknowledged
   * - ESCALATED: escalated
   * - MANUAL_RESOLVED: manually resolved
   * - TIMEOUT: automatically resolved due to timeout
   * - RETRIGGERED: retriggered
   * - PARTIAL_RESOLVED: partially resolved
   * - INVALID: invalid
   * 
   * @example
   * TRIGGERED
   */
  status?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d
   */
  subscriptionId?: string;
  /**
   * @remarks
   * The subscription name.
   * 
   * @example
   * Default subscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * Indicates whether the notification was delivered successfully. Valid values:
   * - true: The notification was delivered successfully.
   * - false: The notification delivery failed.
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the notification record was generated. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1729400000
   */
  timestamp?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the notification record belongs.
   * 
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
  /**
   * @remarks
   * The notification history list.
   */
  historyList?: ListUserNotifyHistoriesResponseBodyHistoryList[];
  /**
   * @remarks
   * The maximum number of entries returned by this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. It is an opaque string generated and encrypted by the server. An empty value indicates that no more data is available.
   * 
   * @example
   * 2f8aKz3mNq9p****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of notification history entries that meet the query conditions.
   * 
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

