// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse } from "./DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse";


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

