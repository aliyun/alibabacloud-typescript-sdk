// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the action in the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * notifyByCustom
   */
  actionName?: string;
  /**
   * @remarks
   * The ID of the resource. This parameter is deprecated.
   * 
   * @example
   * 1
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the component in the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * The message body sent by the DingTalk group chatbot webhook.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "at": {
   *         "atMobiles":[
   *             "180xxxxxx"
   *         ],
   *         "atUserIds":[
   *             "user123"
   *         ],
   *         "isAtAll": false
   *     },
   *     "text": {
   *         "content":"1234"
   *     },
   *     "msgtype":"text"
   * }
   */
  content?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the webhook message. Valid values:
   * *   text.
   * *   markdown.
   * *   actionCard.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  msgType?: string;
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * notify_message_node
   */
  nodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 94bc318c-****-4cba-****-801ccb0d739f
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The ID of the user who switches from the current view to the destination view by using the management account.
   * 
   * @example
   * 126339xxxx805497
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * *   0 (default): the view of the current Alibaba Cloud account.
   * *   1: the view of all accounts for the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * The message key of the DingTalk chatbot webhook. This parameter is deprecated.
   * 
   * @example
   * SECc1*****e157b32b380f********bb8c70e1a67a22072
   */
  secret?: string;
  /**
   * @remarks
   * The IDs of chatbots that are configured in the message center. Only DingTalk chatbots are supported.
   * 
   * >  You can call the [ListEncryptWebhooks](~~ListEncryptWebhooks~~) operation to query the chatbot IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"10651\\"]
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      assetId: 'AssetId',
      componentName: 'ComponentName',
      content: 'Content',
      lang: 'Lang',
      msgType: 'MsgType',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      secret: 'Secret',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      assetId: 'string',
      componentName: 'string',
      content: 'string',
      lang: 'string',
      msgType: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
      roleFor: 'number',
      roleType: 'string',
      secret: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

