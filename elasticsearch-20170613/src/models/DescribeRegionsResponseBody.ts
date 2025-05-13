// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBodyResult } from "./DescribeRegionsResponseBodyResult";


export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available status of the region.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1ADFG
   */
  requestId?: string;
  /**
   * @remarks
   * The endpoint of the region.
   */
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

