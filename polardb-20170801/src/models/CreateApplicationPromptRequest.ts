// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationPromptRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_prompt
   */
  promptName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CONVERSATION_SUMMERY
   * SEMANTIC_MEMORY
   * MEMORY_ANSWER_PROMPT
   * USER_MEMORY_EXTRACTION_PROMPT
   * AGENT_MEMORY_EXTRACTION_PROMPT
   * PROCEDURAL_MEMORY_SYSTEM_PROMPT
   * RETRIEVE_NODES_PROMPT
   * EXTRACT_RELATIONS_PROMPT
   * UPDATE_GRAPH_PROMPT
   * DELETE_RELATIONS_SYSTEM_PROMPT
   */
  promptType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prompt content
   */
  promptValue?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      promptName: 'PromptName',
      promptType: 'PromptType',
      promptValue: 'PromptValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      promptName: 'string',
      promptType: 'string',
      promptValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

