// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags extends $dara.Model {
  tag?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $dara.Model {
  address?: string;
  addressIPVersion?: string;
  addressType?: string;
  bandwidth?: number;
  createTime?: string;
  createTimeStamp?: number;
  deleteProtection?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  internetChargeTypeAlias?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  loadBalancerStatus?: string;
  masterZoneId?: string;
  modificationProtectionReason?: string;
  modificationProtectionStatus?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  regionIdAlias?: string;
  resourceGroupId?: string;
  slaveZoneId?: string;
  tags?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      deleteProtection: 'DeleteProtection',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetChargeTypeAlias: 'InternetChargeTypeAlias',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      resourceGroupId: 'ResourceGroupId',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      deleteProtection: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetChargeTypeAlias: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      resourceGroupId: 'string',
      slaveZoneId: 'string',
      tags: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances returned.
   * 
   * @example
   * 1
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

