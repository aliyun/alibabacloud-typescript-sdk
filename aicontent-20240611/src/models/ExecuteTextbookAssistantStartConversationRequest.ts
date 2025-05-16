// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantStartConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
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
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'articleId',
      authToken: 'authToken',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      authToken: 'string',
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

