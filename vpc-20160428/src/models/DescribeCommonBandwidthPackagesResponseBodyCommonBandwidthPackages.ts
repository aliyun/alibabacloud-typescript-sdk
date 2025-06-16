// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage } from "./DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage";


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

