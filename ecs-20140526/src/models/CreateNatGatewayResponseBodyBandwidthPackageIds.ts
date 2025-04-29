// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayResponseBodyBandwidthPackageIds extends $dara.Model {
  bandwidthPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthPackageId)) {
      $dara.Model.validateArray(this.bandwidthPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

