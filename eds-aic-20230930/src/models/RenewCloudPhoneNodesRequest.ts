// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The list of cloud phone matrix IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The redirect URL for the payment success page.
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The subscription period. The unit is specified by PeriodUnit.
   * 
   * - If PeriodUnit is set to **year**, the only valid value is 1.
   * - If PeriodUnit is set to **month**, valid values are 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      nodeIds: 'NodeIds',
      paidCallBackUrl: 'PaidCallBackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      paidCallBackUrl: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

