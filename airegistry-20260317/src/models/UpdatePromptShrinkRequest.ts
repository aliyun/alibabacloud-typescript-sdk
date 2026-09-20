// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of business tags. The value is a string array.
   * 
   * @example
   * ["cs","qa","support"]
   */
  bizTagsShrink?: string;
  /**
   * @remarks
   * The description of the prompt.
   * 
   * @example
   * 客服问答 Prompt
   */
  description?: string;
  /**
   * @remarks
   * The mapping between prompt versions and labels.
   * 
   * @example
   * {"latest":"0.0.1","stable":"0.0.1"}
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * The unique identifier of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizTagsShrink: 'BizTags',
      description: 'Description',
      labelsShrink: 'Labels',
      namespaceId: 'NamespaceId',
      promptKey: 'PromptKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTagsShrink: 'string',
      description: 'string',
      labelsShrink: 'string',
      namespaceId: 'string',
      promptKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

