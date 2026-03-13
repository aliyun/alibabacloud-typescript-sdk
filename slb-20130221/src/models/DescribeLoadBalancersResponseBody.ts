// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $dara.Model {
  address?: string;
  addressType?: string;
  createTime?: string;
  createTimeStamp?: number;
  internetChargeType?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  masterZoneId?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  regionIdAlias?: string;
  resourceGroupId?: string;
  slaveZoneId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

