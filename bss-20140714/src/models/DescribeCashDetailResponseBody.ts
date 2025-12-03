// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCashDetailResponseBody extends $dara.Model {
  amountOwed?: string;
  availableCredit?: string;
  balanceAmount?: string;
  creditCardAmount?: string;
  creditLimit?: string;
  enableThresholdAlert?: string;
  frozenAmount?: string;
  miniAlertThreshold?: number;
  remmitanceAmount?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      amountOwed: 'AmountOwed',
      availableCredit: 'AvailableCredit',
      balanceAmount: 'BalanceAmount',
      creditCardAmount: 'CreditCardAmount',
      creditLimit: 'CreditLimit',
      enableThresholdAlert: 'EnableThresholdAlert',
      frozenAmount: 'FrozenAmount',
      miniAlertThreshold: 'MiniAlertThreshold',
      remmitanceAmount: 'RemmitanceAmount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountOwed: 'string',
      availableCredit: 'string',
      balanceAmount: 'string',
      creditCardAmount: 'string',
      creditLimit: 'string',
      enableThresholdAlert: 'string',
      frozenAmount: 'string',
      miniAlertThreshold: 'number',
      remmitanceAmount: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

