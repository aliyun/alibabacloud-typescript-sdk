// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendChatappMessageRequestFlowAction } from "./SendChatappMessageRequestFlowAction";
import { SendChatappMessageRequestProductAction } from "./SendChatappMessageRequestProductAction";


export class SendChatappMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * *   **whatsapp**
   * *   **viber**
   * *   **line** (under development)
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
   * @remarks
   * The ID of the reply message.
   * 
   * @example
   * 61851ccb2f1365b16aee****
   */
  contextMessageId?: string;
  /**
   * @remarks
   * The space ID of the user.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The content of the fallback message.
   * 
   * @example
   * This is a fallback message.
   */
  fallBackContent?: string;
  /**
   * @remarks
   * Specifies the period of time after which the fallback message is sent if the message receipt that indicates the message is delivered to clients is not received. If this parameter is left empty, the fallback message is sent only when the **message fails to be sent** or **the message receipt that indicates the message is not delivered to clients** is received. Unit: seconds. Valid values: 60 to 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The ID of the fallback policy. You can create a fallback policy and view the information in the Chat App Message Service console.
   * 
   * @example
   * S_000001
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. Valid values:
   * 
   * *   **undelivered**: A fallback is triggered if the message is not delivered to clients. When the message is being sent, the template parameters are verified. If the parameters fail to pass the verification, the message fails to be sent. Whether the template and phone number are prohibited is not verified. By default, this value is used when FallBackRule is left empty.
   * *   **sentFailed**: A fallback is triggered even if the template parameters including variables fail to pass the verification. If the channelType, type, messageType, to, and from parameters fail to pass the verification, a fallback is not triggered.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The Flow action.
   */
  flowAction?: SendChatappMessageRequestFlowAction;
  /**
   * @remarks
   * The mobile phone number of the message sender.
   * 
   * >  You can specify a mobile phone number that is registered for a WhatsApp account and is approved in the Chat App Message Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1360000****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code. This parameter is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The type of the Viber message. This parameter is required if ChannelType is set to viber. Valid values:
   * 
   * *   **promotion**
   * *   **transaction**
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language that is used in the message template. This parameter is required only if you set the Type parameter to **template**. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The specific type of the message. This parameter is required only if you set the Type parameter to **message**.
   * 
   * **Valid values of MessageType when you set the ChannelType parameter to whatsapp:**
   * 
   * *   **text**: a text message.
   * *   **image**: an image message.
   * *   **video**: a video message.
   * *   **audio**: an audio message.
   * *   **document**: a document message.
   * *   **interactive**: an interactive message.
   * *   **contacts**: a contact message.
   * *   **location**: a location message.
   * *   **sticker**: a sticker message.
   * *   **reaction**: a reaction message.
   * 
   * **Valid values of MessageType when you set the ChannelType parameter to viber:**
   * 
   * *   **text**: a text message.
   * *   **image**: an image message.
   * *   **video**: a video message.
   * *   **document**: a document message.
   * *   **text_button**: a message that contains the text and button media objects.
   * *   **text_image_button**: a message that contains multiple media objects, including the text, image, and button.
   * *   **text_video**: a message that contains the text and video media objects.
   * *   **text_video_button**: a message that contains multiple media objects, including text, video, and button.
   * *   **text_image**: a message that contains the text and image media objects.
   * 
   * > For more information, see [Parameters of a message template](https://help.aliyun.com/document_detail/454530.html).
   * 
   * @example
   * text
   */
  messageType?: string;
  /**
   * @remarks
   * The payload of the button.
   * 
   * @example
   * payloadtext1,payloadtext2,payloadtext3
   */
  payload?: string[];
  /**
   * @remarks
   * The information about the products included in the WhatsApp catalog message or multi-product message (MPM).
   */
  productAction?: SendChatappMessageRequestProductAction;
  recipientType?: string;
  /**
   * @remarks
   * The tag information of the Viber message.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 100000001
   */
  taskId?: string;
  /**
   * @remarks
   * The code of the message template. This parameter is required only if you set the Type parameter to **template**.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The variables of the message template.
   */
  templateParams?: { [key: string]: string };
  /**
   * @remarks
   * The mobile phone number of the message receiver.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  to?: string;
  /**
   * @remarks
   * The tracking data of the Viber message.
   * 
   * @example
   * tracking_id:123456
   */
  trackingData?: string;
  /**
   * @remarks
   * The timeout period for sending the Viber message. Valid values: 30 to 1209600. Unit: seconds.
   * 
   * @example
   * 50
   */
  ttl?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * *   **template**: the template message. A template message is sent based on a template that is created and approved in the Chat App Message Service console. You can send template messages based on your business requirements.
   * *   **message**: the custom message. You can send a custom WhatsApp message to a user only within 24 hours after you receive the last message from the user. This limit does not apply to custom Viber messages.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      messageType: 'MessageType',
      payload: 'Payload',
      productAction: 'ProductAction',
      recipientType: 'RecipientType',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateParams: 'TemplateParams',
      to: 'To',
      trackingData: 'TrackingData',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      messageType: 'string',
      payload: { 'type': 'array', 'itemType': 'string' },
      productAction: SendChatappMessageRequestProductAction,
      recipientType: 'string',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
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

