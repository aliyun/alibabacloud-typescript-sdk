// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChildInstanceRegionsResponseBodyRegionsRegion } from "./DescribeChildInstanceRegionsResponseBodyRegionsRegion";


export class DescribeChildInstanceRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeChildInstanceRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeChildInstanceRegionsResponseBodyRegionsRegion },
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

