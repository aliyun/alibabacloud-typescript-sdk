// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderListResponseBodyDataPagination extends $dara.Model {
  /**
   * @remarks
   * current page index
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * the number of total orders
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * the number of total pages
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

