// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderListRequest extends $dara.Model {
  /**
   * @remarks
   * The query end time. The value is a 13-digit UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229006000
   */
  bookTimeEnd?: number;
  /**
   * @remarks
   * The query start time. The value is a 13-digit UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229005000
   */
  bookTimeStart?: number;
  /**
   * @remarks
   * The page index. The value starts from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 2: order creation succeeded.
   * - 3: order paid.
   * - 4: order succeeded.
   * - 5: order closed.
   * 
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bookTimeEnd: 'book_time_end',
      bookTimeStart: 'book_time_start',
      pageIndex: 'page_index',
      pageSize: 'page_size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTimeEnd: 'number',
      bookTimeStart: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

