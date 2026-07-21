// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the AI teacher\\"s message.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @remarks
   * The authorization token for the API call. To obtain this token, call the operation that generates authorization tokens for the AI teacher feature.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * The unique identifier for the current chat.
   * 
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  chatId?: string;
  /**
   * @remarks
   * The practice scenario. Valid values are `SYNC` for synchronous practice and `EXPAND` for extended practice.
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

