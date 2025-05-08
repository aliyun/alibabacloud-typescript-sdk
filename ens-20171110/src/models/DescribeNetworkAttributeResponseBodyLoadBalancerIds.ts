// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAttributeResponseBodyLoadBalancerIds extends $dara.Model {
  loadBalancerId?: string[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerId)) {
      $dara.Model.validateArray(this.loadBalancerId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

