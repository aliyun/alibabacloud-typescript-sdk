// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The conversation text content.
   * 
   * @example
   * Hello
   */
  content?: string;
  /**
   * @remarks
   * The role of the message.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
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

export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * The messages.
   */
  messages?: ChatRequestMessages[];
  /**
   * @remarks
   * The ID of the Q&A session.
   * 
   * @example
   * UUID
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ChatRequestMessages },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

