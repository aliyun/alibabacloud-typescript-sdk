// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticleDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of article IDs.
   */
  articleIdList?: string[];
  /**
   * @remarks
   * The authorization code for API calls. You can obtain this code by calling the operation that retrieves the authorization code for the English textbook-style AI teacher feature.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  static names(): { [key: string]: string } {
    return {
      articleIdList: 'articleIdList',
      authToken: 'authToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleIdList: { 'type': 'array', 'itemType': 'string' },
      authToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articleIdList)) {
      $dara.Model.validateArray(this.articleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

