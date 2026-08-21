// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAITemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI template. You can obtain the template ID by using one of the following methods:
   * - When you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, the template ID is the value of the TemplateId parameter in the response.
   * - After the AI template is added, call the [ListAITemplate](https://help.aliyun.com/document_detail/102936.html) operation to query the template ID, which is the value of the TemplateId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 1706a0063dd733f6a823ef32e0a5****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

