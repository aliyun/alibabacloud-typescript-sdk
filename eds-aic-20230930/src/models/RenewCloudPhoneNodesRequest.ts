// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. The default value is false.
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
   * A list of cloud phone matrix IDs.
   */
  nodeIds?: string[];
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The renewal duration. The `PeriodUnit` parameter specifies the unit.
   * 
   * - If `PeriodUnit` is **Year**, the value must be 1.
   * 
   * - If `PeriodUnit` is **Month**, the valid values are 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
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

