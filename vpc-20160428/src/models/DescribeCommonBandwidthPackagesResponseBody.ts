// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-bp13e9i2qst4g6jzi****
   */
  allocationId?: string;
  /**
   * @remarks
   * Indicates whether the EIP is associated with the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   **BINDED**
   * *   **BINDING**
   * 
   * @example
   * BINDED
   */
  bandwidthPackageIpRelationStatus?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.95.XX.XX
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidthPackageIpRelationStatus: 'BandwidthPackageIpRelationStatus',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidthPackageIpRelationStatus: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses extends $dara.Model {
  publicIpAddresse?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddresse: 'PublicIpAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddresse: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse },
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddresse)) {
      $dara.Model.validateArray(this.publicIpAddresse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageSecurityProtectionTypes extends $dara.Model {
  securityProtectionType?: string[];
  static names(): { [key: string]: string } {
    return {
      securityProtectionType: 'SecurityProtectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityProtectionType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionType)) {
      $dara.Model.validateArray(this.securityProtectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key that is added to the Internet Shared Bandwidth instance.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value that is added to the Internet Shared Bandwidth instance.
   * 
   * @example
   * ValueTest
   */
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

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTags extends $dara.Model {
  tag?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
   * 
   * @example
   * 20
   */
  bandwidth?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * @example
   * cbwp-bp1t3sm1ffzmshdki****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The service type of the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   **CloudBox** The cloud box. Only cloud box users can select this type.
   * *   **Default** (default): The general service type.
   * 
   * @example
   * CloudBox
   */
  bizType?: string;
  /**
   * @remarks
   * The service status of the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   **Normal**: The Internet Shared Bandwidth instance runs as expected.
   * *   **FinancialLocked**: An overdue payment occurs in the Internet Shared Bandwidth instance
   * *   **Unactivated**: The Internet Shared Bandwidth instance is not activated.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the Internet Shared Bandwidth instance was created. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2017-06-28T06:39:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the Internet Shared Bandwidth instance.
   * 
   * @example
   * none
   */
  description?: string;
  /**
   * @remarks
   * The time when the Internet Shared Bandwidth instance expired. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2019-01-15T03:08:37Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether the information about pending orders is returned. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP**: BGP (Multi-ISP) line The BGP (Multi-ISP) line is supported in all regions.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro line The BGP (Multi-ISP) Pro line is supported in the China (Hong Kong), Singapore (Singapore), Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * If you are allowed to use single-ISP bandwidth, one of the following values is returned:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, **BGP_FinanceCloud** is returned.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billing method of the Internet Shared Bandwidth instance. Valid value:
   * 
   * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet Shared Bandwidth instance. Valid value:
   * 
   * **PayByTraffic**
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The name of the Internet Shared Bandwidth instance.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
   */
  publicIpAddresses?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses;
  /**
   * @remarks
   * The percentage of the minimum bandwidth commitment. Only **20** is returned.
   * 
   * >  This parameter is supported only on the Alibaba Cloud China site.
   * 
   * @example
   * 20
   */
  ratio?: number;
  /**
   * @remarks
   * The ID of the region where the Internet Shared Bandwidth instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the renewal took effect. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2018-08-30T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The new maximum bandwidth after the configurations are changed. Unit: Mbit/s.
   * 
   * @example
   * 1000
   */
  reservationBandwidth?: string;
  /**
   * @remarks
   * The metering method after the configurations are changed. Valid value:
   * 
   * **PayByTraffic**
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The renewal method. Valid values:
   * 
   * *   **RENEWCHANGE**: renewal with a specification change
   * *   **TEMP_UPGRADE**: renewal with a temporary upgrade
   * *   **UPGRADE**: renewal with an upgrade
   * 
   * @example
   * RENEWCHANGE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The editions of Anti-DDoS.
   * 
   * *   If this parameter is empty, Anti-DDoS Origin Basic is enabled.
   * *   If **AntiDDoS_Enhanced** is returned, Anti-DDoS Pro/Premium is enabled.
   */
  securityProtectionTypes?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageSecurityProtectionTypes;
  /**
   * @remarks
   * Indicates whether the resource is created by the service account. Valid values:
   * 
   * *   **0**: The resource is not created by the service account.
   * *   **1**: The resource is created by the service account.
   * 
   * @example
   * 1
   */
  serviceManaged?: number;
  /**
   * @remarks
   * The status of the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   **Available**: The Internet Shared Bandwidth instance is available.
   * *   **Modifying**: The Internet Shared Bandwidth instance is being modified.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag that is added to the Internet Shared Bandwidth instance.
   */
  tags?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTags;
  /**
   * @remarks
   * The zone of the Internet Shared Bandwidth instance. This parameter is returned only when BizType is set to CloudBox. If BizType is set to Default, an empty value is returned.
   * 
   * @example
   * ap-southeast-1-lzdvn-cb
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bizType: 'BizType',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      hasReservationData: 'HasReservationData',
      ISP: 'ISP',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      publicIpAddresses: 'PublicIpAddresses',
      ratio: 'Ratio',
      regionId: 'RegionId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      securityProtectionTypes: 'SecurityProtectionTypes',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      bandwidthPackageId: 'string',
      bizType: 'string',
      businessStatus: 'string',
      creationTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      expiredTime: 'string',
      hasReservationData: 'string',
      ISP: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      name: 'string',
      publicIpAddresses: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses,
      ratio: 'number',
      regionId: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      securityProtectionTypes: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageSecurityProtectionTypes,
      serviceManaged: 'number',
      status: 'string',
      tags: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTags,
      zone: 'string',
    };
  }

  validate() {
    if(this.publicIpAddresses && typeof (this.publicIpAddresses as any).validate === 'function') {
      (this.publicIpAddresses as any).validate();
    }
    if(this.securityProtectionTypes && typeof (this.securityProtectionTypes as any).validate === 'function') {
      (this.securityProtectionTypes as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages extends $dara.Model {
  commonBandwidthPackage?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      commonBandwidthPackage: 'CommonBandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonBandwidthPackage: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage },
    };
  }

  validate() {
    if(Array.isArray(this.commonBandwidthPackage)) {
      $dara.Model.validateArray(this.commonBandwidthPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the Internet Shared Bandwidth instance.
   */
  commonBandwidthPackages?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20E6FD1C-7321-4DAD-BDFD-EC8769E4AA33
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commonBandwidthPackages: 'CommonBandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonBandwidthPackages: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.commonBandwidthPackages && typeof (this.commonBandwidthPackages as any).validate === 'function') {
      (this.commonBandwidthPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

