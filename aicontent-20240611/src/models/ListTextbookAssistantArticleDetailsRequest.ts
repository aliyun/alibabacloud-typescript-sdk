// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticleDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of article IDs to retrieve.
   */
  articleIdList?: string[];
  /**
   * @remarks
   * The authorization token obtained from the "Get Authorization Token for the English Textbook-Style AI Teacher" API.
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

