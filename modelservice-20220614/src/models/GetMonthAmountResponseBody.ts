// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonthAmountResponseBody extends $dara.Model {
  backgroundAmount?: number;
  postpayAmount?: number;
  prepayAmount?: number;
  requestId?: string;
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      backgroundAmount: 'BackgroundAmount',
      postpayAmount: 'PostpayAmount',
      prepayAmount: 'PrepayAmount',
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundAmount: 'number',
      postpayAmount: 'number',
      prepayAmount: 'number',
      requestId: 'string',
      totalAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

