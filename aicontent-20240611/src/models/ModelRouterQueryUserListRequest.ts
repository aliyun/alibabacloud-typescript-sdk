// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryUserListRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * John
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the phone number for exact matching (not fuzzy). When specified together with keyword, the two conditions are combined with AND, meaning both must be satisfied. If not specified, no filtering by phone number is applied.
   * 
   * @example
   * 13800000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

