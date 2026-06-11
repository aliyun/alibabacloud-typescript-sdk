// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenewalRateListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Adjusted amount due for Gold customer renewal
   * 
   * @example
   * 100
   */
  customerAdjustedRenewalAmountDue?: number;
  /**
   * @remarks
   * Rewind amount for new customer acquisition upgrade
   * 
   * @example
   * 100
   */
  customerOtherBillAmount?: number;
  /**
   * @remarks
   * Amount due for Gold customer renewal
   * 
   * @example
   * 100
   */
  finalCustomerRenewalAmountDue?: number;
  /**
   * @remarks
   * Gold customer commission renewal rate
   * 
   * @example
   * 0.9
   */
  finalCustomerRenewalRate?: number;
  /**
   * @remarks
   * Renewed amount from customer acquisition
   * 
   * @example
   * 100
   */
  finalCustomerRenewedAmount?: number;
  /**
   * @remarks
   * Total rewind amount for new upgrades
   * 
   * @example
   * 100
   */
  finalOtherBillAmount?: number;
  /**
   * @remarks
   * Final amount due for renewal
   * 
   * @example
   * 100
   */
  finalRenewalAmountDue?: number;
  /**
   * @remarks
   * Final commission renewal rate
   * 
   * @example
   * 0.9
   */
  finalRenewalRate?: number;
  /**
   * @remarks
   * Final renewed amount
   * 
   * @example
   * 100
   */
  finalRenewedAmount?: number;
  /**
   * @remarks
   * Renewal amount due from channel partner acquisition
   * 
   * @example
   * 100
   */
  finalSubPartnerRenewalAmountDue?: number;
  /**
   * @remarks
   * Channel expansion commission renewal rate
   * 
   * @example
   * 0.85
   */
  finalSubPartnerRenewalRate?: number;
  /**
   * @remarks
   * Renewed amount from channel partner acquisition
   * 
   * @example
   * 100
   */
  finalSubPartnerRenewedAmount?: number;
  /**
   * @remarks
   * Fiscal year and quarter
   * 
   * @example
   * 2025Q4
   */
  fiscalYearAndQuarter?: string;
  /**
   * @remarks
   * Partner PID
   * 
   * @example
   * P123423453
   */
  masterPid?: string;
  /**
   * @remarks
   * Partner PID name
   * 
   * @example
   * XX有限公司
   */
  masterPidName?: string;
  /**
   * @remarks
   * Gold customer commission renewal rate including special approval
   * 
   * @example
   * 0.7
   */
  specialCustomerRenewRatio?: number;
  /**
   * @remarks
   * Renewal amount due including specially approved customer acquisition
   * 
   * @example
   * 100
   */
  specialCustomerRenewalAmountDue?: number;
  /**
   * @remarks
   * Renewed amount including specially approved customer acquisition
   * 
   * @example
   * 100
   */
  specialCustomerRenewedAmount?: number;
  /**
   * @remarks
   * Renewal rate including specially approved final quarter commission
   * 
   * @example
   * 0.7
   */
  specialFinalRenewRatio?: number;
  /**
   * @remarks
   * Renewal amount due for final quarterly commission including special approvals
   * 
   * @example
   * 100
   */
  specialFinalRenewalAmountDue?: number;
  /**
   * @remarks
   * Renewed amount including specially approved final quarter commission
   * 
   * @example
   * 100
   */
  specialFinalRenewedAmount?: number;
  /**
   * @remarks
   * Channel expansion commission renewal rate including special approval
   * 
   * @example
   * 0.8
   */
  specialSubPartnerRenewRatio?: number;
  /**
   * @remarks
   * Amount due for renewal including specially approved channel partner
   * 
   * @example
   * 100
   */
  specialSubPartnerRenewalAmountDue?: number;
  /**
   * @remarks
   * Renewed amount including specially approved channel partner renewals
   * 
   * @example
   * 100
   */
  specialSubPartnerRenewedAmount?: number;
  /**
   * @remarks
   * Adjusted amount due for channel partner renewal
   * 
   * @example
   * 100
   */
  subPartnerAdjustedRenewalAmountDue?: number;
  /**
   * @remarks
   * Channel partner new upgrade rewind amount
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
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: GetRenewalRateListResponseBodyData[];
  /**
   * @remarks
   * Message
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
   * Indicates whether the invocation succeeded.
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

