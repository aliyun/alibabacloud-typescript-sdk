// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleNotificationFilter extends $dara.Model {
  /**
   * @remarks
   * 联系人ID过滤
   */
  contacts?: string[];
  /**
   * @remarks
   * 自定义webhook ID过滤
   */
  customWebhooks?: string[];
  /**
   * @remarks
   * 钉钉webhook ID过滤
   */
  dingWebhooks?: string[];
  /**
   * @remarks
   * 飞书webhook ID过滤
   */
  fsWebhooks?: string[];
  /**
   * @remarks
   * 联系人组过滤配置
   */
  groups?: string[];
  /**
   * @remarks
   * slack webhook ID过滤列表
   */
  slackWebhooks?: string[];
  /**
   * @remarks
   * 微信webhook ID过滤
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

