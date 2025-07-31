// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMassMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  channelType?: string;
  /**
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  custWabaId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  fallBackContent?: string;
  fallBackDuration?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  fallBackId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  fallBackRule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  from?: string;
  /**
   * @example
   * 示例值示例值
   */
  isvCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  senderListShrink?: string;
  /**
   * @example
   * 示例值示例值
   */
  tag?: string;
  /**
   * @example
   * 示例值示例值
   */
  taskId?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @example
   * 46
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      senderListShrink: 'SenderList',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      senderListShrink: 'string',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

