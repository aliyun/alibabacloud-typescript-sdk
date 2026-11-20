// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationUpdateCmd extends $dara.Model {
  /**
   * @remarks
   * The conversation data in JSON format, containing message records for each model.
   * 
   * @example
   * {"messages":[{"role":"user","content":"Hello"}]}
   */
  chatData?: string;
  /**
   * @remarks
   * The number of messages.
   * 
   * @example
   * 10
   */
  messageCount?: number;
  /**
   * @remarks
   * The list of model IDs as a JSON array string.
   * 
   * @example
   * [1,2,3]
   */
  modelIds?: string;
  /**
   * @remarks
   * The conversation title.
   * 
   * @example
   * My conversation
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

