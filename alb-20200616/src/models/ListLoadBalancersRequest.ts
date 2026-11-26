// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * alueTest
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
   * The IP version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **DualStack**: dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The address type of the instance. Valid values:
   * 
   * - **Internet**: The load balancing has a public IP address. The DNS domain name is parsed to the public IP address, so it can be accessed in the public network environment.
   * 
   * - **Intranet**: The load balancing has only a private IP address. The DNS domain name is parsed to the private IP address, so it can only be accessed in the internal network environment of the VPC where the load balancing resides.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The DNS domain name.
   * 
   * @example
   * alb-95qnr2itwu9orb****.cn-hangzhou.alb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The IPv6 address type of the application load balancing instance. Valid values:
   * 
   * - **Internet**: The load balancing has a public IP address. The DNS domain name is parsed to the public IP address, so it can be accessed in the public network environment.
   * 
   * - **Intranet**: The load balancing has only a private IP address. The DNS domain name is parsed to the private IP address, so it can only be accessed in the internal network environment of the VPC where the load balancing resides.
   * 
   * @example
   * Intranet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The business status of the application load balancing instance. Valid values:
   * 
   * - **Abnormal**: Abnormal.
   * 
   * - **Normal**: Normal.
   * 
   * @example
   * Normal
   */
  loadBalancerBussinessStatus?: string;
  /**
   * @remarks
   * The IDs of the instances. You can specify up to 20 application load balancing instance IDs.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The names of the instances. You can specify up to 10 instance names.
   */
  loadBalancerNames?: string[];
  /**
   * @remarks
   * The instance status of the application load balancing instance. Valid values:
   * 
   * - **Inactive**: The instance is stopped and listeners no longer forward traffic.
   * 
   * - **Active**: The instance is running.
   * 
   * - **Provisioning**: The instance is being created.
   * 
   * - **Configuring**: Upgrade/Downgrade in progress.
   * 
   * - **CreateFailed**: The instance failed to be created. In this case, no fees are generated and the instance can only be deleted. By default, the system cleans up instances that failed to be created within the last 24 hours.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Valid values:
   * - Leave this parameter empty for the first query or when no next query is required.
   * - If a next query is required, set the value to the **NextToken** value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * **PostPay** (default value): pay-as-you-go billing method.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance label.
   */
  tag?: ListLoadBalancersRequestTag[];
  /**
   * @remarks
   * The IDs of the VPCs to which the application load balancing instances belong. You can specify up to 10 VPC IDs.
   */
  vpcIds?: string[];
  /**
   * @remarks
   * The ID of the active zone where the application load balancing instance resides.
   * 
   * You can invoke the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query the active zone information corresponding to the active zone ID.
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
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      loadBalancerStatus: 'LoadBalancerStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      payType: 'PayType',
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
      loadBalancerBussinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      loadBalancerStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      payType: 'string',
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

