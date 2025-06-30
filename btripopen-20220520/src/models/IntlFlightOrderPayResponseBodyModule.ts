// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderPayResponseBodyModule extends $dara.Model {
  actualPayPrice?: number;
  payStatus?: number;
  static names(): { [key: string]: string } {
    return {
      actualPayPrice: 'actual_pay_price',
      payStatus: 'pay_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPayPrice: 'number',
      payStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

