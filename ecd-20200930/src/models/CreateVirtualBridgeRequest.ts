// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBridgeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The bridge specifications.
   * 
   * @example
   * vb.ultra
   */
  bridgeLevel?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The payment callback URL.
   * 
   * @example
   * https://wya.wuying.aliyun.com/mobileClaw
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The duration for which you want to purchase the resource. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `ChargeType` is set to `PrePaid`.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values:
   * 
   *      - 1
   *     -  2
   *     - 3
   *     - 6
   * 
   * - If `PeriodUnit` is set to `Year`, valid values:
   * 
   *     - 1
   *     - 2
   *     - 3
   *     - 4
   *     - 5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of duration for the subscription billable methods.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. This feature is not region-specific. Set this parameter to cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bridgeLevel: 'BridgeLevel',
      officeSiteId: 'OfficeSiteId',
      paidCallBackUrl: 'PaidCallBackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bridgeLevel: 'string',
      officeSiteId: 'string',
      paidCallBackUrl: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

