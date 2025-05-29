// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensResponseBodyCensCenCenBandwidthPackageIds extends $dara.Model {
  cenBandwidthPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cenBandwidthPackageId)) {
      $dara.Model.validateArray(this.cenBandwidthPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

