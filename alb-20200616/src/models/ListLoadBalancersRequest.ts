// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersRequestTag } from "./ListLoadBalancersRequestTag";


export class ListLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4**
   * *   **DualStack**
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Internet**: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
   * *   **Intranet**: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. In this case, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * alb-95qnr2itwu9orb****.cn-hangzhou.alb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The type of IPv6 address that is used by the ALB instance. Valid values:
   * 
   * *   **Internet**: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
   * *   **Intranet**: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC in which the ALB instance is deployed.
   * 
   * @example
   * Intranet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The service status of the ALB instance. Valid values:
   * 
   * *   **Abnormal**
   * *   **Normal**
   * 
   * @example
   * Normal
   */
  loadBalancerBussinessStatus?: string;
  /**
   * @remarks
   * The instance IDs. You can specify at most 20 ALB instance IDs.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The instance names. You can specify at most 10 instance names.
   */
  loadBalancerNames?: string[];
  /**
   * @remarks
   * The status of the ALB instance. Valid values:
   * 
   * *   **Inactive**: The ALB instance is disabled. The listeners do not forward traffic.
   * *   **Active**: The ALB instance is running.
   * *   **Provisioning**: The ALB instance is being created.
   * *   **Configuring**: The ALB instance is being modified.
   * *   **CreateFailed**: The system failed to create the ALB instance. In this case, you are not charged for the ALB instance. You can only delete the ALB instance. By default, the system deletes the ALB instances that are in the CreateFailed state within the last day.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The billing method of the ALB instance. Set the value to
   * 
   * **PostPay**, which specifies the pay-as-you-go billing method. This is the default value.
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
   * The tags added to the ALB instance.
   */
  tag?: ListLoadBalancersRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the ALB instance belongs. You can specify at most 10 VPC IDs.
   */
  vpcIds?: string[];
  /**
   * @remarks
   * The ID of the zone where the ALB instance is deployed.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query zones.
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

