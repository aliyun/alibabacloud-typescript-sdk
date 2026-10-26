// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleNotificationFilter extends $dara.Model {
  /**
   * @remarks
   * The contact ID filter.
   */
  contacts?: string[];
  /**
   * @remarks
   * The custom webhook ID filter.
   */
  customWebhooks?: string[];
  /**
   * @remarks
   * The DingTalk webhook ID filter.
   */
  dingWebhooks?: string[];
  /**
   * @remarks
   * The Lark webhook ID filter.
   */
  fsWebhooks?: string[];
  /**
   * @remarks
   * The contact group filter configuration.
   */
  groups?: string[];
  /**
   * @remarks
   * The Slack webhook ID filter list.
   */
  slackWebhooks?: string[];
  /**
   * @remarks
   * The WeChat webhook ID filter.
   */
  wxWebhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      customWebhooks: 'customWebhooks',
      dingWebhooks: 'dingWebhooks',
      fsWebhooks: 'fsWebhooks',
      groups: 'groups',
      slackWebhooks: 'slackWebhooks',
      wxWebhooks: 'wxWebhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      customWebhooks: { 'type': 'array', 'itemType': 'string' },
      dingWebhooks: { 'type': 'array', 'itemType': 'string' },
      fsWebhooks: { 'type': 'array', 'itemType': 'string' },
      groups: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.dingWebhooks)) {
      $dara.Model.validateArray(this.dingWebhooks);
    }
    if(Array.isArray(this.fsWebhooks)) {
      $dara.Model.validateArray(this.fsWebhooks);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
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

