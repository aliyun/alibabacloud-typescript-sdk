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
   * The event output mode. Valid values: inline and separate. Default value: inline. When set to inline, tool invoke events, child node events, and document events are unified into the answer field of the event where event = message. When set to separate, tool invoke events, child node events, and document events have their own respective events.
   * 
   * @example
   * inline
   */
  eventMode?: string;
  /**
   * @remarks
   * The list of attachments included in the current conversation round. References uploaded files by using UploadFileId.
   */
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
   * @example
   * Disk usage of instance rm-bp14as9914vd3****, and whether it needs to be scaled up
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

