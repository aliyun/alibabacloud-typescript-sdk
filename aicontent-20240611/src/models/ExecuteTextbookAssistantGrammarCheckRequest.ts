// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantGrammarCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization token for the API call. Obtain this token by calling the "Authorization token for the Textbook-style AI English Teacher" API.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * The ID of the current conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * The use case. Valid values: `SYNC` for synchronous practice and `EXPAND` for expansion practice.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  /**
   * @remarks
   * The message ID of the user\\"s reply.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b45bdfc807f077a5a1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

