// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoadBalancerListenersResponseBodyListenersListener } from "./DescribeLoadBalancerListenersResponseBodyListenersListener";


export class DescribeLoadBalancerListenersResponseBodyListeners extends $dara.Model {
  listener?: DescribeLoadBalancerListenersResponseBodyListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeLoadBalancerListenersResponseBodyListenersListener },
    };
  }

  validate() {
    if(Array.isArray(this.listener)) {
      $dara.Model.validateArray(this.listener);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

