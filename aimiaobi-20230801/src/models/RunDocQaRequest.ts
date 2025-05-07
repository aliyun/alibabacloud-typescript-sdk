// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocQaRequestConversationContexts } from "./RunDocQaRequestConversationContexts";


export class RunDocQaRequest extends $dara.Model {
  categoryIds?: string[];
  conversationContexts?: RunDocQaRequestConversationContexts[];
  docIds?: string[];
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
      categoryIds: 'CategoryIds',
      conversationContexts: 'ConversationContexts',
      docIds: 'DocIds',
      query: 'Query',
      referenceContent: 'ReferenceContent',
      searchSource: 'SearchSource',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      conversationContexts: { 'type': 'array', 'itemType': RunDocQaRequestConversationContexts },
      docIds: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      referenceContent: 'string',
      searchSource: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    if(Array.isArray(this.conversationContexts)) {
      $dara.Model.validateArray(this.conversationContexts);
    }
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

