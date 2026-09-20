// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptRequest extends $dara.Model {
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
      namespaceId: 'NamespaceId',
      promptKey: 'PromptKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

