// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMessageRequestFlowAction extends $dara.Model {
  flowActionData?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  flowToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowActionData: 'FlowActionData',
      flowToken: 'FlowToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowActionData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowToken: 'string',
    };
  }

  validate() {
    if(this.flowActionData) {
      $dara.Model.validateMap(this.flowActionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestProductActionSectionsProductItems extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  productRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      productRetailerId: 'ProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productRetailerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestProductActionSections extends $dara.Model {
  productItems?: SendChatappMessageRequestProductActionSectionsProductItems[];
  /**
   * @example
   * 示例值
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      productItems: 'ProductItems',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItems: { 'type': 'array', 'itemType': SendChatappMessageRequestProductActionSectionsProductItems },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productItems)) {
      $dara.Model.validateArray(this.productItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequestProductAction extends $dara.Model {
  sections?: SendChatappMessageRequestProductActionSections[];
  /**
   * @example
   * 示例值示例值示例值
   */
  thumbnailProductRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      sections: 'Sections',
      thumbnailProductRetailerId: 'ThumbnailProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sections: { 'type': 'array', 'itemType': SendChatappMessageRequestProductActionSections },
      thumbnailProductRetailerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sections)) {
      $dara.Model.validateArray(this.sections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatappMessageRequest extends $dara.Model {
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
  flowAction?: SendChatappMessageRequestFlowAction;
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
  payload?: string[];
  productAction?: SendChatappMessageRequestProductAction;
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
  templateParams?: { [key: string]: string };
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
      flowAction: 'FlowAction',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      messageCampaignId: 'MessageCampaignId',
      messageType: 'MessageType',
      ownerId: 'OwnerId',
      payload: 'Payload',
      productAction: 'ProductAction',
      recipientType: 'RecipientType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateParams: 'TemplateParams',
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
      flowAction: SendChatappMessageRequestFlowAction,
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      messageCampaignId: 'string',
      messageType: 'string',
      ownerId: 'number',
      payload: { 'type': 'array', 'itemType': 'string' },
      productAction: SendChatappMessageRequestProductAction,
      recipientType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
      tokenType: 'string',
      trackingData: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.flowAction && typeof (this.flowAction as any).validate === 'function') {
      (this.flowAction as any).validate();
    }
    if(Array.isArray(this.payload)) {
      $dara.Model.validateArray(this.payload);
    }
    if(this.productAction && typeof (this.productAction as any).validate === 'function') {
      (this.productAction as any).validate();
    }
    if(this.templateParams) {
      $dara.Model.validateMap(this.templateParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

