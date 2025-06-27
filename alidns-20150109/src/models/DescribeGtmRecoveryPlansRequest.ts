// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the query. Fuzzy match is supported by disaster recovery plan name.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language in which you want the values of some response parameters to be returned. These response parameters support multiple languages.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number to return. The page number starts from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

