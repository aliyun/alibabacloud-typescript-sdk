// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptRequest extends $dara.Model {
  /**
   * @remarks
   * The list of business tags. The value is a string array.
   * 
   * @example
   * ["cs","qa","support"]
   */
  bizTags?: string[];
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
  labels?: { [key: string]: any };
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
      bizTags: 'BizTags',
      description: 'Description',
      labels: 'Labels',
      namespaceId: 'NamespaceId',
      promptKey: 'PromptKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespaceId: 'string',
      promptKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizTags)) {
      $dara.Model.validateArray(this.bizTags);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

