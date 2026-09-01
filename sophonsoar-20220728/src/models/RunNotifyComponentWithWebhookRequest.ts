// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the playbook action.
   * 
   * This parameter is required.
   * 
   * @example
   * notifyByCustom
   */
  actionName?: string;
  /**
   * @remarks
   * The ID of the resource. This parameter is deprecated and no longer used.
   * 
   * @example
   * 1
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the playbook component.
   * 
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * The content of the message sent by the webhook of the DingTalk group robot.
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
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The message type of the webhook. Valid values:
   * 
   * - text
   * 
   * - markdown
   * 
   * - actionCard
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  msgType?: string;
  /**
   * @remarks
   * The name of the playbook node.
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
   * > Call the [DescribePlaybooks](https://help.aliyun.com/document_detail/3000306.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 94bc318c-****-4cba-****-801ccb0d739f
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The UID of the member that the administrator wants to switch to.
   * 
   * @example
   * 126339xxxx805497
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0 (default): the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that belong to the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * The secret key for the webhook of the DingTalk group robot. This parameter is deprecated and no longer used.
   * 
   * @example
   * SECc1*****e157b32b380f********bb8c70e1a67a22072
   */
  secret?: string;
  /**
   * @remarks
   * The IDs of the DingTalk robots. Obtain the IDs on the robot management page in Message Center.
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

