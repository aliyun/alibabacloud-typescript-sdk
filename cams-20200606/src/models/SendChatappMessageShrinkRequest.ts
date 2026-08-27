// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMessageShrinkRequest extends $dara.Model {
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
   * The message type (for WhatsApp direct send).
   * 
   * >Warning: Do not specify this parameter if you are not a Meta-invited customer. Otherwise, message sending fails.
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
   * - **line**
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
   * <details>
   * <summary>WhatsApp message notes:</summary>
   * 
   * - When **messageType** is **text**, the **text** field is required and the **Caption** field must not be specified.
   * - When **messageType** is **image**, the **Link** field is required.
   * - When **messageType** is **video**, the **Link** field is required.
   * - When **messageType** is **audio**, the **Link** field is required and the **Caption** field is invalid.
   * - When **messageType** is **document**, the **Link** and **FileName** fields are required and the **Caption** field is invalid.
   * - When **messageType** is **interactive**, the **type** and **action** fields are required.
   * - When **messageType** is **contacts**, the **name** field is required.
   * - When **messageType** is **location**, the **longitude** and **latitude** fields are required.
   * - When **messageType** is **sticker**, the **Link** field is required and the **Caption** and **FileName** fields are invalid.
   * - When **messageType** is **reaction**, the **messageId** and **emoji** fields are required.
   * </details>
   * 
   * <details>
   * <summary>Messenger message notes:</summary>
   * 
   * - When **messageType** is **text**, the **text** field is required.
   * - When **messageType** is **image**, **video**, **audio**, or **document**, the **link** field is required.
   * </details>
   * 
   * <details>
   * <summary>Instagram message notes:</summary>
   * 
   * - When **messageType** is **text**, the **text** field is required.
   * - When **messageType** is **image**, **video**, or **audio**, the **link** field is required.
   * </details>
   * 
   * <props="intl">
   * 
   * <details>
   * <summary>Viber message notes:</summary>
   * 
   * - When **messageType** is **text**, the **text** field is required.
   * - When **messageType** is **image**, the **link** field is required.
   * - When **messageType** is **video**, the **link**, **thumbnail**, **fileSize**, and **duration** fields are required.
   * - When **messageType** is **document**, the **link**, **fileName**, and **fileType** fields are required.
   * - When **messageType** is **text_button**, the **text**, **caption**, and **action** fields are required.
   * - When **messageType** is **text_image_button**, the **text**, **link**, **caption**, and **action** fields are required.
   * - When **messageType** is **text_video**, the **text**, **link**, **thumbnail**, **fileSize**, and **duration** fields are required.
   * - When **messageType** is **text_video_button**, the **text**, **link**, **thumbnail**, **fileSize**, **duration**, and **caption** fields are required, and the **action** field must not be empty.
   * </details>
   * 
   * 
   * <details>
   * <summary>Telegram message notes:</summary>
   * 
   * - When **messageType** is **text**, the **text** field is required.
   * - When **messageType** is **image**, **video**, **audio**, **gif**, or **sticker**, the **link** field is required.
   * - When **messageType** is **location**, the **latitude** and **longitude** fields are required.
   * - When **messageType** is **interactive**, the **type** field is required. You can send various Telegram message types. Example: {"type": "sendPhoto", "sendPhoto": {"photo":"http://img.png","caption":"21"}}. This can be used to send a Photo type message. For more information about message types, see [Telegram message body](https://core.telegram.org/bots/api#sendphoto).
   * </details>
   * 
   * <details>
   * <summary>LINE message notes:</summary>
   * 
   * - When **messageType** is **text** or **textV2**, the **text** field is required.
   * - When **messageType** is **image** or **video**, the **link** and **previewImageUrl** fields are required.
   * - When **messageType** is **audio**, the **link** and **duration** fields are required.
   * - When **messageType** is **buttons** or **confirm**, the **text** and **actions** fields are required.
   * - When **messageType** is **carousel** or **imageCarousel**, the **columns** field is required.
   * - When **messageType** is **quickReply**, the **text** and **items** fields are required.
   * - When **messageType** is **sticker**, the **packageId** and **stickerId** fields are required.
   * - When **messageType** is **location**, the **title**, **address**, **latitude**, and **longitude** fields are required.
   * - When **messageType** is **coupon**, the **couponId** field is required.
   * - When **messageType** is **imagemap**, the **baseUrl** and **altText** fields are required.
   * - When **messageType** is **flex**, the **contents** and **altText** fields are required.
   * - When **messageType** is **interactive**, you can pass in message formats supported by LINE:
   * 
   *   - To send a single message, the **type** field is required, and other fields follow the LINE message body format. Example: {"type": "text", "text": "test"}
   *   - To send multiple messages (LINE supports up to 5 messages at a time), the **messages** field is required. Example: {"messages": [{"type": "text", "text": "test"}, {"type": "image", "originalContentUrl": "http://img.png", "previewImageUrl": "http://img2.png"}]}
   *   - For more information, see [LINE message body](https://developers.line.biz/en/reference/messaging-api/#message-objects).
   * </details>
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
   * The SpaceId of the ISV sub-customer or the instance ID of a direct customer. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV customer WABA ID. 
   * 
   * > This parameter is deprecated. Use CustSpaceId instead.
   * > - You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The custom fallback content. This parameter is for the China International site. China site users can ignore this parameter.
   * 
   * @example
   * Fallback SMS
   */
  fallBackContent?: string;
  /**
   * @remarks
   * The fallback trigger time. This parameter is for the China International site. China site users can ignore this parameter. <props="intl">If the message does not return a delivered receipt within the specified time, fallback is triggered. If this parameter is not specified, fallback is triggered only when the message fails to send or a failure status report is received. Unit: seconds. Minimum value: 60. Maximum value: 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The fallback policy ID. This parameter is for the China International site. China site users can ignore this parameter. <props="intl">You can view the policy ID on the [**Fallback Strategy**](https://chatapp.console.alibabacloud.com/FallbackStrategy) page.
   * 
   * @example
   * S0****
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. This parameter is for the China International site. China site users can ignore this parameter.
   * <props="intl">Valid values:
   * <props="intl">- **undelivered**: fallback is triggered when the message cannot be delivered to the endpoint (template and parameter validation must pass during the sending state; blocked templates or numbers are not validated). This rule is used by default when the parameter value is empty.
   * <props="intl">- **sentFailed**: fallback is also triggered when template or template variable validation fails. Only the channelType, type, messageType, to, and from (existence check) parameters are strictly validated.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The Flow message object.
   * 
   * > Valid only for WHATSAPP.
   */
  flowActionShrink?: string;
  /**
   * @remarks
   * The sender number.
   * 
   * - When ChannelType is **whatsapp**, this is the phone number registered and bindng with WhatsApp. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **WABA Management** > **Number Management** page.
   * - When ChannelType is **messenger**, this is the Page ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Public Page** page.
   * - When ChannelType is **instagram**, this is the Instagram professional account ID (Account ID). You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Professional Account** page.
   * <props="intl">- When ChannelType is **viber**, this is the Viber Service ID. You can view it on the [**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Service ID Management** page.
   * - When ChannelType is **telegram**, this is the Telegram bot ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Bot Management** page.
   * - When ChannelType is **line**, this is the LINE Channel ID. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **LINE Official Account** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code.
   * 
   * > This parameter is deprecated. You can ignore it.
   * 
   * @example
   * 123123******
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The Viber message type. This parameter is for the China International site. China site users can ignore this parameter.
   * <props="intl">Valid values:
   * <props="intl">- **pormotion**: marketing or promotional messages.
   * <props="intl">- **transaction**: notification messages.
   * 
   * > Valid only for VIBER.
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
   * - pin: pin or unpin message (group messages only).
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
   * - interactive: custom pass-through Telegram message.
   * 
   * </details>
   * 
   * <details>
   * <summary>LINE</summary>
   * 
   * - text: text message.
   * 
   * - image: image message.
   * 
   * - video: video message.
   * 
   * - audio: audio message.
   * 
   * - buttons: button message.
   * 
   * - confirm: confirm message.
   * 
   * - carousel: carousel message.
   * 
   * - imageCarousel: image carousel message.
   * 
   * - quickReply: quick reply message.
   * 
   * - sticker: sticker message.
   * 
   * - location: location message.
   * 
   * - textV2: text message (V2).
   * 
   * - coupon: coupon message.
   * 
   * - imagemap: imagemap message.
   * 
   * - flex: flex message.
   * 
   * - interactive: custom pass-through LINE message.
   * 
   * > [For more information, see the message types supported by LINE](https://developers.line.biz/en/reference/messaging-api/#message-objects)
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
   * > This parameter is valid only for WHATSAPP.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payloadShrink?: string;
  /**
   * @remarks
   * The product information. This parameter is valid only for WhatsApp channel types. It refers to the product information you uploaded on Meta.
   * 
   * > Valid only for WHATSAPP.
   */
  productActionShrink?: string;
  /**
   * @remarks
   * The recipient type. Valid values:
   * 
   * - individual: an individual.
   * 
   * - group: a group.
   * 
   * - userId: WhatsApp BSUID. Valid only for WHATSAPP.
   * 
   * @example
   * individual
   */
  recipientType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information. Custom tag information when sending Viber messages.
   * 
   * > Valid only for VIBER.
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
  templateParamsShrink?: string;
  /**
   * @remarks
   * The recipient number.
   * 
   * - When ChannelType is **whatsapp**, this is the phone number or BSUID of the message recipient.
   * - When ChannelType is **messenger**, this is the Page-Scoped User ID generated when the user interacts with the Facebook page.
   * - When ChannelType is **instagram**, this is the Instagram User ID generated when the user interacts with the Instagram business or creator account.
   * <props="intl">- When ChannelType is **viber**, this is the phone number of the message recipient.
   * - When ChannelType is **telegram**, this is the Telegram chatId.
   * - When ChannelType is **line**, this is the LINE User ID.
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
   * The custom tracking data passed in for Viber message types. This parameter is for the China International site. China site users can ignore this parameter.
   * 
   * > Valid only for VIBER.
   * 
   * @example
   * Tracking Data
   */
  trackingData?: string;
  /**
   * @remarks
   * The Viber message sending timeout period. This parameter is for the China International site. China site users can ignore this parameter. <props="intl">Unit: seconds. Valid values: 30 to 1209600.
   * 
   * > Valid only for VIBER.
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
   * - message: a message in any format. This type of message can only be sent within 24 hours after receiving the last message from the user.
   * 
   * >Notice: When Type is set to template, you must specify TemplateCode. When Type is set to message, you must specify MessageType.
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

