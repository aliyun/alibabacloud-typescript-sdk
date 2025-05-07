// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionInfosResponseBodyRegions } from "./DescribeRegionInfosResponseBodyRegions";


export class DescribeRegionInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of regions.
   */
  regions?: DescribeRegionInfosResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5414A4E5-4C36-4461-95FC-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionInfosResponseBodyRegions,
      requestId: 'string',
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

