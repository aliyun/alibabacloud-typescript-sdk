// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackage } from "./DescribeBandwidthPackagesResponseBodyBandwidthPackagesBandwidthPackage";


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

