// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleTimeSpan } from "./AlertRuleTimeSpan";


export class AlertRuleNotification extends $dara.Model {
  /**
   * @remarks
   * List of contact IDs.
   */
  contacts?: string[];
  /**
   * @remarks
   * List of custom webhook notification object IDs.
   */
  customWebhooks?: string[];
  dingCoolAppWebhooks?: string[];
  /**
   * @remarks
   * List of DingTalk webhook notification object IDs.
   */
  dingWebhooks?: string[];
  /**
   * @remarks
   * List of Feishu webhook notification object IDs.
   */
  fsWebhooks?: string[];
  /**
   * @remarks
   * List of contact group IDs.
   */
  groups?: string[];
  /**
   * @remarks
   * Notification time window; notifications are sent only during this period.
   */
  notifyTime?: AlertRuleTimeSpan;
  /**
   * @remarks
   * Notification silence duration, in seconds.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * List of Slack webhook notification object IDs.
   */
  slackWebhooks?: string[];
  /**
   * @remarks
   * List of WeChat webhook notification object IDs.
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

