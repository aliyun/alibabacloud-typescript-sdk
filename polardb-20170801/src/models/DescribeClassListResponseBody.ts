// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClassListResponseBodyItems } from "./DescribeClassListResponseBodyItems";


export class DescribeClassListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster specifications.
   */
  items?: DescribeClassListResponseBodyItems[];
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69A85BAF-1089-4CDF-A82F-0A140F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeClassListResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

