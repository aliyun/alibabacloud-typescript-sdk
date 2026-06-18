// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenewalRateListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The adjusted customer acquisition amount due for renewal.
   * 
   * @example
   * 100
   */
  customerAdjustedRenewalAmountDue?: number;
  /**
   * @remarks
   * The customer acquisition amount for new purchases, upgrades, and refunds.
   * 
   * @example
   * 100
   */
  customerOtherBillAmount?: number;
  /**
   * @remarks
   * The customer acquisition amount due for renewal.
   * 
   * @example
   * 100
   */
  finalCustomerRenewalAmountDue?: number;
  /**
   * @remarks
   * The customer acquisition commission renewal rate.
   * 
   * @example
   * 0.9
   */
  finalCustomerRenewalRate?: number;
  /**
   * @remarks
   * The customer acquisition renewed amount.
   * 
   * @example
   * 100
   */
  finalCustomerRenewedAmount?: number;
  /**
   * @remarks
   * The total amount for new purchases, upgrades, and refunds.
   * 
   * @example
   * 100
   */
  finalOtherBillAmount?: number;
  /**
   * @remarks
   * The final amount due for renewal.
   * 
   * @example
   * 100
   */
  finalRenewalAmountDue?: number;
  /**
   * @remarks
   * The final commission renewal rate.
   * 
   * @example
   * 0.9
   */
  finalRenewalRate?: number;
  /**
   * @remarks
   * The final renewed amount.
   * 
   * @example
   * 100
   */
  finalRenewedAmount?: number;
  /**
   * @remarks
   * The sub-partner acquisition amount due for renewal.
   * 
   * @example
   * 100
   */
  finalSubPartnerRenewalAmountDue?: number;
  /**
   * @remarks
   * The sub-partner acquisition commission renewal rate.
   * 
   * @example
   * 0.85
   */
  finalSubPartnerRenewalRate?: number;
  /**
   * @remarks
   * The sub-partner acquisition renewed amount.
   * 
   * @example
   * 100
   */
  finalSubPartnerRenewedAmount?: number;
  /**
   * @remarks
   * The fiscal year and quarter.
   * 
   * @example
   * 2025Q4
   */
  fiscalYearAndQuarter?: string;
  /**
   * @remarks
   * The partner PID.
   * 
   * @example
   * P123423453
   */
  masterPid?: string;
  /**
   * @remarks
   * The partner PID name.
   * 
   * @example
   * XX有限公司
   */
  masterPidName?: string;
  /**
   * @remarks
   * The customer acquisition commission renewal rate including special approvals.
   * 
   * @example
   * 0.7
   */
  specialCustomerRenewRatio?: number;
  /**
   * @remarks
   * The customer acquisition amount due for renewal including special approvals.
   * 
   * @example
   * 100
   */
  specialCustomerRenewalAmountDue?: number;
  /**
   * @remarks
   * The customer acquisition renewed amount including special approvals.
   * 
   * @example
   * 100
   */
  specialCustomerRenewedAmount?: number;
  /**
   * @remarks
   * The final quarterly commission renewal rate including special approvals.
   * 
   * @example
   * 0.7
   */
  specialFinalRenewRatio?: number;
  /**
   * @remarks
   * The final quarterly commission amount due for renewal including special approvals.
   * 
   * @example
   * 100
   */
  specialFinalRenewalAmountDue?: number;
  /**
   * @remarks
   * The final quarterly commission renewed amount including special approvals.
   * 
   * @example
   * 100
   */
  specialFinalRenewedAmount?: number;
  /**
   * @remarks
   * The sub-partner acquisition commission renewal rate including special approvals.
   * 
   * @example
   * 0.8
   */
  specialSubPartnerRenewRatio?: number;
  /**
   * @remarks
   * The sub-partner acquisition amount due for renewal including special approvals.
   * 
   * @example
   * 100
   */
  specialSubPartnerRenewalAmountDue?: number;
  /**
   * @remarks
   * The sub-partner acquisition renewed amount including special approvals.
   * 
   * @example
   * 100
   */
  specialSubPartnerRenewedAmount?: number;
  /**
   * @remarks
   * The adjusted sub-partner acquisition amount due for renewal.
   * 
   * @example
   * 100
   */
  subPartnerAdjustedRenewalAmountDue?: number;
  /**
   * @remarks
   * The sub-partner acquisition amount for new purchases, upgrades, and refunds.
   * 
   * @example
   * 100
   */
  subPartnerOtherBillAmount?: number;
  static names(): { [key: string]: string } {
    return {
      customerAdjustedRenewalAmountDue: 'CustomerAdjustedRenewalAmountDue',
      customerOtherBillAmount: 'CustomerOtherBillAmount',
      finalCustomerRenewalAmountDue: 'FinalCustomerRenewalAmountDue',
      finalCustomerRenewalRate: 'FinalCustomerRenewalRate',
      finalCustomerRenewedAmount: 'FinalCustomerRenewedAmount',
      finalOtherBillAmount: 'FinalOtherBillAmount',
      finalRenewalAmountDue: 'FinalRenewalAmountDue',
      finalRenewalRate: 'FinalRenewalRate',
      finalRenewedAmount: 'FinalRenewedAmount',
      finalSubPartnerRenewalAmountDue: 'FinalSubPartnerRenewalAmountDue',
      finalSubPartnerRenewalRate: 'FinalSubPartnerRenewalRate',
      finalSubPartnerRenewedAmount: 'FinalSubPartnerRenewedAmount',
      fiscalYearAndQuarter: 'FiscalYearAndQuarter',
      masterPid: 'MasterPid',
      masterPidName: 'MasterPidName',
      specialCustomerRenewRatio: 'SpecialCustomerRenewRatio',
      specialCustomerRenewalAmountDue: 'SpecialCustomerRenewalAmountDue',
      specialCustomerRenewedAmount: 'SpecialCustomerRenewedAmount',
      specialFinalRenewRatio: 'SpecialFinalRenewRatio',
      specialFinalRenewalAmountDue: 'SpecialFinalRenewalAmountDue',
      specialFinalRenewedAmount: 'SpecialFinalRenewedAmount',
      specialSubPartnerRenewRatio: 'SpecialSubPartnerRenewRatio',
      specialSubPartnerRenewalAmountDue: 'SpecialSubPartnerRenewalAmountDue',
      specialSubPartnerRenewedAmount: 'SpecialSubPartnerRenewedAmount',
      subPartnerAdjustedRenewalAmountDue: 'SubPartnerAdjustedRenewalAmountDue',
      subPartnerOtherBillAmount: 'SubPartnerOtherBillAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAdjustedRenewalAmountDue: 'number',
      customerOtherBillAmount: 'number',
      finalCustomerRenewalAmountDue: 'number',
      finalCustomerRenewalRate: 'number',
      finalCustomerRenewedAmount: 'number',
      finalOtherBillAmount: 'number',
      finalRenewalAmountDue: 'number',
      finalRenewalRate: 'number',
      finalRenewedAmount: 'number',
      finalSubPartnerRenewalAmountDue: 'number',
      finalSubPartnerRenewalRate: 'number',
      finalSubPartnerRenewedAmount: 'number',
      fiscalYearAndQuarter: 'string',
      masterPid: 'string',
      masterPidName: 'string',
      specialCustomerRenewRatio: 'number',
      specialCustomerRenewalAmountDue: 'number',
      specialCustomerRenewedAmount: 'number',
      specialFinalRenewRatio: 'number',
      specialFinalRenewalAmountDue: 'number',
      specialFinalRenewedAmount: 'number',
      specialSubPartnerRenewRatio: 'number',
      specialSubPartnerRenewalAmountDue: 'number',
      specialSubPartnerRenewedAmount: 'number',
      subPartnerAdjustedRenewalAmountDue: 'number',
      subPartnerOtherBillAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenewalRateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRenewalRateListResponseBodyData[];
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      data: { 'type': 'array', 'itemType': GetRenewalRateListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

