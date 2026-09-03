// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkPackageBandwidthRequest extends $dara.Model {
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
   * The bandwidth of the premium Internet bandwidth plan. Unit: Mbit/s.    
   * 
   * - If the premium bandwidth plan uses the subscription billing method, the valid values are 2 to 1000.
   * - If the premium bandwidth plan uses the pay-as-you-go billing method and the metering method is pay-by-data-transfer (PayByTraffic), the valid values are 2 to 200.
   * - If the premium bandwidth plan uses the pay-as-you-go billing method and the metering method is pay-by-bandwidth (PayByBandwidth), the valid values are 2 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the premium Internet bandwidth plan.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the resource ownership in the reseller pattern. You do not need to specify this parameter if you are not using the reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
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

