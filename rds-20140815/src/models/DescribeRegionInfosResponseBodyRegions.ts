// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionInfosResponseBodyRegionsRDSRegion } from "./DescribeRegionInfosResponseBodyRegionsRdsregion";


export class DescribeRegionInfosResponseBodyRegions extends $dara.Model {
  RDSRegion?: DescribeRegionInfosResponseBodyRegionsRDSRegion[];
  static names(): { [key: string]: string } {
    return {
      RDSRegion: 'RDSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDSRegion: { 'type': 'array', 'itemType': DescribeRegionInfosResponseBodyRegionsRDSRegion },
    };
  }

  validate() {
    if(Array.isArray(this.RDSRegion)) {
      $dara.Model.validateArray(this.RDSRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

