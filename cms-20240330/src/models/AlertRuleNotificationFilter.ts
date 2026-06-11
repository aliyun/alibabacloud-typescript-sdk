// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleNotificationFilter extends $dara.Model {
  /**
   * @remarks
   * A list of contact IDs for filtering.
   */
  contacts?: string[];
  /**
   * @remarks
   * A list of custom webhook IDs for filtering.
   */
  customWebhooks?: string[];
  /**
   * @remarks
   * A list of DingTalk webhook IDs for filtering.
   */
  dingWebhooks?: string[];
  /**
   * @remarks
   * A list of Lark webhook IDs for filtering.
   */
  fsWebhooks?: string[];
  /**
   * @remarks
   * A list of contact group IDs for filtering.
   */
  groups?: string[];
  /**
   * @remarks
   * A list of Slack webhook IDs for filtering.
   */
  slackWebhooks?: string[];
  /**
   * @remarks
   * A list of WeChat webhook IDs for filtering.
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

