// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $dara.Model {
  /**
   * @remarks
   * The IP address that the ELB instance uses to provide services.
   * 
   * @example
   * 10.10.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version. Valid values: ipv4 and ipv6.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  addressType?: string;
  /**
   * @remarks
   * The time when the ELB instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-06T11:13:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-wuhan-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5snthcyu1x10g7tywj7iu****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ELB instance.
   * 
   * @example
   * example
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The status of the listener for the ELB instance. Valid values:
   * 
   * *   **Active**: The listener for the instance can forward the received traffic based on forwarding rules.
   * *   **InActive**: The listener for the instance does not forward the received traffic.
   * 
   * @example
   * InActive
   */
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5rz0rj1caexauilpsjx0w****
   */
  networkId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go. Only this billing method is supported.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5rllcjb3ol6duzjdnbm1om****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      createTime: 'CreateTime',
      ensRegionId: 'EnsRegionId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      networkId: 'NetworkId',
      payType: 'PayType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      createTime: 'string',
      ensRegionId: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      networkId: 'string',
      payType: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeLoadBalancersResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of ELB instances.
   */
  loadBalancers?: DescribeLoadBalancersResponseBodyLoadBalancers;
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
   * The number of entries per page. Default value: 10. Valid values: **10** to **100**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: DescribeLoadBalancersResponseBodyLoadBalancers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.loadBalancers && typeof (this.loadBalancers as any).validate === 'function') {
      (this.loadBalancers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

