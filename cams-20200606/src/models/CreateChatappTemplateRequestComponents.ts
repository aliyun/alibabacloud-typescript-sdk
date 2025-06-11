// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateChatappTemplateRequestComponentsButtons } from "./CreateChatappTemplateRequestComponentsButtons";
import { CreateChatappTemplateRequestComponentsCards } from "./CreateChatappTemplateRequestComponentsCards";


export class CreateChatappTemplateRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The note indicating that customers cannot share verification codes with others. The note is displayed in the message body. This parameter is valid if Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to BODY for a WhatsApp message template.
   * 
   * @example
   * true
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The buttons. Specify this parameter only if you set the Type sub-parameter of the Components parameter to **BUTTONS**.
   * 
   * >  ####
   * 
   * *   A marketing or utility WhatsApp message template can contain up to 10 buttons.
   * 
   * *   A WhatsApp message template can contain only one phone call button.
   * 
   * *   A WhatsApp message template can contain up to two URL buttons.
   * 
   * *   In a WhatsApp message template, a quick reply button cannot be used together with a phone call button or a URL button.
   */
  buttons?: CreateChatappTemplateRequestComponentsButtons[];
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * This is a video
   */
  caption?: string;
  /**
   * @remarks
   * The carousel cards of the carousel template.
   */
  cards?: CreateChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code in the WhatsApp authentication template. Unit: minutes. This parameter is valid only when Category is set to AUTHENTICATION and the Type sub-parameter of the Components parameter is set to FOOTER. The validity period of the verification code is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The length of the video in the Viber message template. Unit: seconds. Valid values: 0 to 600.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * video name
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the document attached in the Viber message template.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The type of the media resource. Valid values:
   * 
   * *   **TEXT**
   * *   **IMAGE**
   * *   **DOCUMENT**
   * *   **VIDEO**
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * Specifies whether the coupon code has an expiration time. Specify this parameter if the Type sub-parameter of the Components parameter is set to LIMITED_TIME_OFFER.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message that you want to send.
   * 
   * >  If Category is set to AUTHENTICATION, the Text sub-parameter of the Components parameter must be empty.
   * 
   * @example
   * hello whatsapp
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail URL of the video in the Viber message template.
   * 
   * @example
   * https://cdn.multiplymall.mobiapp.cloud/yunmall/B-LM-LMALL202207130001/20220730/d712a057-a6af-4513-bbe6-7ee57ea60983.png?x-oss-process=image/resize,w_100
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * *   **BODY**
   * *   **HEADER**
   * *   **FOOTER**
   * *   **BUTTONS**
   * *   **CAROUSEL**
   * *   **LIMITED_TIME_OFFER**
   * 
   * > 
   * 
   * *   In a WhatsApp message template, a **Body** component cannot exceed 1,024 characters in length. A **HEADER** or **FOOTER** component cannot exceed 60 characters in length.
   * 
   * *   **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** components are not supported in Viber message templates.
   * 
   * *   In Viber message templates, media resources such as images, videos, and documents are placed in the **HEADER** component. If a Viber message contains text and an image, the image is placed below the text in the message received on a device.
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media resource.
   * 
   * >  We recommend that you use 800 × 800 images in Viber message templates.
   * 
   * @example
   * https://image.developer.aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addSecretRecommendation: 'AddSecretRecommendation',
      buttons: 'Buttons',
      caption: 'Caption',
      cards: 'Cards',
      codeExpirationMinutes: 'CodeExpirationMinutes',
      duration: 'Duration',
      fileName: 'FileName',
      fileType: 'FileType',
      format: 'Format',
      hasExpiration: 'HasExpiration',
      text: 'Text',
      thumbUrl: 'ThumbUrl',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSecretRecommendation: 'boolean',
      buttons: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCards },
      codeExpirationMinutes: 'number',
      duration: 'number',
      fileName: 'string',
      fileType: 'string',
      format: 'string',
      hasExpiration: 'boolean',
      text: 'string',
      thumbUrl: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buttons)) {
      $dara.Model.validateArray(this.buttons);
    }
    if(Array.isArray(this.cards)) {
      $dara.Model.validateArray(this.cards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

