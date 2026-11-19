// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyMetricRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The application policy of the template. Valid values:
   * 
   * - all: deletes all rules created by using alert templates on the selected application groups, and then creates new alert rules based on the current template. This is the default value.
   * 
   * - append: deletes the rules created by using the current alert template on the selected application groups, and then creates new alert rules based on the current template.
   * 
   * @example
   * all
   */
  appendMode?: string;
  /**
   * @remarks
   * The application mode of the template. Valid values:
   * 
   * - GROUP_INSTANCE_FIRST: application group instances take precedence. When the alert template is applied, the instances in the application group take precedence. If an instance specified in the template does not exist in the application group, the rule for the instance in the template is ignored.
   * 
   * - ALARM_TEMPLATE_FIRST: alert template instances take precedence. When the alert template is applied, alert rules are created regardless of whether the instances exist in the application group.
   * 
   * @example
   * GROUP_INSTANCE_FIRST
   */
  applyMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, and you must make sure that the token is globally unique. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see How to ensure idempotence.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: sends a check request. No security groups are bound to instances. The check items include whether the required parameters are specified, the request format, and the service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): sends a normal request. If the check succeeds, the HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The end hour of the effective period for the alert. The value is a two-digit string, such as "00", "18", or "23". Valid values: 00 to 23. The value specifies the hour when the effective period ends, and the period actually ends at the 59th minute of the hour. For example, "23" indicates that the effective period ends at 23:59. The default time zone is UTC+8.
   * 
   * @example
   * 23
   */
  enableEndTime?: number;
  /**
   * @remarks
   * The start hour of the effective period for the alert. The value is a two-digit string, such as "00", "09", or "23". Valid values: 00 to 23, which represent 00:00 to 23:00. The default time zone is UTC+8.
   * 
   * @example
   * 00
   */
  enableStartTime?: number;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * <props="china">- 2: phone call, text message, mailbox, TradeManager, and DingTalk chatbot.
   * 
   * <props="china">- 3: text message, mailbox, TradeManager, and DingTalk chatbot.
   * 
   * <props="china">- 4: TradeManager and DingTalk chatbot.
   * 
   * 
   * <props="intl">4: TradeManager and DingTalk chatbot.
   * 
   * <props="partner">4: TradeManager and DingTalk chatbot.
   * 
   * @example
   * 4
   */
  notifyLevel?: number;
  /**
   * @remarks
   * The mute for. Unit: seconds. Default value: 86400.
   * 
   * > If the monitoring data continuously exceeds the threshold of the alert rule, the system will send only one alert notification within each epoch.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * For more information about how to obtain the ID of an alert template, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 700****
   */
  templateIds?: string;
  /**
   * @remarks
   * The webhook URL to which an HTTP POST request is sent when an alert is triggered.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      appendMode: 'AppendMode',
      applyMode: 'ApplyMode',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      groupId: 'GroupId',
      notifyLevel: 'NotifyLevel',
      silenceTime: 'SilenceTime',
      templateIds: 'TemplateIds',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMode: 'string',
      applyMode: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      enableEndTime: 'number',
      enableStartTime: 'number',
      groupId: 'number',
      notifyLevel: 'number',
      silenceTime: 'number',
      templateIds: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

