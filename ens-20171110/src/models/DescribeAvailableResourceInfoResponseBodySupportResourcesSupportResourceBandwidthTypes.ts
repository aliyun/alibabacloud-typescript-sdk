// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes extends $dara.Model {
  bandwidthType?: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthType: 'BandwidthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthType)) {
      $dara.Model.validateArray(this.bandwidthType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

