// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantSseDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67e374acb54c526c95c4fbd4
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EXPAND
   */
  scenario?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hello
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

