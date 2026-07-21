// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantRefineByContextRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization token for the API call. You can obtain this token by calling the authorization API for the "English Textbook AI Teacher" feature.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * The conversation ID for the current turn.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * Specifies the scenario. Valid values are `SYNC` for synchronous practice and `EXPAND` for expansion practice.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  /**
   * @remarks
   * The ID of the user\\"s message.
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

