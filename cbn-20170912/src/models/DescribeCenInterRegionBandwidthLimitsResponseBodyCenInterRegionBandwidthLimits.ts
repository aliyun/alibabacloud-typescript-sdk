// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit } from "./DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit";


export class DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits extends $dara.Model {
  cenInterRegionBandwidthLimit?: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit[];
  static names(): { [key: string]: string } {
    return {
      cenInterRegionBandwidthLimit: 'CenInterRegionBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInterRegionBandwidthLimit: { 'type': 'array', 'itemType': DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit },
    };
  }

  validate() {
    if(Array.isArray(this.cenInterRegionBandwidthLimit)) {
      $dara.Model.validateArray(this.cenInterRegionBandwidthLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

