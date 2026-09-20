// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The commit message.
   * 
   * @example
   * Optimize response tone.
   */
  commitMsg?: string;
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
  /**
   * @remarks
   * The updated template content.
   * 
   * This parameter is required.
   * 
   * @example
   * You are a customer service assistant. Please answer: {question}
   */
  template?: string;
  /**
   * @remarks
   * The updated variable definition in JSON format.
   * 
   * @example
   * [{"name":"question","defaultValue":"Hello"}]
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      namespaceId: 'NamespaceId',
      promptKey: 'PromptKey',
      template: 'Template',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      namespaceId: 'string',
      promptKey: 'string',
      template: 'string',
      variables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

