// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes extends $dara.Model {
  networkType?: string[];
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkType)) {
      $dara.Model.validateArray(this.networkType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

