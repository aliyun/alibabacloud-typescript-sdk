// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappTemplateResponseBodyListTemplate extends $dara.Model {
  /**
   * @remarks
   * The review state of the template. Valid values:
   * 
   * *   **pass**: The template is approved.
   * *   **fail**: The template is rejected.
   * *   **auditing**: The template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The category of the WhatsApp message template. Valid values:
   * 
   * *   **UTILITY**
   * *   **MARKETING**
   * *   **AUTHENTICATION**
   * 
   * The category of the Viber template. Valid values:
   * 
   * *   **text**: template that contains only text
   * *   **image**: template that contains only images
   * *   **text_image_button**: template that contains text, images, and buttons
   * *   **text_button**: template that contains text and buttons
   * *   **document**: template that contains only documents
   * *   **video**: template that contains only videos
   * *   **text_video**: template that contains text and videos
   * *   **text_video_button**: template that contains text, videos, and buttons
   * *   **text_image**: template that contains text and images
   * 
   * @example
   * TRANSACTIONAL
   */
  category?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The time when the template was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1711006633000
   */
  lastUpdateTime?: number;
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
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. Valid values: WHATSAPP and VIBER.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      language: 'Language',
      lastUpdateTime: 'LastUpdateTime',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      language: 'string',
      lastUpdateTime: 'number',
      reason: 'string',
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

