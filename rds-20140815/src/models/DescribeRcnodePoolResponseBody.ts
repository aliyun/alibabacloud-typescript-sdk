// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCNodePoolResponseBodyNodePoolList } from "./DescribeRcnodePoolResponseBodyNodePoolList";


export class DescribeRCNodePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node pool information.
   */
  nodePoolList?: DescribeRCNodePoolResponseBodyNodePoolList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C816A4BF-A6EC-4722-95F9-2055859CCFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodePoolList: 'NodePoolList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePoolList: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodePoolList)) {
      $dara.Model.validateArray(this.nodePoolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

