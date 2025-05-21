// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsMixedResponseBodyRegionsRegion } from "./DescribeRegionsMixedResponseBodyRegionsRegion";


export class DescribeRegionsMixedResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsMixedResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsMixedResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

