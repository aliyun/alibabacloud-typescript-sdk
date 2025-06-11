// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotChatResponseBodyDataMessages } from "./BeeBotChatResponseBodyDataMessages";


export class BeeBotChatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the recommended knowledge.
   * 
   * @example
   * ab6be8af-cee4-40c3-9919-2ac7461d7d98
   */
  messageId?: string;
  /**
   * @remarks
   * The source of the recommended answer. When AnswerType is set to Recommend, a value is returned for this parameter.
   */
  messages?: BeeBotChatResponseBodyDataMessages[];
  /**
   * @remarks
   * The source of the recommended answer.
   * 
   * @example
   * 1234
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessages },
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

