// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationUpdateCmd extends $dara.Model {
  /**
   * @example
   * {"messages":[{"role":"user","content":"你好"}]}
   */
  chatData?: string;
  /**
   * @example
   * 10
   */
  messageCount?: number;
  /**
   * @example
   * [1,2,3]
   */
  modelIds?: string;
  /**
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

