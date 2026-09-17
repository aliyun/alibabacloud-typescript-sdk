// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotificationChannelsFilter extends $dara.Model {
  /**
   * @remarks
   * The alert contact list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.contacts.
   * 
   * @example
   * ["John","Jane"]
   */
  containsContacts?: string[];
  /**
   * @remarks
   * The custom webhook list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.customWebhooks.
   * 
   * @example
   * ["https://my-service.example.com/webhook/alert"]
   */
  containsCustomWebhooks?: string[];
  /**
   * @remarks
   * The DingTalk webhook list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.dingWebhooks.
   * 
   * @example
   * ["https://oapi.dingtalk.com/robot/send?access_token=abc123"]
   */
  containsDingWebhooks?: string[];
  /**
   * @remarks
   * The Lark webhook list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.fsWebhooks.
   * 
   * @example
   * ["https://open.feishu.cn/open-apis/bot/v2/hook/abc123"]
   */
  containsFsWebhooks?: string[];
  /**
   * @remarks
   * The alert contact group list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.groups.
   * 
   * @example
   * ["OpsTeam","SRETeam"]
   */
  containsGroups?: string[];
  /**
   * @remarks
   * The Slack webhook list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.slackWebhooks.
   * 
   * @example
   * ["https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXX"]
   */
  containsSlackWebhooks?: string[];
  /**
   * @remarks
   * The WeCom webhook list of the rule contains any value in the array (OR semantics), corresponding to V1 notification.wxWebhooks.
   * 
   * @example
   * ["https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=abc123"]
   */
  containsWxWebhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      containsContacts: 'containsContacts',
      containsCustomWebhooks: 'containsCustomWebhooks',
      containsDingWebhooks: 'containsDingWebhooks',
      containsFsWebhooks: 'containsFsWebhooks',
      containsGroups: 'containsGroups',
      containsSlackWebhooks: 'containsSlackWebhooks',
      containsWxWebhooks: 'containsWxWebhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containsContacts: { 'type': 'array', 'itemType': 'string' },
      containsCustomWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsDingWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsFsWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsGroups: { 'type': 'array', 'itemType': 'string' },
      containsSlackWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsWxWebhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.containsContacts)) {
      $dara.Model.validateArray(this.containsContacts);
    }
    if(Array.isArray(this.containsCustomWebhooks)) {
      $dara.Model.validateArray(this.containsCustomWebhooks);
    }
    if(Array.isArray(this.containsDingWebhooks)) {
      $dara.Model.validateArray(this.containsDingWebhooks);
    }
    if(Array.isArray(this.containsFsWebhooks)) {
      $dara.Model.validateArray(this.containsFsWebhooks);
    }
    if(Array.isArray(this.containsGroups)) {
      $dara.Model.validateArray(this.containsGroups);
    }
    if(Array.isArray(this.containsSlackWebhooks)) {
      $dara.Model.validateArray(this.containsSlackWebhooks);
    }
    if(Array.isArray(this.containsWxWebhooks)) {
      $dara.Model.validateArray(this.containsWxWebhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

