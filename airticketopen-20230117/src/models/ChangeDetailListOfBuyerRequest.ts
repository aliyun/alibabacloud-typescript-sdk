// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailListOfBuyerRequest extends $dara.Model {
  /**
   * @remarks
   * The page index.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for change order creation. The value is a 13-digit UTC timestamp.
   * 
   * @example
   * 1677415276000
   */
  utcCreateBegin?: number;
  /**
   * @remarks
   * The end time for change order creation. The value is a 13-digit UTC timestamp.
   * 
   * @example
   * 1677415279000
   */
  utcCreateEnd?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'page_index',
      pageSize: 'page_size',
      utcCreateBegin: 'utc_create_begin',
      utcCreateEnd: 'utc_create_end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      utcCreateBegin: 'number',
      utcCreateEnd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

