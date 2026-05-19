// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIStaffChatRequestMessages extends $dara.Model {
  /**
   * @example
   * {\\"CodeRevision\\": \\"1750040991876284109\\"}
   */
  content?: string;
  /**
   * @example
   * application/octet-stream
   */
  contentType?: string;
  metaData?: { [key: string]: string };
  /**
   * @example
   * polarx_dn
   */
  role?: string;
  /**
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
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @example
   * 3b465fe1-6f06-4899-af9f-d43d9338df25
   */
  chatId?: string;
  /**
   * @example
   * 5b7105a2-2999-430b-ba23-ba09149d5434
   */
  conversationId?: string;
  messages?: CreateAIStaffChatRequestMessages[];
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

