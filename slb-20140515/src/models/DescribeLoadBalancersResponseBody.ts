// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * FinanceJoshua
   */
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
  /**
   * @remarks
   * The endpoint of the CLB instance.
   * 
   * @example
   * 100.XX.XX.28
   */
  address?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **internet:** After an Internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
   * *   **intranet:** After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over internal networks.
   * 
   * @example
   * intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-12-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the instance was created.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the CLB instance. Valid values:
   * 
   * *   **on:** Deletion protection is enabled.
   * *   **off:** Deletion protection is disabled.
   * 
   * @example
   * off
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The metering method of the CLB instance. Valid values:
   * 
   * *   **PayBySpec:** pay-by-specification.
   * *   **PayByCLCU:** pay-by-LCU.
   * 
   * >  This parameter takes effect only for accounts registered on the China site (aliyun.com) and when the **PayType** parameter is set to **PayOnDemand**.
   * 
   * @example
   * PayBySpec
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **3:** pay-by-bandwidth (**paybybandwidth**).
   * *   **4:** pay-by-data-transfer (**paybytraffic**).
   * 
   * @example
   * 3
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The metering method of Internet data transfer. Valid values:
   * 
   * *   **paybybandwidth:** pay-by-bandwidth.
   * *   **paybytraffic:** pay-by-data-transfer.
   * 
   * @example
   * paybybandwidth
   */
  internetChargeTypeAlias?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the CLB instance.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the CLB instance.
   * 
   * >  Pay-as-you-go CLB instances are not subject to specifications. **slb.lcu.elastic** is returned by default.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **inactive:** The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
   * *   **active:** The CLB instance runs as expected. By default, newly created CLB instances are in the **active** state.
   * *   **locked:** The CLB instance is locked.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode was enabled. The reason must be 1 to 80 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * > This parameter takes effect only when you set the `ModificationProtectionStatus` parameter to **ConsoleProtection**.
   * 
   * @example
   * ManagedInstance
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Indicates whether the configuration read-only mode is enabled for the CLB instance. Valid values:
   * 
   * *   **NonProtection:** The configuration read-only mode is disabled. In this case, you cannot specify the ModificationProtectionReason parameter. If you specify the `ModificationProtectionReason` parameter, the value is cleared.
   * *   **ConsoleProtection:** The configuration read-only mode is enabled.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot modify the configurations of the CLB instance in the CLB console. However, you can call API operations to modify the configurations of the CLB instance.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  /**
   * @remarks
   * The network type of the internal-facing CLB instance. Valid values:
   * 
   * *   **vpc**: VPC
   * *   **Classic**: classic network
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the CLB instance.
   * 
   * *   **PayOnDemand** is returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region where the CLB instance was deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region where the CLB instance was deployed.
   * 
   * @example
   * hangzhou
   */
  regionIdAlias?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3r****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancerTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the internal-facing CLB instance belongs.
   * 
   * @example
   * vsw-255ecr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the internal-facing CLB instance was deployed.
   * 
   * @example
   * vpc-25dvzy9f8****
   */
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
  /**
   * @remarks
   * An array of CLB instances.
   */
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

