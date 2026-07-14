// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPackagesResponseBodyNetworkPackagesTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBodyNetworkPackages extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the premium Internet bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-05-10T02:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The public egress IP address of the premium Internet bandwidth plan.
   */
  eipAddresses?: string[];
  /**
   * @remarks
   * The expiration time of the premium Internet bandwidth plan.
   * 
   * - If the plan uses the subscription billing method, the actual expiration time is returned.
   * - If the plan uses the pay-as-you-go billing method, `2099-12-31T15:59:59Z` is returned.
   * 
   * @example
   * 2099-12-31T15:59:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The billing method of the premium Internet bandwidth plan.
   * 
   * - If the parameter `PayType` is set to `PrePaid`, valid values:
   *     - PayByBandwidth: pay-by-bandwidth.
   * - If the parameter `PayType` is set to `PostPaid`, valid values:
   *     - PayByTraffic: pay-by-data-transfer.
   *     - PayByBandwidth: pay-by-bandwidth.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the premium Internet bandwidth plan.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The status of the premium Internet bandwidth plan.
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
   * default
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The office network type.
   * 
   * @example
   * basic
   */
  officeSiteVpcType?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The effective period of the reserved network bandwidth.
   * 
   * @example
   * 2021-07-10T00:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The peak reserved network bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 20
   */
  reservationBandwidth?: number;
  /**
   * @remarks
   * The billing method of the reserved network bandwidth.
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  tags?: DescribeNetworkPackagesResponseBodyNetworkPackagesTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': DescribeNetworkPackagesResponseBodyNetworkPackagesTags },
    };
  }

  validate() {
    if(Array.isArray(this.eipAddresses)) {
      $dara.Model.validateArray(this.eipAddresses);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of premium Internet bandwidth plans.
   */
  networkPackages?: DescribeNetworkPackagesResponseBodyNetworkPackages[];
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackages: 'NetworkPackages',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackages: { 'type': 'array', 'itemType': DescribeNetworkPackagesResponseBodyNetworkPackages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkPackages)) {
      $dara.Model.validateArray(this.networkPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

