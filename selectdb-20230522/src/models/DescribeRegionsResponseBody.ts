// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBodyRegionModelList } from "./DescribeRegionsResponseBodyRegionModelList";


export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of regions.
   */
  regionModelList?: DescribeRegionsResponseBodyRegionModelList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModelList: 'RegionModelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModelList: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionModelList)) {
      $dara.Model.validateArray(this.regionModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

