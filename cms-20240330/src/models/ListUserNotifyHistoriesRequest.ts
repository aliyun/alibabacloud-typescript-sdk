// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserNotifyHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The notification batch ID. Used to filter the notification history for notifications sent in the same batch.
   * 
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa7
   */
  batchId?: string;
  /**
   * @remarks
   * **[Deprecated]** This is an internal reserved parameter used only for business source filtering in internal platform scenarios. Do not specify this parameter in external calls.
   * 
   * @example
   * arms
   * 
   * @deprecated
   */
  bizSource?: string;
  /**
   * @remarks
   * The notification channel. Valid values:
   * - ALI_YUNGE_SMS: text message
   * - ALI_YUNGE_CALL: phone call
   * - ALI_YUNGE_MAIL: email
   * - ALI_YUNGE_ALIUID: internal message
   * - DING: DingTalk
   * - DING_COOL_APP: DingTalk cool app
   * - FEISHU: Lark
   * - WEIXIN: WeCom
   * - SLACK: Slack
   * - TEAMS: Teams
   * - PAGERDUTY: PagerDuty
   * - WEBHOOK: custom webhook
   * - ALIYUN_SLS: Simple Log Service
   * - ALIYUN_FC: Function Compute
   * - ALIYUN_FC3: Function Compute 3.0
   * - ALIYUN_MNS: Message Service
   * - ALIYUN_OOS: CloudOps Orchestration Service
   * - ALIYUN_ESS: elastic scaling
   * - ALIYUN_EB: event bus
   * - ALIYUN_OPENAPI: OpenAPI
   * 
   * @example
   * DING
   */
  channel?: string;
  /**
   * @remarks
   * The channel category. Valid values:
   * - WEBHOOK: webhook channels, such as DingTalk, Lark, WeCom, Slack, Teams, and custom webhooks.
   * - YUNGE: communication channels, such as text messages, phone calls, and emails.
   * 
   * @example
   * WEBHOOK
   */
  channelCategory?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds. Default value: 6 hours before the to parameter.
   * 
   * @example
   * 1729400000
   */
  from?: number;
  /**
   * @remarks
   * The contact group. Used to filter the notification history by contact group name.
   * 
   * @example
   * O&M contact group
   */
  group?: string;
  /**
   * @remarks
   * The incident ID. Used to filter the notification history associated with a specified incident.
   * 
   * @example
   * 5d41402abc4b2a76b9719d911017c592
   */
  incidentId?: string;
  /**
   * @remarks
   * Specifies whether to include notification records that have no actual delivery channel. Valid values:
   * - true: includes the records.
   * - false: excludes the records and returns only records that were actually sent through a channel.
   * Default value: true.
   */
  includeNoChannel?: boolean;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order of time. Valid values:
   * - true: descending order, with the latest records first.
   * - false: ascending order.
   * Default value: true.
   */
  isDesc?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Used to retrieve the next page of data. It is an opaque string generated and encrypted by the server. You do not need to specify this parameter for the first query. For subsequent queries, pass the token returned in the previous response.
   * 
   * @example
   * 2f8aKz3mNq9p****
   */
  nextToken?: string;
  /**
   * @remarks
   * The notification policy ID. Used to filter the notification history for a specified notification policy. It is a 32-character string.
   * 
   * @example
   * 2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The notification policy name. Used to filter the notification history by notification policy name.
   * 
   * @example
   * Default notification policy
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * **[Deprecated]** This is an internal reserved parameter used only for dedicated notification history query paths in internal platform scenarios. Do not specify this parameter in external calls.
   * 
   * @example
   * 1234567890123456
   * 
   * @deprecated
   */
  partitionKey?: string;
  /**
   * @remarks
   * The recipient. Used to filter the notification history by recipient address, such as a phone number, email address, or webhook address.
   * 
   * @example
   * 13800138000
   */
  receiver?: string;
  /**
   * @remarks
   * The alert rule ID. Used to filter the notification history triggered by a specified alert rule. Exact match is used.
   * 
   * @example
   * 3fa85f64-5717-4562-b3fc-2c963f66afa6
   */
  ruleId?: string;
  /**
   * @remarks
   * The alert rule name. Used to filter the notification history by rule name.
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
   * - INFO: info
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @remarks
   * The subscription ID. Used to filter the notification history for a specified subscription. It is a 32-character string.
   * 
   * @example
   * 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d
   */
  subscriptionId?: string;
  /**
   * @remarks
   * The subscription name. Used to filter the notification history by subscription name.
   * 
   * @example
   * Default subscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * Specifies whether to filter by delivery result. Valid values:
   * - true: returns only successfully delivered records.
   * - false: returns only failed delivery records.
   * If you do not specify this parameter, the results are not filtered by delivery result.
   */
  success?: boolean;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds. Default value: the current time.
   * 
   * @example
   * 1729421600
   */
  to?: number;
  /**
   * @remarks
   * The workspace identifier.
   * 
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

