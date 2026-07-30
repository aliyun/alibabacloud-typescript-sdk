// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewVirtualBridgeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
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
   * vb-shfisahfihs***
   */
  bridgeId?: string;
  /**
   * @remarks
   * The payment callback URL.
   * 
   * @example
   * https://edu.wuying.aliyun.com/edu/school-manage
   */
  paidCallBackUrl?: string;
  /**
   * @remarks
   * The renewal duration. The valid values of this parameter are determined by the value of the `PeriodUnit` parameter.
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
   * The unit of the renewal duration, which is the unit of the `Period` parameter.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003836003****
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by WUYING Workspace.
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

