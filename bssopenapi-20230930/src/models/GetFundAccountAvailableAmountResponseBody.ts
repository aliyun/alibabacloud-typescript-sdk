// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFundAccountAvailableAmountResponseBodyExtendLedgerList } from "./GetFundAccountAvailableAmountResponseBodyExtendLedgerList";
import { GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList } from "./GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList";


export class GetFundAccountAvailableAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @example
   * 50
   */
  availableCreditAmount?: string;
  /**
   * @example
   * 0
   */
  bankAcceptanceAmount?: string;
  /**
   * @example
   * 50
   */
  cashAmount?: string;
  /**
   * @example
   * 100
   */
  creditAmount?: string;
  /**
   * @example
   * 0
   */
  creditRefundAmount?: string;
  creditUser?: boolean;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 20
   */
  currentMonthUnclearedAmount?: string;
  extendLedgerList?: GetFundAccountAvailableAmountResponseBodyExtendLedgerList[];
  /**
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @example
   * 1344312434
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * valid
   */
  fundAccountStatus?: string;
  /**
   * @example
   * REDIRECT_USER
   */
  fundAccountType?: string;
  /**
   * @example
   * 30
   */
  historyMonthUnclearedAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 0
   */
  negativeBillAmount?: string;
  originalCashAmountList?: GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList[];
  /**
   * @example
   * 20
   */
  quotaAmount?: string;
  /**
   * @example
   * 10
   */
  quotaConsumedAmount?: string;
  /**
   * @example
   * F96A2D13-7509-5DF9-A60E-E7E3A3CB68E8
   */
  requestId?: string;
  /**
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

