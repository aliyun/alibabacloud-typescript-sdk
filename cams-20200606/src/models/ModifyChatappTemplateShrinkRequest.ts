// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the Viber message template. Valid values:
   * 
   * *   **text**: the template that contains only text
   * *   **image**: the template that contains only images
   * *   **text_image_button**: the template that contains text, images, and buttons
   * *   **text_button**: the template that contains text and buttons
   * *   **document**: the template that contains only documents
   * *   **video**: the template that contains only videos
   * *   **text_video**: the template that contains text and videos
   * *   **text_video_button**: the template that contains text, videos, and buttons
   * *   **text_image**: the template that contains text and images
   * 
   * > This parameter applies only to Viber message templates.
   * 
   * @example
   * text
   */
  category?: string;
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The components of the message template.
   * 
   * >  If Category is set to AUTHENTICATION, the Type sub-parameter of the Components parameter cannot be set to HEADER. If the Type sub-parameter is set to BODY or FOOTER, you do not need to set the Text sub-parameter of the Components parameter because the value is automatically generated.
   * 
   * This parameter is required.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * > CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 659216218162179
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The examples of variables that are used when you create the message template.
   */
  exampleShrink?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Validity period of authentication template message sending in WhatsApp
   * 
   * >This attribute requires providing waba in advance to Alibaba operators to open the whitelist, otherwise it will result in template submission failure
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The message template code.
   * 
   * @example
   * 8472929283883
   */
  templateCode?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      componentsShrink: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      exampleShrink: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryChangePaused: 'boolean',
      componentsShrink: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      exampleShrink: 'string',
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

