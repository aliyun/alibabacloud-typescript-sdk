// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptRequest extends $dara.Model {
  /**
   * @example
   * ["cs","qa","support"]
   */
  bizTags?: string[];
  /**
   * @example
   * 客服问答 Prompt
   */
  description?: string;
  labels?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
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

