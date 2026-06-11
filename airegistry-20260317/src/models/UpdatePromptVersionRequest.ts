// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePromptVersionRequest extends $dara.Model {
  /**
   * @example
   * 优化回答语气
   */
  commitMsg?: string;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 你是一个客服助手，请回答：{question}
   */
  template?: string;
  /**
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

