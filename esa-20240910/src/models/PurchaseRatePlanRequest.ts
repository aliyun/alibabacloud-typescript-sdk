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
   * Specifies whether to enable automatic payment.
   * Set this parameter to true when you directly call this operation.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * - true: Auto-renewal is enabled.
   * - false: Auto-renewal is disabled.
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
   * - PREPAY: subscription.
   * - POSTPAY: pay-as-you-go.
   * Set this parameter to PREPAY when you directly call this operation.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * - domestic: the Chinese mainland only.
   * - global: global.
   * - overseas: global (excluding the Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The purchase period, in months.
   * This parameter is required when you directly call this operation.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The plan code.
   * 
   * China site
   * 
   * - Free Edition: entranceplan
   * - Basic: basicplan
   * - Standard: standardplan
   * - Premium: advancedplan
   * 
   * International site
   * 
   * - Entrance: entranceplan
   * - Pro: standardplan
   * - Premium: advancedpla.
   * 
   * @example
   * basicplan
   */
  planCode?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * China site
   * 
   * - Free Edition: entranceplan
   * - Basic: basic
   * - Standard: medium
   * - Premium: high
   * 
   * International site
   * 
   * - Entrance: entranceplan_intl
   * - Pro: basicplan_intl
   * - Premium: vipplan_intl
   * 
   * > Note: For Enterprise Edition plans, the plan name is provided after backend configuration.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The site name.
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

