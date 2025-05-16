// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticlesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'articleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

