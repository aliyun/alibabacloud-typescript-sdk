// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo extends $dara.Model {
  cheapRate?: string;
  cheapStandAmount?: string;
  isShow?: boolean;
  monthPrice?: string;
  originalStandAmount?: string;
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

