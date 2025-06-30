// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillSplitGetResponseBodyModule extends $dara.Model {
  /**
   * @example
   * invoice_third_part_id123
   */
  billSplitKey?: string;
  /**
   * @example
   * 2023-12-31
   */
  endDate?: string;
  /**
   * @example
   * 2023-12-01
   */
  startDate?: string;
  /**
   * @example
   * https://alibtrip-oss.oss-cn-hangzhou.aliyuncs.com/********
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      billSplitKey: 'bill_split_key',
      endDate: 'end_date',
      startDate: 'start_date',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billSplitKey: 'string',
      endDate: 'string',
      startDate: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

