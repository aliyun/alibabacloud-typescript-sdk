// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEventSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the event subscription feature. Valid values:
   * 
   * *   **0**: disables the event subscription feature.
   * *   **1**: enables the event subscription feature.
   * 
   * @example
   * 1
   */
  active?: string;
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * *   **hdm_alarm_sms**: text message.
   * *   **dingtalk**: DingTalk chatbot.
   * *   **hdm_alarm_sms_and_email**: text message and email.
   * *   **hdm_alarm_sms,dingtalk**: text message and DingTalk chatbot.
   * 
   * @example
   * hdm_alarm_sms,dingtalk
   */
  channelType?: string;
  /**
   * @remarks
   * The name of the contact group that receives alert notifications. Separate multiple names with commas (,).
   * 
   * @example
   * Default contact group
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The name of the contact who receives alert notifications. Separate multiple names with commas (,).
   * 
   * @example
   * Default contact
   */
  contactName?: string;
  /**
   * @remarks
   * The notification rules based on the event type. If you leave this parameter empty, the values of **MinInterval** and **ChannelType** prevail.
   * 
   * Specify this parameter in the following format: `{"silenced": {"Event type 1":Specifies whether to enable adaptive silence, "Event type 2":Specify whether to enable adaptive silence},"min_interval": {"Event type 1":Minimum interval between event notifications, "Event type 2":Minimum interval between event notifications},"alert_type": {"Event type 1":"Notification method", "Event type 2":"Notification method"}}`.
   * 
   * *   **silenced**: specifies whether to enable adaptive silence. After you enable adaptive silence, the interval between consecutive alert notifications for an event is the greater one of the minimum interval specified by **min_interval** and one third of the event duration. Valid values:
   * 
   *     *   1: enables adaptive silence.
   *     *   2: disables adaptive silence.
   * 
   * *   **min_interval**: the minimum interval between event notifications. Unit: seconds.
   * 
   * *   **alert_type**: the notification method. Valid values:
   * 
   *     *   **hdm_alarm_sms**: text message.
   *     *   **dingtalk**: DingTalk chatbot.
   *     *   **hdm_alarm_sms_and_email**: text message and email.
   *     *   **hdm_alarm_sms,dingtalk**: text message and DingTalk chatbot.
   * 
   * @example
   * {"silenced": {"AutoScale":1, "SQLThrottle":0, "TimeSeriesAbnormal": 1}, "min_interval": {"AutoScale":300, "SQLThrottle":360, "TimeSeriesAbnormal": 120}, "alert_type": {"AutoScale":"hdm_alarm_sms", "SQLThrottle":"hdm_alarm_sms_and_email", "TimeSeriesAbnormal": "hdm_alarm_sms,dingtalk"}}
   */
  dispatchRule?: string;
  /**
   * @remarks
   * The supported event scenarios. You can set the value to **AllContext**, which indicates that all scenarios are supported.
   * 
   * @example
   * AllContext
   */
  eventContext?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of event notifications. You can set the value to **zh-CN**, which indicates that event notifications are sent in Chinese.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * The risk level of the events. Valid values:
   * 
   * *   **Notice**: events that trigger notifications, including events at the **Notice**, **Optimization**, **Warn**, and **Critical** levels.
   * *   **Optimization**: events that trigger optimizations, including events at the **Optimization**, **Warn**, and **Critical** levels.
   * *   **Warn**: events that trigger warnings, including events at the **Warn** and **Critical** levels.
   * *   **Critical**: events that trigger critical warnings.
   * 
   * The following content describes the events at each level in detail:
   * 
   * *   Notice: events that are related to database exceptions for which no suggestions are generated.
   * *   Optimization: events for which optimization suggestions are generated based on the status of the database.
   * *   Warn: events that may affect the running of the database.
   * *   Critical: events that affect the running of the database.
   * 
   * @example
   * Optimization
   */
  level?: string;
  /**
   * @remarks
   * The minimum interval between consecutive event notifications. Unit: seconds.
   * 
   * @example
   * 60
   */
  minInterval?: string;
  /**
   * @remarks
   * The alert severity based on the event type.
   * 
   * Specify this parameter in the following format: `{"Event type 1":"Alert severity", "Event type 2":"Alert severity"}`.
   * 
   * Valid values of event types:
   * 
   * *   **AutoScale**: auto scaling event.
   * *   **SQLThrottle**: throttling event.
   * *   **TimeSeriesAbnormal**: event for detecting time series anomalies.
   * *   **SQLOptimize**: SQL optimization event.
   * *   **ResourceOptimize**: storage optimization event.
   * 
   * Valid values of alert severities:
   * 
   * *   **info**
   * *   **noticed**
   * *   **warning**
   * *   **critical**
   * 
   * @example
   * {"AutoScale":"critical","SQLThrottle":"info","TimeSeriesAbnormal":"warning"}
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      channelType: 'ChannelType',
      contactGroupName: 'ContactGroupName',
      contactName: 'ContactName',
      dispatchRule: 'DispatchRule',
      eventContext: 'EventContext',
      instanceId: 'InstanceId',
      lang: 'Lang',
      level: 'Level',
      minInterval: 'MinInterval',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'string',
      channelType: 'string',
      contactGroupName: 'string',
      contactName: 'string',
      dispatchRule: 'string',
      eventContext: 'string',
      instanceId: 'string',
      lang: 'string',
      level: 'string',
      minInterval: 'string',
      severity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

