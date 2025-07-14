// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse extends $dara.Model {
  allocationId?: string;
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
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

export class DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddresses extends $dara.Model {
  publicIpAddresse?: DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddresse: 'PublicIpAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddresse: { 'type': 'array', 'itemType': DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse },
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

export class DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackage extends $dara.Model {
  bandwidth?: string;
  bandwidthPackageId?: string;
  businessStatus?: string;
  creationTime?: string;
  description?: string;
  ISP?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  ipCount?: string;
  name?: string;
  natGatewayId?: string;
  publicIpAddresses?: DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddresses;
  regionId?: string;
  status?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      ISP: 'ISP',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipCount: 'IpCount',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      publicIpAddresses: 'PublicIpAddresses',
      regionId: 'RegionId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      bandwidthPackageId: 'string',
      businessStatus: 'string',
      creationTime: 'string',
      description: 'string',
      ISP: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipCount: 'string',
      name: 'string',
      natGatewayId: 'string',
      publicIpAddresses: DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddresses,
      regionId: 'string',
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.publicIpAddresses && typeof (this.publicIpAddresses as any).validate === 'function') {
      (this.publicIpAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponseBodyBandwidthPackages extends $dara.Model {
  bandwidthPackage?: DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: { 'type': 'array', 'itemType': DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackage },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthPackage)) {
      $dara.Model.validateArray(this.bandwidthPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponseBody extends $dara.Model {
  bandwidthPackages?: DescribeBandwidthPackagesResponseBodyBandwidthPackages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackages: 'BandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackages: DescribeBandwidthPackagesResponseBodyBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bandwidthPackages && typeof (this.bandwidthPackages as any).validate === 'function') {
      (this.bandwidthPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

