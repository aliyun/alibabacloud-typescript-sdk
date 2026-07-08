// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocQaRequestConversationContexts extends $dara.Model {
  /**
   * @remarks
   * Q&A pair content
   * 
   * @example
   * 问答内容
   */
  content?: string;
  /**
   * @remarks
   * Role
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaRequest extends $dara.Model {
  /**
   * @remarks
   * Array of folder IDs for filtering. This parameter takes effect only when SearchSource is set to fromIndexLib.
   */
  categoryIds?: string[];
  /**
   * @remarks
   * Array of historical context content
   */
  conversationContexts?: RunDocQaRequestConversationContexts[];
  /**
   * @remarks
   * Array of multiple document IDs
   */
  docIds?: string[];
  /**
   * @remarks
   * Custom model name defined by the User
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Question
   * 
   * This parameter is required.
   * 
   * @example
   * 苹果16手机什么时候发布
   */
  query?: string;
  /**
   * @remarks
   * Associated content actively provided by the questioner
   * 
   * @example
   * 关联内容
   */
  referenceContent?: string;
  /**
   * @remarks
   * Search source
   * 
   * This parameter is required.
   * 
   * @example
   * fromWeb
   */
  searchSource?: string;
  /**
   * @remarks
   * Conversation ID
   * 
   * This parameter is required.
   * 
   * @example
   * f486c4e2-b773-4d65-88f8-2ba540610456
   */
  sessionId?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace ID. For details on how to obtain it, see [How to Use Workspaces](https://help.aliyun.com/document_detail/2587495.html).
   * 
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
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      conversationContexts: { 'type': 'array', 'itemType': RunDocQaRequestConversationContexts },
      docIds: { 'type': 'array', 'itemType': 'string' },
      modelName: 'string',
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

