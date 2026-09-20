// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Fork from this version. Either this parameter or Template must be specified.
   * 
   * @example
   * 0.0.1
   */
  basedOnVersion?: string;
  /**
   * @remarks
   * Commit message.
   * 
   * @example
   * 初始版本
   */
  commitMsg?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * Unique identifier of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  /**
   * @remarks
   * Draft version number. If not specified, the version number is automatically incremented.
   * 
   * @example
   * 0.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * Prompt template content. Either this parameter or BasedOnVersion must be specified.
   * 
   * @example
   * 你是一个客服助手，请回答：{question}
   */
  template?: string;
  /**
   * @remarks
   * Variable definitions in a JSON array string.
   * 
   * @example
   * [{"name":"question","defaultValue":"Hello"}]
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      basedOnVersion: 'BasedOnVersion',
      commitMsg: 'CommitMsg',
      namespaceId: 'NamespaceId',
      promptKey: 'PromptKey',
      targetVersion: 'TargetVersion',
      template: 'Template',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basedOnVersion: 'string',
      commitMsg: 'string',
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

