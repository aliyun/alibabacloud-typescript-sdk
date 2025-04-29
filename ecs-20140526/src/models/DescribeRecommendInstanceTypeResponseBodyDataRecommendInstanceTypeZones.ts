// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone } from "./DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone";


export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones extends $dara.Model {
  zone?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

