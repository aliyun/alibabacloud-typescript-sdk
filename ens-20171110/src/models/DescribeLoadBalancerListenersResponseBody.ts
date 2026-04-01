// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenersResponseBodyListenersListener extends $dara.Model {
  backendServerPort?: number;
  createTime?: string;
  description?: string;
  forwardPort?: string;
  listenerForward?: string;
  listenerPort?: string;
  loadBalancerId?: string;
  protocol?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      createTime: 'CreateTime',
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      createTime: 'string',
      description: 'string',
      forwardPort: 'string',
      listenerForward: 'string',
      listenerPort: 'string',
      loadBalancerId: 'string',
      protocol: 'string',
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

export class DescribeLoadBalancerListenersResponseBody extends $dara.Model {
  listeners?: DescribeLoadBalancerListenersResponseBodyListeners;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeLoadBalancerListenersResponseBodyListeners,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.listeners && typeof (this.listeners as any).validate === 'function') {
      (this.listeners as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

