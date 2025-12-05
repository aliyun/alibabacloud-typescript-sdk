// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesShrinkRequest extends $dara.Model {
  /**
   * @example
   * fea7bdca-e848-44dd-b1ae-852472b8****
   */
  conversationId?: string;
  inputsShrink?: string;
  /**
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  parentMessageId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      inputsShrink: 'Inputs',
      parentMessageId: 'ParentMessageId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      inputsShrink: 'string',
      parentMessageId: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

