// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBodyRegionModels } from "./DescribeRegionsResponseBodyRegionModels";


export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Available regions.
   */
  regionModels?: DescribeRegionsResponseBodyRegionModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A87B3769-0D05-5383-B236-5798B455****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModels: 'RegionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModels: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionModels)) {
      $dara.Model.validateArray(this.regionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

