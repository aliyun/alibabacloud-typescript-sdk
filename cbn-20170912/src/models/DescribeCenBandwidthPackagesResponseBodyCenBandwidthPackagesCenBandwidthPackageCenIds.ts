// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds extends $dara.Model {
  cenId?: string[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cenId)) {
      $dara.Model.validateArray(this.cenId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

