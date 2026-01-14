// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatStreamRequest extends $dara.Model {
  documentIds?: number[];
  /**
   * @remarks
   * Q&A content.
   * 
   * This parameter is required.
   * 
   * @example
   * How to access knowledge base Q&A documents.
   */
  question?: string;
  /**
   * @remarks
   * - Q&A session ID.
   * - Historical sessions can be retrieved through GetSessionList.
   * - A new session can also be created via CreateChatSession.
   * 
   * This parameter is required.
   * 
   * @example
   * bfce2248-1546-4298-8bcf-70ac26e69646
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      documentIds: 'documentIds',
      question: 'question',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIds: { 'type': 'array', 'itemType': 'number' },
      question: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

