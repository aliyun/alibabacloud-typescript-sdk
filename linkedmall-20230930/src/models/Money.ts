// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class MoneyCurrency extends $dara.Model {
  /**
   * @remarks
   * currencyCode
   */
  currencyCode?: string;
  /**
   * @remarks
   * defaultFractionDigits
   */
  defaultFractionDigits?: number;
  /**
   * @remarks
   * displayName
   */
  displayName?: string;
  /**
   * @remarks
   * numericCode
   */
  numericCode?: number;
  /**
   * @remarks
   * symbol
   */
  symbol?: string;
  static names(): { [key: string]: string } {
    return {
      currencyCode: 'currencyCode',
      defaultFractionDigits: 'defaultFractionDigits',
      displayName: 'displayName',
      numericCode: 'numericCode',
      symbol: 'symbol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currencyCode: 'string',
      defaultFractionDigits: 'number',
      displayName: 'string',
      numericCode: 'number',
      symbol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Money extends $dara.Model {
  /**
   * @remarks
   * amount
   */
  amount?: number;
  /**
   * @remarks
   * amountAsString
   */
  amountAsString?: string;
  /**
   * @remarks
   * amountString
   */
  amountString?: string;
  /**
   * @remarks
   * cent
   */
  cent?: number;
  /**
   * @remarks
   * currency
   */
  currency?: MoneyCurrency;
  /**
   * @remarks
   * currencyCode
   */
  currencyCode?: string;
  /**
   * @remarks
   * positive
   */
  positive?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      amountAsString: 'amountAsString',
      amountString: 'amountString',
      cent: 'cent',
      currency: 'currency',
      currencyCode: 'currencyCode',
      positive: 'positive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      amountAsString: 'string',
      amountString: 'string',
      cent: 'number',
      currency: MoneyCurrency,
      currencyCode: 'string',
      positive: 'boolean',
    };
  }

  validate() {
    if(this.currency && typeof (this.currency as any).validate === 'function') {
      (this.currency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

