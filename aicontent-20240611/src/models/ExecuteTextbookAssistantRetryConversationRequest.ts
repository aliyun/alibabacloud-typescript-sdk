// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantRetryConversationRequest extends $dara.Model {
  /**
   * @remarks
   * The AI assistant\\"s message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @remarks
   * The authorization token. You can obtain this token from the API that provides authorization for the textbook AI assistant feature.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * Specifies the scenario. Valid values: `SYNC` for synchronized practice and `EXPAND` for expansion practice.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

