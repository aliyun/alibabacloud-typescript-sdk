// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConvertPrepayInstancePriceResponseBodyPriceInfoDepreciateInfo extends $dara.Model {
  /**
   * @example
   * 20%
   */
  cheapRate?: string;
  /**
   * @example
   * 8000
   */
  cheapStandAmount?: string;
  /**
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @example
   * 4000
   */
  monthPrice?: string;
  /**
   * @example
   * 10000
   */
  originalStandAmount?: string;
  /**
   * @example
   * 2023-03-31T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'string',
      cheapStandAmount: 'string',
      isShow: 'boolean',
      monthPrice: 'string',
      originalStandAmount: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

