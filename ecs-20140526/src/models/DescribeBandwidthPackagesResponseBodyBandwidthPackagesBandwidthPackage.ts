// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddresses } from "./DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddresses";


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

