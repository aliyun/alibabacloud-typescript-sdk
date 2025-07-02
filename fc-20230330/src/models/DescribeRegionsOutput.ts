// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsOutputRegions } from "./DescribeRegionsOutputRegions";


export class DescribeRegionsOutput extends $dara.Model {
  regions?: DescribeRegionsOutputRegions;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsOutputRegions,
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

