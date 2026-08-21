// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAITemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the AI template. The value is a JSON string.
   * For more information, see [AITemplateConfig](~~89863#title-vd3-499-o36~~).
   * 
   * This parameter is required.
   * 
   * @example
   * {"AuditItem":["terrorism","porn"],"AuditRange":["image-cover","text-title","video"],"AuditContent":["screen"],"AuditAutoBlock":"yes"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The name of the AI template. Maximum length: 128 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * AI-media-test
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype of the AI template. Valid values:
   * - **AIMediaAudit**: automated review.
   * - **AIImage**: smart thumbnail.
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

