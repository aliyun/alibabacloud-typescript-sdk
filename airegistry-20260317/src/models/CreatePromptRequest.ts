// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptRequest extends $dara.Model {
  /**
   * @example
   * cs,qa,support
   */
  bizTags?: string;
  /**
   * @example
   * 初始版本
   */
  commitMsg?: string;
  /**
   * @example
   * 客服问答 Prompt
   */
  description?: string;
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
   * @example
   * 0.0.1
   */
  targetVersion?: string;
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
      bizTags: 'BizTags',
      commitMsg: 'CommitMsg',
      description: 'Description',
      namespaceId: 'NamespaceId',
      promptKey: 'PromptKey',
      targetVersion: 'TargetVersion',
      template: 'Template',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      commitMsg: 'string',
      description: 'string',
      namespaceId: 'string',
      promptKey: 'string',
      targetVersion: 'string',
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

