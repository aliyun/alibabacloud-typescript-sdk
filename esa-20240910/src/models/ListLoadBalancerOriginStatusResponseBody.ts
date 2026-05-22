// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerOriginStatusResponseBodyOriginStatus extends $dara.Model {
  loadBalancerId?: number;
  originId?: number;
  poolId?: number;
  poolType?: string;
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      originId: 'OriginId',
      poolId: 'PoolId',
      poolType: 'PoolType',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'number',
      originId: 'number',
      poolId: 'number',
      poolType: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancerOriginStatusResponseBody extends $dara.Model {
  originStatus?: ListLoadBalancerOriginStatusResponseBodyOriginStatus[];
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

