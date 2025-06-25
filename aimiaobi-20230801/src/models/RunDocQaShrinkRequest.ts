// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocQaShrinkRequest extends $dara.Model {
  categoryIdsShrink?: string;
  conversationContextsShrink?: string;
  docIdsShrink?: string;
  modelName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  referenceContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fromWeb
   */
  searchSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f486c4e2-b773-4d65-88f8-2ba540610456
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-dswd4003ny4gh9rw
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      conversationContextsShrink: 'ConversationContexts',
      docIdsShrink: 'DocIds',
      modelName: 'ModelName',
      query: 'Query',
      referenceContent: 'ReferenceContent',
      searchSource: 'SearchSource',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      conversationContextsShrink: 'string',
      docIdsShrink: 'string',
      modelName: 'string',
      query: 'string',
      referenceContent: 'string',
      searchSource: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

