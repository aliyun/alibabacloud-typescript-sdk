// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * > This parameter is for internal testing, is not generally available, and can be ignored.
   * 
   * @example
   * 123123********
   */
  adAccountId?: string;
  /**
   * @remarks
   * The message category for direct WhatsApp sending.
   * 
   * >Warning: 
   * 
   * Specify this parameter only if you are a Meta-invited customer. Otherwise, the message may fail to send.
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
   * <props="intl">
   * 
   * - **viber**
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The message content, in a JSON-formatted string.
   * 
   * **Notes for WhatsApp messages:**
   * 
   * - If `MessageType` is `text`, the `text` field is required, and the `Caption` field is not supported.
   * 
   * - If `MessageType` is `image`, the `Link` field is required.
   * 
   * - If `MessageType` is `video`, the `Link` field is required.
   * 
   * - If `MessageType` is `audio`, the `Link` field is required. The `Caption` field is not supported.
   * 
   * - If `MessageType` is `document`, the `Link` and `FileName` fields are required. The `Caption` field is not supported.
   * 
   * - If `MessageType` is `interactive`, the `type` and `action` fields are required.
   * 
   * - If `MessageType` is `contacts`, the `name` field is required.
   * 
   * - If `MessageType` is `location`, the `longitude` and `latitude` fields are required.
   * 
   * - If `MessageType` is `sticker`, the `Link` field is required. The `Caption` and `FileName` fields are not supported.
   * 
   * - If `MessageType` is `reaction`, the `messageId` and `emoji` fields are required.
   * 
   * **Notes for Messenger messages:**
   * 
   * - If `MessageType` is `text`, the `text` field is required.
   * 
   * - If `MessageType` is `image`, `video`, `audio`, or `document`, the `link` field is required.
   * 
   * **Notes for Instagram messages:**
   * 
   * - If `MessageType` is `text`, the `text` field is required.
   * 
   * - If `MessageType` is `image`, `video`, or `audio`, the `link` field is required.
   * 
   * <props="intl">
   * 
   * **Notes for Viber messages:**
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `text`, the `text` field is required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `image`, the `link` field is required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `video`, the `link`, `thumbnail`, `fileSize`, and `duration` fields are required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `document`, the `link`, `fileName`, and `fileType` fields are required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `text_button`, the `text`, `caption`, and `action` fields are required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `text_image_button`, the `text`, `link`, `caption`, and `action` fields are required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `text_video`, the `text`, `link`, `thumbnail`, `fileSize`, and `duration` fields are required.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `MessageType` is `text_video_button`, the `text`, `link`, `thumbnail`, `fileSize`, `duration`, and `caption` fields are required. The `action` field is not supported.
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
   * The ID of the message to which you are replying.
   * 
   * @example
   * 61851ccb2f1365b16aee****
   */
  contextMessageId?: string;
  /**
   * @remarks
   * The Space ID of the ISV\\"s sub-account. For a direct customer, this is the Instance ID. You can find the ID on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   */
  custSpaceId?: string;
  /**
   * @remarks
   * **Deprecated.** Use `CustSpaceId` instead. The WABA ID of an ISV\\"s customer. For a direct customer, this is the Instance ID. You can find the ID on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The custom content of the fallback message. This parameter is available only on the International Site and can be ignored if you are using the China site.
   * 
   * @example
   * Fallback SMS
   */
  fallBackContent?: string;
  /**
   * @remarks
   * The duration after which a fallback is triggered. This parameter is available only on the International Site and can be ignored if you are using the China site.<props="intl"> If a delivery receipt is not returned within the specified period, a fallback is triggered. If this parameter is omitted, a fallback is triggered only if the message fails to send or a failed delivery receipt is returned. Unit: seconds. The value must be between 60 and 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The ID of the fallback strategy. This parameter is available only on the International Site and can be ignored if you are using the China site.<props="intl"> You can find the strategy ID on the [**Fallback Policy**](https://chatapp.console.alibabacloud.com/FallbackStrategy) page.
   * 
   * @example
   * S0****
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. This parameter is available only on the International Site and can be ignored if you are using the China site.
   * <props="intl">Valid values:
   * 
   * <props="intl">
   * 
   * - **undelivered**: A fallback is triggered if message delivery fails. The template and parameters must be valid at the time of sending. Blocked templates or phone numbers are not validated. This is the default rule if the parameter is empty.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **sentFailed**: A fallback is triggered if the message fails parameter validation, such as for the template or template parameters. Only the existence of `channelType`, `type`, `messageType`, `to`, and `from` is strictly validated.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The Flow message object.
   */
  flowActionShrink?: string;
  /**
   * @remarks
   * The sender\\"s number or ID.
   * 
   * - If `ChannelType` is **whatsapp**, this is the phone number registered with WhatsApp. You can find the number on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Phone Number Management** page.
   * 
   * - If `ChannelType` is **messenger**, this is the Facebook Page ID. You can find this ID on your <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Facebook Page** page.
   * 
   * - If `ChannelType` is **instagram**, this is the Instagram professional account ID (Account ID). You can find the ID on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Professional Account** page.
   * 
   * <props="intl">
   * 
   * - If `ChannelType` is **viber**, this is the Viber service ID (Service ID). You can find the ID on the [**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Service Number Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * **Deprecated.** A verification code used to authorize an ISV\\"s sub-account. You can ignore this parameter.
   * 
   * @example
   * 123123******
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The Viber message type. This parameter is available only on the International Site and can be ignored if you are using the China site.
   * <props="intl">Valid values:
   * 
   * <props="intl">
   * 
   * - **promotion**: A promotional or marketing message.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **transaction**: A notification message.
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language of the message template. For a list of supported languages and their corresponding codes, see [language code](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The ID of the message campaign.
   * 
   * > This parameter is for internal testing, is not generally available, and can be ignored.
   * 
   * @example
   * 123123********
   */
  messageCampaignId?: string;
  /**
   * @remarks
   * The message type to use when `Type` is set to `message`. The valid values vary based on the channel type:
   * 
   * <details>
   * 
   * <summary>
   * 
   * WHATSAPP
   * 
   * </summary>
   * 
   * - `text`: A text message.
   * 
   * - `image`: An image message.
   * 
   * - `video`: A video message.
   * 
   * - `audio`: An audio message.
   * 
   * - `document`: A document message.
   * 
   * - `interactive`: An interactive message.
   * 
   * - `location`: A location message.
   * 
   * - `contacts`: A contacts message.
   * 
   * - `reaction`: A reaction message.
   * 
   * - `sticker`: A sticker message.
   * 
   * - `typing_indicator`: A typing indicator message.
   * 
   * - `pin`: A message to pin or unpin. This type is available only for group messages.
   * 
   * - `carousel`: A carousel message.
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * VIBER
   * 
   * </summary>
   * 
   * - `text`: A text message.
   * 
   * - `image`: An image message.
   * 
   * - `text_image_button`: A message with text, an image, and a button.
   * 
   * - `text_button`: A message with text and a button.
   * 
   * - `document`: A document message.
   * 
   * - `video`: A video message.
   * 
   * - `text_video`: A message with text and a video.
   * 
   * - `text_video_button`: A message with text, a video, and a button.
   * 
   * - `text_image`: A message with text and an image.
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * MESSENGER / INSTAGRAM
   * 
   * </summary>
   * 
   * - `text`: A text message.
   * 
   * - `image`: An image message.
   * 
   * - `video`: A video message.
   * 
   * - `document`: A document message.
   * 
   * - `audio`: An audio message.
   * 
   * - `interactive`: An interactive message.
   * 
   * - `couponTemplate`: A coupon template message.
   * 
   * - `regularTemplate`: A regular template message.
   * 
   * - `quickReply`: A quick reply message.
   * 
   * - `buttonTemplate`: A button template message.
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * TELEGRAM
   * 
   * </summary>
   * 
   * - `text`: A text message.
   * 
   * - `image`: An image message.
   * 
   * - `video`: A video message.
   * 
   * - `audio`: An audio message.
   * 
   * - `document`: A document message.
   * 
   * - `location`: A location message.
   * 
   * - `gif`: An animated GIF message.
   * 
   * - `sticker`: A sticker message.
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
   * An array of custom data strings that are sent to your webhook when a user clicks a corresponding button.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payloadShrink?: string;
  /**
   * @remarks
   * Product information that you have uploaded to Meta. This parameter applies to WhatsApp channels only.
   */
  productActionShrink?: string;
  /**
   * @remarks
   * The recipient type. Valid values:
   * 
   * - `individual`: A single recipient.
   * 
   * - `group`: A group.
   * 
   * @example
   * individual
   */
  recipientType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A custom tag for the Viber message.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * A custom task ID.
   * 
   * @example
   * 10000****
   */
  taskId?: string;
  /**
   * @remarks
   * The message template code. You can find the code on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * @example
   * 1119***************
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name. You can find the template name on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The parameters for the message template.
   */
  templateParamsShrink?: string;
  /**
   * @remarks
   * The recipient\\"s number or ID.
   * 
   * - If `ChannelType` is **whatsapp**, this is the recipient\\"s phone number.
   * 
   * - If `ChannelType` is **messenger**, this is a Page-Scoped User ID (PSID) generated when a user interacts with your Facebook Page.
   * 
   * - If `ChannelType` is **instagram**, this is an Instagram-Scoped User ID (IGSID) generated when a user interacts with your Instagram business or creator account.
   * 
   * <props="intl">
   * 
   * - If `ChannelType` is **viber**, this is the recipient\\"s phone number.
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
   * 
   * > This parameter is for internal testing, is not generally available, and can be ignored.
   * 
   * @example
   * bearer
   */
  tokenType?: string;
  /**
   * @remarks
   * Custom tracking data for a Viber message. This parameter is available only on the International Site and can be ignored if you are using the China site.
   * 
   * @example
   * Tracking Data
   */
  trackingData?: string;
  /**
   * @remarks
   * The time-to-live (TTL) for a Viber message. This parameter is available only on the International Site and can be ignored if you are using the China site.<props="intl"> Unit: seconds. The value must be between 30 and 1209600.
   * 
   * @example
   * 50
   */
  ttl?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - `template`: A message template approved in the console. You can send this type of message at any time.
   * 
   * - `message`: A message of any format. You can send this type of message only within 24 hours of receiving the last message from a user.
   * 
   * >Notice: 
   * 
   * If you set `Type` to `template`, you must set the `TemplateCode` parameter. If you set `Type` to `message`, you must set the `MessageType` parameter.
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

