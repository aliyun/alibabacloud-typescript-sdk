// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse } from "./DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse";


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

