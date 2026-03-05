// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListDayAmountResponseBodyDayAmounts extends $dara.Model {
  amount?: number;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDayAmountResponseBody extends $dara.Model {
  dayAmounts?: ListDayAmountResponseBodyDayAmounts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dayAmounts: 'DayAmounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayAmounts: { 'type': 'array', 'itemType': ListDayAmountResponseBodyDayAmounts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dayAmounts)) {
      $dara.Model.validateArray(this.dayAmounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

