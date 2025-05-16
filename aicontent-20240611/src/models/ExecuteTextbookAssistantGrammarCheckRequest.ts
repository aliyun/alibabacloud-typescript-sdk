// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantGrammarCheckRequest extends $dara.Model {
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
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  /**
   * @remarks
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

