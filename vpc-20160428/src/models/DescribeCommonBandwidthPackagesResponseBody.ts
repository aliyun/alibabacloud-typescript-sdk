// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse extends $dara.Model {
  allocationId?: string;
  bandwidthPackageIpRelationStatus?: string;
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
  bandwidth?: string;
  bandwidthPackageId?: string;
  bizType?: string;
  businessStatus?: string;
  creationTime?: string;
  deletionProtection?: boolean;
  description?: string;
  expiredTime?: string;
  hasReservationData?: string;
  ISP?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  name?: string;
  publicIpAddresses?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses;
  ratio?: number;
  regionId?: string;
  reservationActiveTime?: string;
  reservationBandwidth?: string;
  reservationInternetChargeType?: string;
  reservationOrderType?: string;
  resourceGroupId?: string;
  securityProtectionTypes?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageSecurityProtectionTypes;
  serviceManaged?: number;
  status?: string;
  tags?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageTags;
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

