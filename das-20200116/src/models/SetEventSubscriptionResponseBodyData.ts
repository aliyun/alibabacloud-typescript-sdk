// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEventSubscriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event subscription feature is enabled. Valid values:
   * 
   * *   **0**: The event subscription feature is disabled.
   * *   **1**: The event subscription feature is enabled.
   * 
   * @example
   * 1
   */
  active?: number;
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
   * The name of the contact group that receives alert notifications. Multiple names are separated by commas (,).
   * 
   * @example
   * Default contact group
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The name of the contact who receives alert notifications. Multiple names are separated by commas (,).
   * 
   * @example
   * Default contact
   */
  contactName?: string;
  /**
   * @remarks
   * The supported event scenarios. Only **AllContext** is returned for this parameter, which indicates that all scenarios are supported.
   * 
   * @example
   * AllContext
   */
  eventContext?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of event notifications. Only **zh-CN** is returned for this parameter, which indicates that event notifications are sent in Chinese.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The risk level of the events. Valid values:
   * 
   * *   **Notice**
   * *   **Optimization**
   * *   **Warn**
   * *   **Critical**
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
  minInterval?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1088760496****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      channelType: 'channelType',
      contactGroupName: 'contactGroupName',
      contactName: 'contactName',
      eventContext: 'eventContext',
      instanceId: 'instanceId',
      lang: 'lang',
      level: 'level',
      minInterval: 'minInterval',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      channelType: 'string',
      contactGroupName: 'string',
      contactName: 'string',
      eventContext: 'string',
      instanceId: 'string',
      lang: 'string',
      level: 'string',
      minInterval: 'number',
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

