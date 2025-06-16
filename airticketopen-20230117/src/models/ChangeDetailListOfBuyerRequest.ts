// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailListOfBuyerRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1677415276000
   */
  utcCreateBegin?: number;
  /**
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

