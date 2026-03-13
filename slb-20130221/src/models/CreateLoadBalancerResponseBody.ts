// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerResponseBody extends $dara.Model {
  address?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

