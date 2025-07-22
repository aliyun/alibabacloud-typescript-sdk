// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventSubscriptionResponseBodyDataContactGroups extends $dara.Model {
  /**
   * @remarks
   * The members of the alert contact group.
   * 
   * @example
   * "[\\"Mr. Zhang\\",\\"Ms. Wang\\",\\"Mr. Li\\"]"
   */
  contacts?: string;
  /**
   * @remarks
   * The description of the alert contact group.
   * 
   * @example
   * Default contact
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * Mr. Zhang
   */
  name?: string;
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
      contacts: 'contacts',
      description: 'description',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: 'string',
      description: 'string',
      name: 'string',
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

export class GetEventSubscriptionResponseBodyDataContacts extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=68fa29a9eaf3ba9994f54fxxxc1aa9879700308f90e9c23ebfb3663642c9****
   */
  dingtalkHook?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * a***@example.net
   */
  email?: string;
  /**
   * @remarks
   * The contact groups to which the alert contact belongs.
   */
  groups?: string[];
  /**
   * @remarks
   * Indicates whether the alert contact name is the same as the contact name on CloudMonitor.
   * 
   * * **true**
   * * **false**
   * 
   * @example
   * true
   */
  isCmsReduplicated?: boolean;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * Mr. Zhang
   */
  name?: string;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
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
      dingtalkHook: 'dingtalkHook',
      email: 'email',
      groups: 'groups',
      isCmsReduplicated: 'isCmsReduplicated',
      name: 'name',
      phone: 'phone',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkHook: 'string',
      email: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      isCmsReduplicated: 'boolean',
      name: 'string',
      phone: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetEventSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetEventSubscriptionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEventSubscriptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

