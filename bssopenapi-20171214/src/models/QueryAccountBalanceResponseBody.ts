// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountBalanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The available balance of the account.
   * 
   * @example
   * 10000.00
   */
  availableAmount?: string;
  /**
   * @remarks
   * The available balance in cash.
   * 
   * @example
   * 10000.00
   */
  availableCashAmount?: string;
  /**
   * @remarks
   * The credit balance of the account.
   * 
   * @example
   * 0.00
   */
  creditAmount?: string;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   CNY: Chinese Yuan
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The credit line controlled by MYbank.
   * 
   * @example
   * 0.00
   */
  mybankCreditAmount?: string;
  /**
   * @remarks
   * The quota limit for eco customers.
   * 
   * @example
   * 10000.00
   */
  quotaLimit?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      availableCashAmount: 'AvailableCashAmount',
      creditAmount: 'CreditAmount',
      currency: 'Currency',
      mybankCreditAmount: 'MybankCreditAmount',
      quotaLimit: 'QuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      availableCashAmount: 'string',
      creditAmount: 'string',
      currency: 'string',
      mybankCreditAmount: 'string',
      quotaLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountBalanceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16176743-6DC7-4CB3-BB25-A13982D8DFAD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountBalanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

