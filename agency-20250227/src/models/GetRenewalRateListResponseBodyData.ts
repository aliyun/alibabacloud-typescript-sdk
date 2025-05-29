// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenewalRateListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  customerAdjustedRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  customerOtherBillAmount?: number;
  /**
   * @example
   * 100
   */
  finalCustomerRenewalAmountDue?: number;
  /**
   * @example
   * 0.9
   */
  finalCustomerRenewalRate?: number;
  /**
   * @example
   * 100
   */
  finalCustomerRenewedAmount?: number;
  /**
   * @example
   * 100
   */
  finalOtherBillAmount?: number;
  /**
   * @example
   * 100
   */
  finalRenewalAmountDue?: number;
  /**
   * @example
   * 0.9
   */
  finalRenewalRate?: number;
  /**
   * @example
   * 100
   */
  finalRenewedAmount?: number;
  /**
   * @example
   * 100
   */
  finalSubPartnerRenewalAmountDue?: number;
  /**
   * @example
   * 0.85
   */
  finalSubPartnerRenewalRate?: number;
  /**
   * @example
   * 100
   */
  finalSubPartnerRenewedAmount?: number;
  /**
   * @example
   * 2025Q4
   */
  fiscalYearAndQuarter?: string;
  /**
   * @example
   * P123423453
   */
  masterPid?: string;
  masterPidName?: string;
  /**
   * @example
   * 0.7
   */
  specialCustomerRenewRatio?: number;
  /**
   * @example
   * 100
   */
  specialCustomerRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  specialCustomerRenewedAmount?: number;
  /**
   * @example
   * 0.7
   */
  specialFinalRenewRatio?: number;
  /**
   * @example
   * 100
   */
  specialFinalRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  specialFinalRenewedAmount?: number;
  /**
   * @example
   * 0.8
   */
  specialSubPartnerRenewRatio?: number;
  /**
   * @example
   * 100
   */
  specialSubPartnerRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  specialSubPartnerRenewedAmount?: number;
  /**
   * @example
   * 100
   */
  subPartnerAdjustedRenewalAmountDue?: number;
  /**
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

