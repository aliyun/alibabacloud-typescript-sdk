// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMessageShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  adAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  channelType?: string;
  /**
   * @remarks
   * The message content.
   * 
   * **Notes on WhatsApp messages:**
   * 
   * *   If you set **messageType** to **text**, you must specify **text** and must not specify **Caption**.
   * *   If you set **messageType** to **image**, you must specify **Link**.
   * *   If you set **messageType** to **video**, you must specify **Link**.
   * *   If you set **messageType** to **audio**, **Link** is required and **Caption** is invalid.
   * *   If you set **messageType** to **document**, **Link** and **FileName** are required and **Caption** is invalid.
   * *   If you set **messageType** to **interactive**, you must specify **type** and **action**.
   * *   If you set **messageType** to **contacts**, you must specify **name**.
   * *   If you set **messageType** to **location**, you must specify **longitude** and **latitude**.
   * *   If you set **messageType** to **sticker**, you must specify **Link**, and **Caption** and **FileName** are invalid.
   * *   If you set **messageType** to **reaction**, you must specify **messageId** and **emoji**.
   * 
   * **Notes on Viber messages:**
   * 
   * *   If you set **messageType** to **text**, you must specify **text**.
   * *   If you set **messageType** to **image**, you must specify **link**.
   * *   If you set **messageType** to **video**, you must specify **link**, **thumbnail**, **fileSize**, and **duration**.
   * *   If you set **messageType** to **document**, you must specify **link**, **fileName**, and **fileType**.
   * *   If you set **messageType** to **text_button**, you must specify **text**, **caption**, and **action**.
   * *   If you set **messageType** to **text_image_button**, you must specify **text**, **link**, **caption**, and **action**.
   * *   If you set **messageType** to **text_video**, you must specify **text**, **link**, **thumbnail**, **fileSize**, and **duration**.
   * *   If you set **messageType** to **text_video_button**, you must specify **text**, **link**, **thumbnail**, **fileSize**, **duration**, and **caption**. In addition, you must not specify **action**.
   * 
   * @example
   * {\\"text\\": \\"hello whatsapp\\", \\"link\\": \\"\\", \\"caption\\": \\"\\", \\"fileName\\": \\"\\" }
   */
  content?: string;
  /**
   * @example
   * 示例值
   */
  contextMessageId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  custSpaceId?: string;
  /**
   * @example
   * 示例值示例值
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @example
   * 示例值
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
   * 示例值示例值
   */
  fallBackRule?: string;
  flowActionShrink?: string;
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
   * 示例值
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @example
   * 示例值
   */
  label?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  language?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  messageCampaignId?: string;
  /**
   * @example
   * 示例值
   */
  messageType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The payload of the button.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payloadShrink?: string;
  productActionShrink?: string;
  /**
   * @example
   * individual
   */
  recipientType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * 示例值示例值示例值
   */
  templateCode?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  templateName?: string;
  templateParamsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  to?: string;
  /**
   * @example
   * 示例值
   */
  tokenType?: string;
  /**
   * @example
   * 示例值示例值
   */
  trackingData?: string;
  ttl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      channelType: 'ChannelType',
      content: 'Content',
      contextMessageId: 'ContextMessageId',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      flowActionShrink: 'FlowAction',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      messageCampaignId: 'MessageCampaignId',
      messageType: 'MessageType',
      ownerId: 'OwnerId',
      payloadShrink: 'Payload',
      productActionShrink: 'ProductAction',
      recipientType: 'RecipientType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateParamsShrink: 'TemplateParams',
      to: 'To',
      tokenType: 'TokenType',
      trackingData: 'TrackingData',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      channelType: 'string',
      content: 'string',
      contextMessageId: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      flowActionShrink: 'string',
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      messageCampaignId: 'string',
      messageType: 'string',
      ownerId: 'number',
      payloadShrink: 'string',
      productActionShrink: 'string',
      recipientType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateParamsShrink: 'string',
      to: 'string',
      tokenType: 'string',
      trackingData: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

