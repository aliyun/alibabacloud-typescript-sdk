// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkPackageBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the premium bandwidth plan, in Mbit/s.
   * 
   * - For subscription premium bandwidth, the valid range is 2 to 1000.
   * 
   * - For pay-as-you-go premium bandwidth with pay-by-traffic billing, the valid range is 2 to 200.
   * 
   * - For pay-as-you-go premium bandwidth with pay-by-bandwidth billing, the valid range is 2 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the premium bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * np-cxj99qb8d34vo****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 500033080110596
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [](t2167755.xdita#)operation to query the list of regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      networkPackageId: 'NetworkPackageId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      networkPackageId: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

