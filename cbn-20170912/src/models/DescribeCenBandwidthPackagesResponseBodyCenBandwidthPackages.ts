// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage } from "./DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage";


export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages extends $dara.Model {
  cenBandwidthPackage?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackage: 'CenBandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackage: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage },
    };
  }

  validate() {
    if(Array.isArray(this.cenBandwidthPackage)) {
      $dara.Model.validateArray(this.cenBandwidthPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

