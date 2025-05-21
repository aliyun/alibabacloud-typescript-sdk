// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInclinedNodesResponseBodyItems } from "./DescribeInclinedNodesResponseBodyItems";


export class DescribeInclinedNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried storage nodes.
   */
  items?: DescribeInclinedNodesResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C1A419E-5A79-51A9-B533-FCCB98AD8FD5
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
      items: { 'type': 'array', 'itemType': DescribeInclinedNodesResponseBodyItems },
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

