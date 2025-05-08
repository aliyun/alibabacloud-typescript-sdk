// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer } from "./DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer";


export class DescribeLoadBalancersResponseBodyLoadBalancers extends $dara.Model {
  loadBalancer?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer[];
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancer)) {
      $dara.Model.validateArray(this.loadBalancer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

