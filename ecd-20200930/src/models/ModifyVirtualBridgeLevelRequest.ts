// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBridgeLevelRequest extends $dara.Model {
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
   * Specifies whether to enable auto-renewal. This parameter takes effect and is optional only when the billing method is `PrePaid`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vb-sfjoasjfosdfj**
   */
  bridgeId?: string;
  /**
   * @remarks
   * The virtual bridge specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * vb.pro
   */
  bridgeLevel?: string;
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
   * The renewal duration. Valid values of this parameter are determined by the value of the `PeriodUnit` parameter.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, and 6.
   * - If `PeriodUnit` is set to `Year`, valid values are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the prepaid cloud disk. This parameter takes effect and is required only when the `CdsChargeType` parameter is set to `PrePaid`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID. You can call the pricing query operation to obtain the list of matched promotion IDs.
   * 
   * @example
   * 23141
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by WUYING Workspace.
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
      bridgeId: 'BridgeId',
      bridgeLevel: 'BridgeLevel',
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
      bridgeId: 'string',
      bridgeLevel: 'string',
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

