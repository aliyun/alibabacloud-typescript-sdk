// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleTimeSpan } from "./AlertRuleTimeSpan";
import { SeverityNotifyConfig } from "./SeverityNotifyConfig";


export class AlertRuleNotification extends $dara.Model {
  /**
   * @remarks
   * The list of contact IDs.
   */
  contacts?: string[];
  /**
   * @remarks
   * The list of custom webhook Notification Recipient IDs.
   */
  customWebhooks?: string[];
  /**
   * @remarks
   * The list of DingTalk Cool App webhook Notification Recipient IDs.
   */
  dingCoolAppWebhooks?: string[];
  /**
   * @remarks
   * The list of DingTalk webhook Notification Recipient IDs.
   */
  dingWebhooks?: string[];
  /**
   * @remarks
   * The list of Lark webhook Notification Recipient IDs.
   */
  fsWebhooks?: string[];
  /**
   * @remarks
   * The list of contact group IDs.
   */
  groups?: string[];
  /**
   * @remarks
   * The notification time period. Notifications are sent only during this time period.
   */
  notifyTime?: AlertRuleTimeSpan;
  qwencloudContacts?: { [key: string]: {[key: string]: any} };
  sendOk?: boolean;
  severityNotifications?: { [key: string]: SeverityNotifyConfig };
  /**
   * @remarks
   * The notification mute duration, in seconds.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The list of Slack webhook Notification Recipient IDs.
   */
  slackWebhooks?: string[];
  /**
   * @remarks
   * The list of WeChat webhook Notification Recipient IDs.
   */
  wxWebhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      customWebhooks: 'customWebhooks',
      dingCoolAppWebhooks: 'dingCoolAppWebhooks',
      dingWebhooks: 'dingWebhooks',
      fsWebhooks: 'fsWebhooks',
      groups: 'groups',
      notifyTime: 'notifyTime',
      qwencloudContacts: 'qwencloudContacts',
      sendOk: 'sendOk',
      severityNotifications: 'severityNotifications',
      silenceTime: 'silenceTime',
      slackWebhooks: 'slackWebhooks',
      wxWebhooks: 'wxWebhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      customWebhooks: { 'type': 'array', 'itemType': 'string' },
      dingCoolAppWebhooks: { 'type': 'array', 'itemType': 'string' },
      dingWebhooks: { 'type': 'array', 'itemType': 'string' },
      fsWebhooks: { 'type': 'array', 'itemType': 'string' },
      groups: { 'type': 'array', 'itemType': 'string' },
      notifyTime: AlertRuleTimeSpan,
      qwencloudContacts: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      sendOk: 'boolean',
      severityNotifications: { 'type': 'map', 'keyType': 'string', 'valueType': SeverityNotifyConfig },
      silenceTime: 'number',
      slackWebhooks: { 'type': 'array', 'itemType': 'string' },
      wxWebhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(Array.isArray(this.customWebhooks)) {
      $dara.Model.validateArray(this.customWebhooks);
    }
    if(Array.isArray(this.dingCoolAppWebhooks)) {
      $dara.Model.validateArray(this.dingCoolAppWebhooks);
    }
    if(Array.isArray(this.dingWebhooks)) {
      $dara.Model.validateArray(this.dingWebhooks);
    }
    if(Array.isArray(this.fsWebhooks)) {
      $dara.Model.validateArray(this.fsWebhooks);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(this.notifyTime && typeof (this.notifyTime as any).validate === 'function') {
      (this.notifyTime as any).validate();
    }
    if(this.qwencloudContacts) {
      $dara.Model.validateMap(this.qwencloudContacts);
    }
    if(this.severityNotifications) {
      $dara.Model.validateMap(this.severityNotifications);
    }
    if(Array.isArray(this.slackWebhooks)) {
      $dara.Model.validateArray(this.slackWebhooks);
    }
    if(Array.isArray(this.wxWebhooks)) {
      $dara.Model.validateArray(this.wxWebhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

