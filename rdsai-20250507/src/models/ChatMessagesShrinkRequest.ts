// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatMessagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * fea7bdca-e848-44dd-b1ae-852472b8****
   */
  conversationId?: string;
  /**
   * @remarks
   * The event output type. Valid values: inline and separate. Default value: inline. When set to inline, tool invocation events, sub-node events, and document events are included in the answer field of event = message. When set to separate, tool invocation events, sub-node events, and document events each have their own event.
   */
  eventMode?: string;
  filesShrink?: string;
  /**
   * @remarks
   * The task input.
   */
  inputsShrink?: string;
  /**
   * @remarks
   * The parent message ID.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  parentMessageId?: string;
  /**
   * @remarks
   * The query content.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance rm-bp14as9914vd3**** disk usage, whether expansion is needed
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      eventMode: 'EventMode',
      filesShrink: 'Files',
      inputsShrink: 'Inputs',
      parentMessageId: 'ParentMessageId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      eventMode: 'string',
      filesShrink: 'string',
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

