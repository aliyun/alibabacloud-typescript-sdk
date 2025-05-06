// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterEndpointsResponseBodyItems } from "./DescribeDbclusterEndpointsResponseBodyItems";


export class DescribeDBClusterEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoints.
   */
  items?: DescribeDBClusterEndpointsResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2DC120BF-6EBA-4C63-BE99-B09F9E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItems },
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

