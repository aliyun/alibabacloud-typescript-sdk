// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tags. The tag key cannot be an empty string.
   * 
   * It must be 1 to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tags. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * ValueTest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version of the NLB instance. Valid values:
   * 
   * *   **ipv4**: IPv4
   * *   **DualStack**: dual-stack
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of IPv4 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. The NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. The NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The domain name of the NLB instance.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The type of IPv6 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. The NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. The NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The business status of the NLB instance. Valid values:
   * 
   * *   **Abnormal**: The NLB instance is not working as expected.
   * *   **Normal**: The NLB instance is working as expected.
   * 
   * @example
   * Normal
   */
  loadBalancerBusinessStatus?: string;
  /**
   * @remarks
   * The NLB instance IDs. You can specify up to 20 IDs in each call.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The names of the NLB instances. You can specify up to 20 names in each call.
   */
  loadBalancerNames?: string[];
  /**
   * @remarks
   * The status of the NLB instance. Valid values:
   * 
   * *   **Inactive**: The NLB instance is disabled. Listeners of an NLB instance in the Inactive state do not forward traffic.
   * *   **Active**: The NLB instance is running.
   * *   **Provisioning**: The NLB instance is being created.
   * *   **Configuring**: The NLB instance is being modified.
   * *   **Deleting**: The NLB instance is being deleted.
   * *   **Deleted**: The NLB instance is deleted.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instances. Set the value to **network**, which specifies NLB.
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The number of entries to return in each call. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to specify a particular page of results. Valid values:
   * 
   * *   Leave this parameter empty for the first query or the only query.
   * *   Set this parameter to the value of NextToken obtained from the previous query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the NLB instance.
   */
  tag?: ListLoadBalancersRequestTag[];
  /**
   * @remarks
   * The IDs of the virtual private clouds (VPCs) where the NLB instances are deployed. You can specify up to 10 VPC IDs in each call.
   */
  vpcIds?: string[];
  /**
   * @remarks
   * The ID of the zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      DNSName: 'DNSName',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcIds: 'VpcIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      DNSName: 'string',
      ipv6AddressType: 'string',
      loadBalancerBusinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListLoadBalancersRequestTag },
      vpcIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerIds)) {
      $dara.Model.validateArray(this.loadBalancerIds);
    }
    if(Array.isArray(this.loadBalancerNames)) {
      $dara.Model.validateArray(this.loadBalancerNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vpcIds)) {
      $dara.Model.validateArray(this.vpcIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

