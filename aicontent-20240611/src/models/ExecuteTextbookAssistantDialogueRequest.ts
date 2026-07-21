// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization token required to call the API. To get this token, use the Textbook Assistant authorization API.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  authToken?: string;
  /**
   * @remarks
   * The chat ID for this turn.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * The scenario. Valid values: SYNC for synchronous practice and EXPAND for extended practice.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  /**
   * @remarks
   * The user\\"s message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
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

