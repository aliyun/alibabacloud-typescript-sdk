// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordsResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2023-06-03 14:43:03
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-06-03 14:43:03
   */
  gmtModified?: string;
  /**
   * @example
   * 112
   */
  id?: number;
  /**
   * @example
   * custom_xxxx
   */
  keywordLibId?: string;
  /**
   * @example
   * 4205334
   */
  keywordMd5Id?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      keywordLibId: 'KeywordLibId',
      keywordMd5Id: 'KeywordMd5Id',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      keywordLibId: 'string',
      keywordMd5Id: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

