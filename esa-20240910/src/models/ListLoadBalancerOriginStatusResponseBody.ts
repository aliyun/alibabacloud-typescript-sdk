// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancerOriginStatusResponseBodyOriginStatus } from "./ListLoadBalancerOriginStatusResponseBodyOriginStatus";


export class ListLoadBalancerOriginStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of origin statuses under the load balancer.
   */
  originStatus?: ListLoadBalancerOriginStatusResponseBodyOriginStatus[];
  /**
   * @remarks
   * Request ID, used for tracking the request.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      originStatus: 'OriginStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originStatus: { 'type': 'array', 'itemType': ListLoadBalancerOriginStatusResponseBodyOriginStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.originStatus)) {
      $dara.Model.validateArray(this.originStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

