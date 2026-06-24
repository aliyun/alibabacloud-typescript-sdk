// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLlmTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the model template.
   * 
   * This parameter is required.
   * 
   * @example
   * llmt-xxxx
   */
  llmTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      llmTemplateId: 'LlmTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

