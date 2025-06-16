// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountFlowListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dayNum?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1677427200000
   */
  utcBeginTime?: number;
  static names(): { [key: string]: string } {
    return {
      dayNum: 'day_num',
      pageIndex: 'page_index',
      pageSize: 'page_size',
      utcBeginTime: 'utc_begin_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayNum: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      utcBeginTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

