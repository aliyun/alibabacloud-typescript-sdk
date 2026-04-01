// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $dara.Model {
  address?: string;
  addressIPVersion?: string;
  addressType?: string;
  createTime?: string;
  ensRegionId?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  networkId?: string;
  payType?: string;
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

