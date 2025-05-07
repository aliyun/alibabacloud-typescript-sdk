// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionsRegionRecommendZones extends $dara.Model {
  recommendZone?: string[];
  static names(): { [key: string]: string } {
    return {
      recommendZone: 'RecommendZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendZone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.recommendZone)) {
      $dara.Model.validateArray(this.recommendZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

