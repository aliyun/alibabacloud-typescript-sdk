// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMessageRequestFlowAction extends $dara.Model {
  /**
   * @remarks
   * The collection of Flow default parameters.
   */
  flowActionData?: { [key: string]: any };
  /**
   * @remarks
   * The custom Flow token information.
   * 
   * @example
   * kde****
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
   * @remarks
   * The product ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Catalog Management** > **Product Management** page, or obtain it by calling the [ListProduct](https://help.aliyun.com/document_detail/2557786.html) operation.
   * 
   * @example
   * ksi3****
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
  /**
   * @remarks
   * The list of product information.
   */
  productItems?: SendChatappMessageRequestProductActionSectionsProductItems[];
  /**
   * @remarks
   * The category name. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Catalog Management** > **Product Management** page, or obtain it by calling the [ListProduct](https://help.aliyun.com/document_detail/2557786.html) operation.
   * 
   * @example
   * abcd
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
  /**
   * @remarks
   * The list of product categories (up to 10 categories and 30 products).
   */
  sections?: SendChatappMessageRequestProductActionSections[];
  /**
   * @remarks
   * The product catalog ID. You can obtain this ID by calling the [ListProductCatalog](https://help.aliyun.com/document_detail/2539783.html) operation.
   * 
   * @example
   * skkks99****
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
   * @remarks
   * The Meta ad account ID.
   * > This parameter is a test parameter that is not fully available. Ignore this parameter.
   * 
   * @example
   * 123123********
   */
  adAccountId?: string;
  /**
   * @remarks
   * The message category (for WhatsApp direct send).
   * 
   * >Warning: Do not specify this parameter unless you are a Meta-invited customer. Otherwise, message delivery will fail.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  /**
   * @remarks
   * The channel type. Valid values:  
   * 
   * - **whatsapp** 
   * 
   * - **messenger** 
   * 
   * - **instagram**
   * 
   * - **telegram**
   * 
   * <props="intl">- **viber**
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The message content.
   * 
   * **WhatsApp message notes:**
   * - If **messageType** is **text**, the **text** field is required and the **Caption** field must not be specified.
   * - If **messageType** is **image**, the **Link** field is required.
   * - If **messageType** is **video**, the **Link** field is required.
   * - If **messageType** is **audio**, the **Link** field is required and the **Caption** field is invalid.
   * - If **messageType** is **document**, the **Link** and **FileName** fields are required and the **Caption** field is invalid.
   * - If **messageType** is **interactive**, the **type** and **action** fields are required.
   * - If **messageType** is **contacts**, the **name** field is required.
   * - If **messageType** is **location**, the **longitude** and **latitude** fields are required.
   * - If **messageType** is **sticker**, the **Link** field is required and the **Caption** and **FileName** fields are invalid.
   * - If **messageType** is **reaction**, the **messageId** and **emoji** fields are required.
   * 
   * 
   * **Messenger message notes:**
   * - If **messageType** is **text**, the **text** field is required.
   * - If **messageType** is **image**, **video**, **audio**, or **document**, the **link** field is required.
   * 
   * **Instagram message notes:**
   * - If **messageType** is **text**, the **text** field is required.
   * - If **messageType** is **image**, **video**, or **audio**, the **link** field is required.
   * 
   * 
   * <props="intl">**Viber message notes:**
   * <props="intl">- If **messageType** is **text**, the **text** field is required.
   * <props="intl">- If **messageType** is **image**, the **link** field is required.
   * <props="intl">- If **messageType** is **video**, the **link**, **thumbnail**, **fileSize**, and **duration** fields are required.
   * <props="intl">- If **messageType** is **document**, the **link**, **fileName**, and **fileType** fields are required.
   * <props="intl">- If **messageType** is **text_button**, the **text**, **caption**, and **action** fields are required.
   * <props="intl">- If **messageType** is **text_image_button**, the **text**, **link**, **caption**, and **action** fields are required.
   * <props="intl">- If **messageType** is **text_video**, the **text**, **link**, **thumbnail**, **fileSize**, and **duration** fields are required.
   * <props="intl">- If **messageType** is **text_video_button**, the **text**, **link**, **thumbnail**, **fileSize**, **duration**, and **caption** fields are required, and the **action** field must not be empty.
   * 
   * @example
   * {
   *   "text": "hello,whatsapp",
   *   "link": "https://*******",
   *   "caption": "****",
   *   "fileName": "****"
   * }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the message to reply to. This is the ID of a previously sent or received message.
   * 
   * @example
   * 61851ccb2f1365b16aee****
   */
  contextMessageId?: string;
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer, or the direct customer instance ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV customer WABA ID. This parameter is deprecated. Use CustSpaceId instead, which is the direct customer instance ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The custom fallback content. This parameter is for the China site (Chinese mainland). China site users can ignore this parameter.
   * 
   * @example
   * Fallback SMS
   */
  fallBackContent?: string;
  /**
   * @remarks
   * The fallback trigger time. This parameter is for the international site. China site users can ignore this parameter. <props="intl">If the message does not return a delivered receipt within the specified time, fallback is triggered. If this parameter is not specified, fallback is not triggered based on time and occurs only when the message fails to send or a failure status report is received. Unit: seconds. Minimum value: 60. Maximum value: 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The fallback policy ID. This parameter is for the China site (Chinese mainland). China site users can ignore this parameter. <props="intl">You can view the policy ID on the [**Fallback Policy**](https://chatapp.console.alibabacloud.com/FallbackStrategy) page.
   * 
   * @example
   * S0****
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. This parameter is for the international site. China site users can ignore this parameter.
   * <props="intl">Valid values:
   * <props="intl">- **undelivered**: fallback is triggered when the message cannot be delivered to the device (template and parameter validation must pass at the sending stage; template bans or number bans are not validated). This rule is used by default if the parameter value is empty.
   * <props="intl">- **sentFailed**: fallback is also triggered when template or template variable validation fails. Only the channelType, type, messageType, to, and from (existence check) parameters are strictly validated.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The Flow message object.
   */
  flowAction?: SendChatappMessageRequestFlowAction;
  /**
   * @remarks
   * The sender number.
   * 
   * - If ChannelType is set to **whatsapp**, this is the phone number registered and bindded with WhatsApp. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **WABA Management** > **Phone Number Management** page.
   * - If ChannelType is set to **messenger**, this is the Page ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Public Page** page.
   * - If ChannelType is set to **instagram**, this is the Instagram professional account ID (Account ID). You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Professional Account** page.
   * <props="intl">- If ChannelType is set to **viber**, this is the Viber Service ID. You can view it on the [**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Service ID Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code used to verify whether a RAM user is authorized by the ISV. This parameter is deprecated and can be ignored.
   * 
   * @example
   * 123123******
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The Viber message type. This parameter is for the international site. China site users can ignore this parameter.
   * <props="intl">Valid values:
   * <props="intl">- **pormotion**: marketing or promotional messages.
   * <props="intl">- **transaction**: notification messages.
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language. For a list of language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The campaign message ID.
   * 
   * > This parameter is a test parameter that is not fully available. Ignore this parameter.
   * 
   * @example
   * 123123********
   */
  messageCampaignId?: string;
  /**
   * @remarks
   * The detailed message type when Type is set to message. Valid values:
   * 
   * <details>
   * <summary>WHATSAPP</summary>
   * 
   * - text: text message.
   * 
   * - image: image message.
   * 
   * - video: video message.
   * 
   * - audio: audio message.
   * 
   * - document: document message.
   * 
   * - interactive: interactive message.
   * 
   * - location: location message.
   * 
   * - contacts: contacts message.
   * 
   * - reaction: reaction message.
   * 
   * - sticker: sticker message.
   * 
   * - typing_indicator: typing indicator message.
   * 
   * - pin: pin or unpin message (available only for group messages).
   * 
   * - carousel: carousel message.
   * </details>
   * 
   * <details>
   * <summary>VIBER</summary>
   * 
   * - text: text message.
   * 
   * - image: image message.
   * 
   * - text_image_button: text + image + button message.
   * 
   * - text_button: text + button message.
   * 
   * - document: document message.
   * 
   * - video: video message.
   * 
   * - text_video: text + video message.
   * 
   * - text_video_button: text + video + button message.
   * 
   * - text_image: text + image message.
   * </details>
   * 
   * 
   * <details>
   * <summary>MESSENGER / INSTAGRAM</summary>
   * 
   * - text: text message.
   * 
   * - image: image message.
   * 
   * - video: video message.
   * 
   * - document: document message.
   * 
   * - audio: audio message.
   * 
   * - interactive: interactive message.
   * 
   * - couponTemplate: coupon template message.
   * 
   * - regularTemplate: regular template message.
   * 
   * - quickReply: quick reply message.
   * 
   * - buttonTemplate: button template message.
   * </details>
   * 
   * <details>
   * <summary>TELEGRAM</summary>
   * 
   * - text: text message.
   * 
   * - image: image message.
   * 
   * - video: video message.
   * 
   * - audio: audio message.
   * 
   * - document: document message.
   * 
   * - location: location message.
   * 
   * - gif: animated GIF message.
   * 
   * - sticker: sticker message.
   * 
   * </details>
   * 
   * @example
   * text
   */
  messageType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The collection of button trigger messages.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payload?: string[];
  /**
   * @remarks
   * The product information. This parameter applies only to the WhatsApp channel type and refers to the product information you uploaded on Meta.
   */
  productAction?: SendChatappMessageRequestProductAction;
  /**
   * @remarks
   * The recipient type. Valid values:
   * 
   * - individual: an individual.
   * 
   * - group: a group.
   * 
   * @example
   * individual
   */
  recipientType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information. Custom tag information for Viber message delivery.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The custom task ID.
   * 
   * @example
   * 10000****
   */
  taskId?: string;
  /**
   * @remarks
   * The template code. You can view the template code on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Template Design** page.
   * 
   * @example
   * 1119***************
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name. You can view the template name on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Template Design** page.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The collection of template parameters.
   */
  templateParams?: { [key: string]: string };
  /**
   * @remarks
   * The recipient number.
   * 
   * - If ChannelType is set to **whatsapp**, this is the phone number of the message recipient.
   * - If ChannelType is set to **messenger**, this is the Page-Scoped User ID generated when the user interacts with the Facebook page.
   * - If ChannelType is set to **instagram**, this is the Instagram User ID generated when the user interacts with the Instagram business or creator account.
   * <props="intl">- If ChannelType is set to **viber**, this is the phone number of the message recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * 861388988****
   */
  to?: string;
  /**
   * @remarks
   * The token type.
   * > This parameter is a test parameter that is not fully available. Ignore this parameter.
   * 
   * @example
   * bearer
   */
  tokenType?: string;
  /**
   * @remarks
   * The custom tracking data passed in for Viber message types. This parameter is for the international site. China site users can ignore this parameter.
   * 
   * @example
   * Tracking Data
   */
  trackingData?: string;
  /**
   * @remarks
   * The timeout period for Viber message delivery. This parameter is for the international site. China site users can ignore this parameter. <props="intl">Unit: seconds. Valid values: 30 to 1209600.
   * 
   * @example
   * 50
   */
  ttl?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - template: a message template that has been approved in the console. This type of message can be sent at any time.
   * 
   * - message: a message in any format. This type of message can be sent only within 24 hours after the last message is received from the user.
   * 
   * >Notice: If Type is set to template, you must specify TemplateCode. If Type is set to message, you must specify MessageType.
   * 
   * This parameter is required.
   * 
   * @example
   * message
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      category: 'Category',
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
      category: 'string',
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

