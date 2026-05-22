// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseRatePlanRequest extends $dara.Model {
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Auto-renewal:
   * - true: Enable auto-renewal.
   * - false: Disable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  channel?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PREPAY: subscription.
   * *   POSTPAY: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The service location. Valid values:
   * 
   * *   domestic: the Chinese mainland.
   * *   global: global.
   * *   overseas: outside the Chinese mainland.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * Subscription period (in months).
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Package code.
   * 
   * @example
   * entranceplan
   */
  planCode?: string;
  /**
   * @remarks
   * Package name.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * Site name.
   * 
   * @example
   * test.com
   */
  siteName?: string;
  /**
   * @remarks
   * The DNS setup option for the website. Valid values:
   * 
   * *   NS
   * *   CNAME
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

