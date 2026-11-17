// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseRatePlanRequest extends $dara.Model {
  /**
   * @remarks
   * The number of plans to purchase.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Set this parameter to true when you directly call the operation.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * - true: Enables auto-renewal.
   * - false: Disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The channel field.
   * 
   * @example
   * xxxWodkxxx
   */
  channel?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PREPAY: Subscription.
   * - POSTPAY: Pay-as-you-go.
   * Set this parameter to PREPAY when you directly call the operation.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * - domestic: The Chinese mainland only.
   * - global: Global.
   * - overseas: Global, excluding the Chinese mainland.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The overage policy.
   * 
   * @example
   * limit_speed
   */
  overagePolicy?: string;
  /**
   * @remarks
   * The subscription period. Unit: months. This parameter is required when you directly call the operation.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The code of the plan.
   * 
   * China site
   * 
   * - Free Edition: entranceplan
   * - Basic Edition: basicplan
   * - Standard Edition: standardplan
   * - Advanced Edition: advancedplan
   * 
   * International site
   * 
   * - Entrance: entranceplan
   * - Pro: standardplan
   * - Premium: advancedpla
   * 
   * @example
   * basicplan
   */
  planCode?: string;
  /**
   * @remarks
   * The name of the plan.
   * 
   * China site
   * 
   * - Free Edition: entranceplan
   * - Basic Edition: basic
   * - Standard Edition: medium
   * - Advanced Edition: high
   * 
   * International site
   * 
   * - Entrance: entranceplan_intl
   * - Pro: basicplan_intl
   * - Premium: vipplan_intl
   * 
   * Note: For Enterprise Edition plans, the plan name must be configured in the backend and then provided to the customer.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The name of the site.
   * 
   * @example
   * test.com
   */
  siteName?: string;
  /**
   * @remarks
   * The site access type. Valid values:
   * - NS: NS access.
   * - CNAME: CNAME access.
   * 
   * @example
   * CNAME
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      channel: 'Channel',
      chargeType: 'ChargeType',
      coverage: 'Coverage',
      overagePolicy: 'OveragePolicy',
      period: 'Period',
      planCode: 'PlanCode',
      planName: 'PlanName',
      siteName: 'SiteName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      channel: 'string',
      chargeType: 'string',
      coverage: 'string',
      overagePolicy: 'string',
      period: 'number',
      planCode: 'string',
      planName: 'string',
      siteName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

