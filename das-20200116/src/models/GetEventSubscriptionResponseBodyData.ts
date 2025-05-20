// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventSubscriptionResponseBodyDataContactGroups } from "./GetEventSubscriptionResponseBodyDataContactGroups";
import { GetEventSubscriptionResponseBodyDataContacts } from "./GetEventSubscriptionResponseBodyDataContacts";


export class GetEventSubscriptionResponseBodyData extends $dara.Model {
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
   * The alert contact groups.
   */
  contactGroups?: GetEventSubscriptionResponseBodyDataContactGroups[];
  /**
   * @remarks
   * The name of the subscriber who receives alert notifications. Multiple names are separated by commas (,).
   * 
   * @example
   * Default contact
   */
  contactName?: string;
  /**
   * @remarks
   * The user ID.
   */
  contacts?: GetEventSubscriptionResponseBodyDataContacts[];
  /**
   * @remarks
   * The supported event scenarios. Only **AllContext** may be returned, which indicates that all scenarios are supported.
   * 
   * @example
   * AllContext
   */
  eventContext?: string;
  /**
   * @remarks
   * The supported event scenarios in which event subscription can be sent.
   */
  eventSendGroup?: string[];
  /**
   * @remarks
   * The time when event subscription was enabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1633071840000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the event subscription settings were most recently modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1633071850000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The primary key ID of the database.
   * 
   * @example
   * 1
   */
  id?: number;
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
   * The language of event notifications. Only **zh-CN** may be returned, which indicates that event notifications are sent in Chinese.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The risk level of the events that trigger notifications. Valid values:
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
   * The minimum interval between event notifications. Unit: seconds.
   * 
   * @example
   * 60
   */
  minInterval?: string;
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
      contactGroups: 'contactGroups',
      contactName: 'contactName',
      contacts: 'contacts',
      eventContext: 'eventContext',
      eventSendGroup: 'eventSendGroup',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
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
      contactGroups: { 'type': 'array', 'itemType': GetEventSubscriptionResponseBodyDataContactGroups },
      contactName: 'string',
      contacts: { 'type': 'array', 'itemType': GetEventSubscriptionResponseBodyDataContacts },
      eventContext: 'string',
      eventSendGroup: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      instanceId: 'string',
      lang: 'string',
      level: 'string',
      minInterval: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(Array.isArray(this.eventSendGroup)) {
      $dara.Model.validateArray(this.eventSendGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

