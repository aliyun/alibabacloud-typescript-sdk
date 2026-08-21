// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAITemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the AI template. The value is a JSON string. For more information, see [AITemplateConfig](~~89863#title-vd3-499-o36~~).
   * 
   * This parameter is required.
   * 
   * @example
   * {"AuditItem":["terrorism","porn"],"AuditRange":["text-title","video"],"AuditContent":["screen"],"AuditAutoBlock":"yes"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the AI template. You can obtain the template ID by using one of the following methods:
   * - When you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, the AI template ID is the value of TemplateId in the response.
   * - After the AI template is added, call the [ListAITemplate](https://help.aliyun.com/document_detail/102936.html) operation to query the AI template ID, which is the value of TemplateId in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 1706a0063dd733f6a823ef32e0a5****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the AI template. The name can be up to 128 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoAITemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

