// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLoadBalancerAttributeResponseBodyAccessLogConfig } from "./GetLoadBalancerAttributeResponseBodyAccessLogConfig";
import { GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig } from "./GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig";
import { GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig } from "./GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig";
import { GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks } from "./GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks";
import { GetLoadBalancerAttributeResponseBodyModificationProtectionConfig } from "./GetLoadBalancerAttributeResponseBodyModificationProtectionConfig";
import { GetLoadBalancerAttributeResponseBodyTags } from "./GetLoadBalancerAttributeResponseBodyTags";
import { GetLoadBalancerAttributeResponseBodyZoneMappings } from "./GetLoadBalancerAttributeResponseBodyZoneMappings";


export class GetLoadBalancerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the access log feature.
   */
  accessLogConfig?: GetLoadBalancerAttributeResponseBodyAccessLogConfig;
  /**
   * @remarks
   * The mode in which IP addresses are allocated. Valid values:
   * 
   * *   **Fixed**: allocates a static IP address to the ALB instance.
   * *   **Dynamic**: dynamically allocates an IP address to each zone of the ALB instance.
   * 
   * @example
   * Dynamic
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
   * The network type of the ALB instance. Valid values:
   * 
   * *   **Internet**: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
   * *   **Intranet**: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. In this case, the ALB instance can be accessed over the virtual private cloud (VPC) where the ALB instance is deployed.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the elastic IP address (EIP) bandwidth plan that is associated with the Internet-facing ALB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name of the ALB instance.
   * 
   * @example
   * alb-95qnr2itwu9orb****.cn-hangzhou.alb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The configuration of deletion protection.
   */
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
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
   * The billing method of the ALB instance.
   */
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
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
   * The edition of the ALB instance. The features and billing rules vary based on the edition of the ALB instance. Valid values:
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
   * The ALB instance ID.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ALB instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * alb1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The type of the lock. Valid values:
   * 
   * *   **SecurityLocked**: The ALB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The ALB instance is locked due to association issues.
   * *   **FinancialLocked**: The ALB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The ALB instance is locked because the associated resources have overdue payments and the resources are released.
   */
  loadBalancerOperationLocks?: GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks[];
  /**
   * @remarks
   * The status of the ALB instance. Valid values:
   * 
   * *   **Inactive**: The ALB instance is disabled. ALB instances in the Inactive state do not forward traffic.
   * *   **Active**: The ALB instance is running.
   * *   **Provisioning**: The ALB instance is being created.
   * *   **Configuring**: The ALB instance is being modified.
   * *   **CreateFailed**: The system failed to create the ALB instance. In this case, you are not charged for the ALB instance. You can only delete the ALB instance.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The configuration read-only mode settings.
   */
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  /**
   * @remarks
   * The region ID of the ALB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the ALB instance is added.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   */
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  /**
   * @remarks
   * The ID of the VPC in which the ALB instance is deployed.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches. At most 10 zones are returned. If the current region supports two or more zones, at least two zones are returned.
   */
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
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
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogConfig: GetLoadBalancerAttributeResponseBodyAccessLogConfig,
      addressAllocatedMode: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      DNSName: 'string',
      deletionProtectionConfig: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig,
      loadBalancerBussinessStatus: 'string',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerOperationLocks: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks },
      loadBalancerStatus: 'string',
      modificationProtectionConfig: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig,
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappings },
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
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

