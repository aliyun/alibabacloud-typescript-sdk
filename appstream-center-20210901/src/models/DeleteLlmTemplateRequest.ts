// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLlmTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the model to be deleted. You can call [ListLlmTemplates](~~ListLlmTemplates~~) to obtain the ID. Use the LlmTemplateId of the specific model. Do not use the model group ID or provider template ID.
   * 
   * The model must exist and be manageable by the current account. If the model has been deleted or does not exist, LlmTemplate.NotFound is returned. For instructions on how to handle default models, see the operation description.
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

