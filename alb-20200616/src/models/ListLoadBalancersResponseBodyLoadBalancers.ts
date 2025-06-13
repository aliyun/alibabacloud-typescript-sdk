// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig } from "./ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig";
import { ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig } from "./ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig";
import { ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig } from "./ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig";
import { ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks } from "./ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks";
import { ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig } from "./ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig";
import { ListLoadBalancersResponseBodyLoadBalancersTags } from "./ListLoadBalancersResponseBodyLoadBalancersTags";


export class ListLoadBalancersResponseBodyLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The configurations of access logs.
   */
  accessLogConfig?: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig;
  /**
   * @remarks
   * The mode in which IP addresses are allocated. Valid values:
   * 
   * *   **Fixed**: The ALB instance uses a static IP address.
   * *   **Dynamic**: dynamically allocates an IP address to each zone of the ALB instance.
   * 
   * @example
   * Fixed
   */
  addressAllocatedMode?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4**
   * *   **DualStack**
   * 
   * @example
   * DualStack
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of IP address that the ALB instance uses to provide services. Valid values:
   * 
   * *   **Internet**: The ALB instance is assigned a public IP address. The domain name is resolved to the public IP address. The ALB instance is accessible over the Internet.
   * *   **Intranet**: The ALB instance is assigned only a private IP address. The domain name is resolved to the private IP address. The ALB instance is accessible only within the VPC of the ALB instance.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing ALB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
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
   * The configuration of the deletion protection feature.
   */
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  /**
   * @remarks
   * The type of IPv6 address used by the ALB instance. Valid values:
   * 
   * *   **Internet** The ALB instance is assigned a public IP address. The domain name is resolved to the public IP address. The ALB instance is accessible over the Internet.
   * *   **Intranet** The ALB instance is assigned only a private IP address. The domain name is resolved to the private IP address. The ALB instance is accessible only within the VPC of the ALB instance.
   * 
   * @example
   * Intranet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing information about the ALB instance.
   */
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  /**
   * @remarks
   * The status of the ALB instance. Valid values:
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
   * The edition of the ALB instance. The features and billing rules vary based on the edition. Valid values:
   * 
   * *   **Basic**
   * *   **Standard**
   * *   **StandardWithWaf**
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The ID of the ALB instance.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ALB instance.
   * 
   * @example
   * alb-instance-test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The configuration of the operation lock.
   */
  loadBalancerOperationLocks?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks[];
  /**
   * @remarks
   * The status of the ALB instance. Valid values:
   * 
   * *   **Inactive**: The ALB instance is disabled. ALB instances in the Inactive state do not forward traffic.
   * *   **Active**: The ALB instance is running.
   * *   **Provisioning**: The ALB instance is being created.
   * *   **Configuring**: The ALB instance is being modified.
   * *   **CreateFailed**: The system failed to create the ALB instance.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The configuration read-only mode settings.
   */
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  securityGroupIds?: string[];
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  /**
   * @remarks
   * The ID of the VPC in which the ALB instance is deployed.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogConfig: 'AccessLogConfig',
      addressAllocatedMode: 'AddressAllocatedMode',
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBussinessStatus: 'LoadBalancerBussinessStatus',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerOperationLocks: 'LoadBalancerOperationLocks',
      loadBalancerStatus: 'LoadBalancerStatus',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogConfig: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig,
      addressAllocatedMode: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      DNSName: 'string',
      deletionProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig,
      loadBalancerBussinessStatus: 'string',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerOperationLocks: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks },
      loadBalancerStatus: 'string',
      modificationProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig,
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.accessLogConfig && typeof (this.accessLogConfig as any).validate === 'function') {
      (this.accessLogConfig as any).validate();
    }
    if(this.deletionProtectionConfig && typeof (this.deletionProtectionConfig as any).validate === 'function') {
      (this.deletionProtectionConfig as any).validate();
    }
    if(this.loadBalancerBillingConfig && typeof (this.loadBalancerBillingConfig as any).validate === 'function') {
      (this.loadBalancerBillingConfig as any).validate();
    }
    if(Array.isArray(this.loadBalancerOperationLocks)) {
      $dara.Model.validateArray(this.loadBalancerOperationLocks);
    }
    if(this.modificationProtectionConfig && typeof (this.modificationProtectionConfig as any).validate === 'function') {
      (this.modificationProtectionConfig as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

