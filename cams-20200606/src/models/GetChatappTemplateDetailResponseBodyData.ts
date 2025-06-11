// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatappTemplateDetailResponseBodyDataComponents } from "./GetChatappTemplateDetailResponseBodyDataComponents";


export class GetChatappTemplateDetailResponseBodyData extends $dara.Model {
  allowSend?: boolean;
  /**
   * @remarks
   * The review status of the message template. Valid values:
   * 
   * *   **pass**: The message template is approved.
   * *   **fail**: The message template is rejected.
   * *   **auditing**: The message template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The category of the template when the returned value of TemplateType is WHATSAPP. Valid values:
   * 
   * *   **UTILITY**: a transactional template
   * *   **MARKETING**: a marketing template
   * *   **AUTHENTICATION**: an identity authentication template
   * 
   * The category of the template when the returned value of the TemplateType parameter is VIBER. Valid values:
   * 
   * *   **text**: a template that contains only text
   * *   **image**: a template that contains only images
   * *   **text_image_button**: a template that contains text, images, and buttons
   * *   **text_button**: a template that contains text and buttons
   * *   **document**: a template that contains only files
   * *   **video**: a template that contains only videos
   * *   **text_video**: a template that contains text and videos
   * *   **text_video_button**: a template that contains text, videos, and buttons
   * *   **text_image**: a template that contains text and images
   * 
   * > If Category is set to text_video_button, users cannot open a web page by clicking the button. Users can open only the video in the message. In this case, you do not need to specify the Url parameter for the URL button in the template.
   * 
   * @example
   * TRANSACTIONAL
   */
  category?: string;
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The components of the message template.
   */
  components?: GetChatappTemplateDetailResponseBodyDataComponents[];
  /**
   * @remarks
   * The examples of variables.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The validity period of the WhatsApp authentication message.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * The quality of the template.
   * 
   * @example
   * GREEN
   */
  qualityScore?: string;
  /**
   * @remarks
   * The reason why the template was rejected.
   * 
   * @example
   * None
   */
  reason?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The type of the message template. Valid values:
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE (developing)
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSend: 'AllowSend',
      auditStatus: 'AuditStatus',
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      components: 'Components',
      example: 'Example',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      qualityScore: 'QualityScore',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSend: 'boolean',
      auditStatus: 'string',
      category: 'string',
      categoryChangePaused: 'boolean',
      components: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponents },
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      qualityScore: 'string',
      reason: 'string',
      templateCode: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.example) {
      $dara.Model.validateMap(this.example);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

