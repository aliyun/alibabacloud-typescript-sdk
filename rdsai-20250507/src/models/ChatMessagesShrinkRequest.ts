// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * @example
   * fea7bdca-e848-44dd-b1ae-852472b8****
   */
  conversationId?: string;
  eventMode?: string;
  /**
   * @remarks
   * The inputs for the task.
   */
  inputsShrink?: string;
  /**
   * @remarks
   * The ID of the parent message.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  parentMessageId?: string;
  /**
   * @remarks
   * The content of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 实例rm-bp14as9914vd3**** 磁盘使用率，是否需要进行扩容
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      eventMode: 'EventMode',
      inputsShrink: 'Inputs',
      parentMessageId: 'ParentMessageId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      eventMode: 'string',
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

