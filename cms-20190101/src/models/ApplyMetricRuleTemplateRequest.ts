// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyMetricRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template application policy. Valid values:
   * 
   * *   all (default): deletes all the rules that are created by using the alert template from the selected application group, and then creates alert rules based on the template.
   * *   append: deletes the rules that are created by using the alert template from the selected application group, and then creates alert rules based on the existing template.
   * 
   * @example
   * all
   */
  appendMode?: string;
  /**
   * @remarks
   * The mode in which the alert template is applied. Valid values:
   * 
   * *   GROUP_INSTANCE_FIRST: The metrics in the application group take precedence. If a metric specified in the alert template does not exist in the application group, the system does not generate an alert rule for the metric based on the alert template.
   * *   ALARM_TEMPLATE_FIRST: The metrics specified in the alert template take precedence. If a metric specified in the alert template does not exist in the application group, the system still generates an alert rule for the metric based on the alert template.
   * 
   * @example
   * GROUP_INSTANCE_FIRST
   */
  applyMode?: string;
  /**
   * @remarks
   * The end of the time period during which the alert rule is effective. Valid values: 00 to 23. A value of 00 indicates 00:59 and a value of 23 indicates 23:59.
   * 
   * @example
   * 23
   */
  enableEndTime?: number;
  /**
   * @remarks
   * The beginning of the time period during which the alert rule is effective. Valid values: 00 to 23. A value of 00 indicates 00:00 and a value of 23 indicates 23:00.
   * 
   * @example
   * 00
   */
  enableStartTime?: number;
  /**
   * @remarks
   * The ID of the application group to which the alert template is applied.
   * 
   * For more information about how to query the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
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
   * Set the value to 4. A value of 4 indicates that alert notifications are sent by using TradeManager and DingTalk chatbots.
   * 
   * @example
   * 4
   */
  notifyLevel?: number;
  /**
   * @remarks
   * The mute period during which notifications are not repeatedly sent for an alert. Unit: seconds. Default value: 86400.
   * 
   * >  Only one alert notification is sent during each mute period even if the metric value exceeds the alert threshold several times.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * For more information about how to query the IDs of alert templates, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 700****
   */
  templateIds?: string;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      appendMode: 'AppendMode',
      applyMode: 'ApplyMode',
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

