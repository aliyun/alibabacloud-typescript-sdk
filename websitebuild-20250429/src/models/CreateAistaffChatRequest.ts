// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIStaffChatRequestMessages extends $dara.Model {
  /**
   * @remarks
   * Message content
   * 
   * @example
   * {\\"CodeRevision\\": \\"1750040991876284109\\"}
   */
  content?: string;
  /**
   * @remarks
   * Content type
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @remarks
   * Business extension metadata (in Map format, must be a JSON string)
   */
  metaData?: { [key: string]: string };
  /**
   * @remarks
   * Role in the conversation
   * 
   * @example
   * polarx_dn
   */
  role?: string;
  /**
   * @remarks
   * File type
   * 
   * @example
   * risk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      metaData: 'MetaData',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIStaffChatRequest extends $dara.Model {
  /**
   * @remarks
   * Site ID
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * Conversation ID (provided when recovering from a break)
   * 
   * @example
   * 3b465fe1-6f06-4899-af9f-d43d9338df25
   */
  chatId?: string;
  /**
   * @remarks
   * session ID
   * 
   * @example
   * 5b7105a2-2999-430b-ba23-ba09149d5434
   */
  conversationId?: string;
  /**
   * @remarks
   * List of conversation messages
   */
  messages?: CreateAIStaffChatRequestMessages[];
  /**
   * @remarks
   * Additional conversation information
   */
  metaData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      messages: 'Messages',
      metaData: 'MetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      chatId: 'string',
      conversationId: 'string',
      messages: { 'type': 'array', 'itemType': CreateAIStaffChatRequestMessages },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

