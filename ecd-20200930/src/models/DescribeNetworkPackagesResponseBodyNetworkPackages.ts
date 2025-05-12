// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPackagesResponseBodyNetworkPackages extends $dara.Model {
  /**
   * @remarks
   * The bandwidth provided by the premium bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status.
   * 
   * Valid values:
   * 
   * *   Expired
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Normal
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the premium bandwidth plan was created.
   * 
   * @example
   * 2021-05-10T02:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The public egress IP address of the premium bandwidth plan.
   */
  eipAddresses?: string[];
  /**
   * @remarks
   * The time when the premium bandwidth plan expires.
   * 
   * *   If the plan is a subscription one, the time when the plan expires is returned.
   * *   If the plan is a pay-as-you-go one, `2099-12-31T15:59:59Z` is returned.
   * 
   * @example
   * 2099-12-31T15:59:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The charge type of the premium bandwidth plan.
   * 
   * *   Valid value when the `PayType` parameter is set to `PrePaid`:
   * 
   *     *   PayByBandwidth: charges by fixed bandwidth.
   * 
   * *   Valid values when the `PayType` parameter is set to `PostPaid`:
   * 
   *     *   PayByTraffic: charges by data transfer.
   *     *   PayByBandwidth: charges by fixed bandwidth.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the premium bandwidth plan.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The status of the premium bandwidth plan.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Released
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   InUse
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Releasing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * InUse
   */
  networkPackageStatus?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The type of the office network.
   * 
   * Valid values:
   * 
   * *   standard: advanced office network
   * *   customized: custom office network
   * *   basic: basic office network
   * 
   * @example
   * basic
   */
  officeSiteVpcType?: string;
  /**
   * @remarks
   * The billing method of the premium bandwidth plan.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The time when the reserved network bandwidth took effect.
   * 
   * @example
   * 2021-07-10T00:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The peak bandwidth that is reserved for the premium bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 20
   */
  reservationBandwidth?: number;
  /**
   * @remarks
   * The billing method of the reserved network bandwidth.
   * 
   * Valid values:
   * 
   * *   PayByTraffic: charges by data transfer.
   * 
   * *   PayByBandwidth: charges by fixed bandwidth.
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      eipAddresses: 'EipAddresses',
      expiredTime: 'ExpiredTime',
      internetChargeType: 'InternetChargeType',
      networkPackageId: 'NetworkPackageId',
      networkPackageStatus: 'NetworkPackageStatus',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteVpcType: 'OfficeSiteVpcType',
      payType: 'PayType',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'string',
      eipAddresses: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      internetChargeType: 'string',
      networkPackageId: 'string',
      networkPackageStatus: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteVpcType: 'string',
      payType: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'number',
      reservationInternetChargeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipAddresses)) {
      $dara.Model.validateArray(this.eipAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

