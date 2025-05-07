// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProductInstancesResponseBodyProductInstances } from "./DescribeProductInstancesResponseBodyProductInstances";


export class DescribeProductInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  productInstances?: DescribeProductInstancesResponseBodyProductInstances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FDCBAE1E-2B3F-5C13-AD20-844B9473****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      productInstances: 'ProductInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInstances: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productInstances)) {
      $dara.Model.validateArray(this.productInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

