// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountAvailableAmountResponseBodyExtendLedgerList extends $dara.Model {
  /**
   * @remarks
   * Currency of the ledger amount, such as CNY and USD.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Ledger name
   * 
   * @example
   * 应付对冲账本
   */
  ledgerName?: string;
  /**
   * @remarks
   * Ledger balance
   * 
   * @example
   * 50
   */
  originalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      ledgerName: 'LedgerName',
      originalAmount: 'OriginalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      ledgerName: 'string',
      originalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList extends $dara.Model {
  /**
   * @remarks
   * Amount
   * 
   * @example
   * 10
   */
  amount?: string;
  /**
   * @remarks
   * Currency
   * 
   * @example
   * USD
   */
  currency?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Available amount
   * 
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @remarks
   * Available credit amount
   * 
   * @example
   * 50
   */
  availableCreditAmount?: string;
  /**
   * @remarks
   * Bank acceptance bill amount
   * 
   * @example
   * 0
   */
  bankAcceptanceAmount?: string;
  /**
   * @remarks
   * Cash balance
   * 
   * @example
   * 50
   */
  cashAmount?: string;
  /**
   * @remarks
   * Credit quota
   * 
   * @example
   * 100
   */
  creditAmount?: string;
  /**
   * @remarks
   * Credit refund balance
   * 
   * @example
   * 0
   */
  creditRefundAmount?: string;
  /**
   * @remarks
   * Indicates whether credit control is enabled
   */
  creditUser?: boolean;
  /**
   * @remarks
   * Currency
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Current month uncleared amount
   * 
   * @example
   * 20
   */
  currentMonthUnclearedAmount?: string;
  /**
   * @remarks
   * Extended ledger list
   */
  extendLedgerList?: GetFundAccountAvailableAmountResponseBodyExtendLedgerList[];
  /**
   * @remarks
   * Account ID
   * 
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @remarks
   * Account ID of the fund account owner
   * 
   * @example
   * 1344312434
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @remarks
   * Account status
   * 
   * @example
   * valid
   */
  fundAccountStatus?: string;
  /**
   * @remarks
   * Fund account type. Valid values:
   * DIRECT_USER: Alibaba Cloud direct customer account.
   * RESELLER_QUOTA: ecosystem account.
   * 
   * @example
   * REDIRECT_USER
   */
  fundAccountType?: string;
  /**
   * @remarks
   * Historical months uncleared amount
   * 
   * @example
   * 30
   */
  historyMonthUnclearedAmount?: string;
  /**
   * @remarks
   * Response metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Negative bill amount
   * 
   * @example
   * 0
   */
  negativeBillAmount?: string;
  /**
   * @remarks
   * Original cash ledger list. International site users may have cash ledgers in multiple currencies.
   */
  originalCashAmountList?: GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList[];
  /**
   * @remarks
   * Ecosystem end customer quota
   * 
   * @example
   * 20
   */
  quotaAmount?: string;
  /**
   * @remarks
   * Consumed quota of ecosystem end customer
   * 
   * @example
   * 10
   */
  quotaConsumedAmount?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F96A2D13-7509-5DF9-A60E-E7E3A3CB68E8
   */
  requestId?: string;
  /**
   * @remarks
   * Uncleared amount (current month uncleared + historical months uncleared)
   * 
   * @example
   * 50
   */
  unclearedAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      availableCreditAmount: 'AvailableCreditAmount',
      bankAcceptanceAmount: 'BankAcceptanceAmount',
      cashAmount: 'CashAmount',
      creditAmount: 'CreditAmount',
      creditRefundAmount: 'CreditRefundAmount',
      creditUser: 'CreditUser',
      currency: 'Currency',
      currentMonthUnclearedAmount: 'CurrentMonthUnclearedAmount',
      extendLedgerList: 'ExtendLedgerList',
      fundAccountId: 'FundAccountId',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      fundAccountStatus: 'FundAccountStatus',
      fundAccountType: 'FundAccountType',
      historyMonthUnclearedAmount: 'HistoryMonthUnclearedAmount',
      metadata: 'Metadata',
      negativeBillAmount: 'NegativeBillAmount',
      originalCashAmountList: 'OriginalCashAmountList',
      quotaAmount: 'QuotaAmount',
      quotaConsumedAmount: 'QuotaConsumedAmount',
      requestId: 'RequestId',
      unclearedAmount: 'UnclearedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      availableCreditAmount: 'string',
      bankAcceptanceAmount: 'string',
      cashAmount: 'string',
      creditAmount: 'string',
      creditRefundAmount: 'string',
      creditUser: 'boolean',
      currency: 'string',
      currentMonthUnclearedAmount: 'string',
      extendLedgerList: { 'type': 'array', 'itemType': GetFundAccountAvailableAmountResponseBodyExtendLedgerList },
      fundAccountId: 'string',
      fundAccountOwnerAccountId: 'string',
      fundAccountStatus: 'string',
      fundAccountType: 'string',
      historyMonthUnclearedAmount: 'string',
      metadata: 'any',
      negativeBillAmount: 'string',
      originalCashAmountList: { 'type': 'array', 'itemType': GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList },
      quotaAmount: 'string',
      quotaConsumedAmount: 'string',
      requestId: 'string',
      unclearedAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendLedgerList)) {
      $dara.Model.validateArray(this.extendLedgerList);
    }
    if(Array.isArray(this.originalCashAmountList)) {
      $dara.Model.validateArray(this.originalCashAmountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

