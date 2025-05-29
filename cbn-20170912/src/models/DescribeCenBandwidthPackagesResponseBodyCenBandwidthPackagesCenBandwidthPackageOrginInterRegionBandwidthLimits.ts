// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit } from "./DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit";


export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits extends $dara.Model {
  orginInterRegionBandwidthLimit?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit[];
  static names(): { [key: string]: string } {
    return {
      orginInterRegionBandwidthLimit: 'OrginInterRegionBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orginInterRegionBandwidthLimit: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit },
    };
  }

  validate() {
    if(Array.isArray(this.orginInterRegionBandwidthLimit)) {
      $dara.Model.validateArray(this.orginInterRegionBandwidthLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

