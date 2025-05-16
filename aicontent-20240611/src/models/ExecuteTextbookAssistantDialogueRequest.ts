// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scenario?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userMessage?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
      userMessage: 'userMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
      userMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

