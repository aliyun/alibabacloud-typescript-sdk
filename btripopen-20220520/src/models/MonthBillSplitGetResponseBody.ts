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

export class MonthBillSplitGetResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  module?: MonthBillSplitGetResponseBodyModule[];
  /**
   * @example
   * 407543AF-****-****-****-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': MonthBillSplitGetResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

