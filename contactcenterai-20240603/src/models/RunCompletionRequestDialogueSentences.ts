// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionRequestDialogueSentences extends $dara.Model {
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      role: 'Role',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

