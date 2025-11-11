// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditTermsRequest extends $dara.Model {
  exceptionWord?: string[];
  /**
   * @example
   * 龘
   */
  keyword?: string;
  /**
   * @example
   * 龘(dá)
   */
  suggestWord?: string;
  /**
   * @example
   * 龙行龘龘出自四库本《玉篇》23龙部第8字，文字释义为群龙腾飞的样子，昂扬而热烈。
   */
  termsDesc?: string;
  termsName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionWord: 'ExceptionWord',
      keyword: 'Keyword',
      suggestWord: 'SuggestWord',
      termsDesc: 'TermsDesc',
      termsName: 'TermsName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionWord: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      suggestWord: 'string',
      termsDesc: 'string',
      termsName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceptionWord)) {
      $dara.Model.validateArray(this.exceptionWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

