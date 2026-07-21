// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateConversationRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON string that contains the message history for each model in the conversation.
   * 
   * @example
   * {"messages":[{"role":"user","content":"你好"}]}
   */
  chatData?: string;
  /**
   * @remarks
   * The number of messages in the conversation.
   * 
   * @example
   * 10
   */
  messageCount?: number;
  /**
   * @remarks
   * A JSON-formatted string that represents an array of model IDs.
   * 
   * @example
   * [1,2,3]
   */
  modelIds?: string;
  /**
   * @remarks
   * The new conversation title.
   * 
   * @example
   * 我的对话
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chatData: 'chatData',
      messageCount: 'messageCount',
      modelIds: 'modelIds',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatData: 'string',
      messageCount: 'number',
      modelIds: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

