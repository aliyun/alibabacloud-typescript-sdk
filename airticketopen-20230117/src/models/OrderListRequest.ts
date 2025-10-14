// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderListRequest extends $dara.Model {
  /**
   * @remarks
   * latest booking time (timestamp)
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229005000
   */
  bookTimeEnd?: number;
  /**
   * @remarks
   * earliest book time(timestamp)
   * 
   * This parameter is required.
   * 
   * @example
   * 1677227005000
   */
  bookTimeStart?: number;
  /**
   * @remarks
   * pagination query parameters, from which page to start querying,querying starts with 0
   * 
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @remarks
   * pagination query parameters, how many orders to return
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * which order status will be query
   * 
   * 1: order reservation in process
   * 
   * 2: order reservation successful
   * 
   * 3: order paid
   * 
   * 4: order successful
   * 
   * 5: order closed
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

