// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAITemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configurations of the AI template. The value must be a JSON string. For more information, see [AITemplateConfig](~~89863#title-vd3-499-o36~~).
   * 
   * This parameter is required.
   * 
   * @example
   * {"AuditItem":["terrorism","porn"],"AuditRange":["image-cover","text-title","video"],"AuditContent":["screen"],"AuditAutoBlock":"yes"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The name of the AI template. The name can be up to 128 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * AI-media-test
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the AI template. Valid values:
   * 
   * *   **AIMediaAudit**: automated review
   * *   **AIImage**: smart thumbnail
   * 
   * This parameter is required.
   * 
   * @example
   * AIMediaAudit
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateConfig: 'TemplateConfig',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateConfig: 'string',
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

