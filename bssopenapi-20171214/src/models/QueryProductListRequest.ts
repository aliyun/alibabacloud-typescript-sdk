// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return the total number of services. Default value: false.
   * 
   * @example
   * true
   */
  queryTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryTotalCount: 'QueryTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      queryTotalCount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

