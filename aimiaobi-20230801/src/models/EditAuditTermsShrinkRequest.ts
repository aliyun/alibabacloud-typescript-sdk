// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditAuditTermsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Exception statements
   */
  exceptionWordShrink?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 20103
   */
  id?: string;
  /**
   * @remarks
   * Keyword
   * 
   * @example
   * 龘
   */
  keyword?: string;
  /**
   * @remarks
   * Suggested word
   * 
   * @example
   * 龘(dá)
   */
  suggestWord?: string;
  /**
   * @remarks
   * Audit rationale
   * 
   * @example
   * 龙行龘龘出自四库本《玉篇》23龙部第8字，文字释义为群龙腾飞的样子，昂扬而热烈。
   */
  termsDesc?: string;
  /**
   * @remarks
   * The unique identifier of your Alibaba Cloud Model Studio workspace. Get your [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionWordShrink: 'ExceptionWord',
      id: 'Id',
      keyword: 'Keyword',
      suggestWord: 'SuggestWord',
      termsDesc: 'TermsDesc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionWordShrink: 'string',
      id: 'string',
      keyword: 'string',
      suggestWord: 'string',
      termsDesc: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

