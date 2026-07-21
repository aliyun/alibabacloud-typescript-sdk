// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantStartConversationRequest extends $dara.Model {
  /**
   * @remarks
   * How you obtain this ID depends on the value of `scenario`.
   * 
   * **When the `scenario` input parameter is `SYNC`:**
   * 
   * 1. From the `Get Article List` response, use the top-level `articleId` field.
   * 
   * 2. From the `Get Article Details` response, use the top-level `articleId` field.
   * 
   * **When the `scenario` input parameter is `EXPAND`:**
   * 
   * 1. From the `Get Article Details` response, use the `sceneid` field from an element in the `sceneList` array.
   * 
   * This parameter is required.
   * 
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  /**
   * @remarks
   * The authorization token for the API call. Obtain this token by calling the operation that provides the authorization token for the textbook-style AI teacher feature.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * The practice scenario. Valid values:
   * 
   * `SYNC`: synchronous practice
   * 
   * `EXPAND`: expansion practice
   * 
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

