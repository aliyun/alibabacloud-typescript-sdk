// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsCacheDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword. The search is performed in the \\`%Keyword%\\` format. The search is case-insensitive.
   * 
   * @example
   * a
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   *   The default value is **zh**.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paged queries. The maximum value is **100**. The default value is **20**.
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

