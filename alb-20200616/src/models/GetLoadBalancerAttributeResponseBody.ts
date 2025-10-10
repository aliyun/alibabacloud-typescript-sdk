// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyAccessLogConfig extends $dara.Model {
  /**
   * @remarks
   * The Log Service project.
   * 
   * @example
   * sls-setter
   */
  logProject?: string;
  /**
   * @remarks
   * The Logstore.
   * 
   * @example
   * test
   */
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the deletion protection feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when the deletion protection feature was enabled. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-02T02:49:05Z
   */
  enabledTime?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * Only **PostPay** is returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyLoadBalancerOperationLocks extends $dara.Model {
  /**
   * @remarks
   * The reason why the ALB instance is locked. This parameter is valid only if **LoadBalancerBussinessStatus** is set to **Abnormal**.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @remarks
   * The lock type. Valid values:
   * 
   * *   **SecurityLocked**: The ALB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The ALB instance is locked due to other resources that are associated with the ALB instance.
   * *   **FinancialLocked**: The ALB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The ALB instance is locked because the associated resources have overdue payments and the resources are released.
   * 
   * @example
   * FinancialLocked
   */
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled.
   * 
   * The name must be 2 to 128 character characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter takes effect only if **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether the configuration read-only mode is enabled. Valid values:
   * 
   * *   **NonProtection**: The configuration read-only mode is disabled. In this case, the value of the **Reason** parameter that you specify does not take effect. If you set **Reason**, the value is cleared.
   * *   **ConsoleProtection**: The configuration read-only mode is enabled. In this case, the value of the **Reason** parameter takes effect.****
   * 
   * >  If the parameter is set to **ConsoleProtection**, the configuration read-only mode is enabled. You cannot modify the configurations of the ALB instance in the ALB console. However, you can call API operations to modify the configurations of the ALB instance.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * FinanceJoshua
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

export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @remarks
   * An IPv4 address.
   * 
   * This parameter takes effect when **AddressIPVersion** is set to **IPv4** or **DualStack**. The network type is determined by the value of **AddressType**.
   * 
   * @example
   * 192.168.10.1
   */
  address?: string;
  /**
   * @remarks
   * The elastic IP address (EIP).
   * 
   * @example
   * eip-uf6wm****1zj9
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of EIP. Valid values:
   * 
   * *   **Common**: an EIP.
   * *   **Anycast**: an Anycast EIP.
   * 
   * >  For more information about the regions in which ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The private IPv4 address.
   * 
   * @example
   * 10.0.1.181
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The health status of the private IPv4 address of the ALB instance. 
   * This parameter is returned only when the Status of the zone is Active.Valid values:
   * 
   * - **Healthy**
   * 
   * - **Unhealthy**
   * 
   * @example
   * Healthy
   */
  intranetAddressHcStatus?: string;
  /**
   * @remarks
   * The IPv4 link-local addresses. The IP addresses that the ALB instance uses to communicate with the backend servers.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * An IPv6 address.
   * 
   * This parameter takes effect only when **AddressIPVersion** is set to **DualStack**. The network type is determined by the value of **Ipv6AddressType**.
   * 
   * @example
   * 2408:XXXX:39d:eb00::/56
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The health status of the private IPv6 address of the ALB instance. 
   * This parameter is returned only when the Status of the zone is Active.Valid values:
   * 
   * - **Healthy**
   * 
   * - **Unhealthy**
   * 
   * @example
   * Healthy
   */
  ipv6AddressHcStatus?: string;
  /**
   * @remarks
   * The IPv6 link-local addresses. The IP addresses that the ALB instance uses to communicate with the backend servers.
   */
  ipv6LocalAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      allocationId: 'AllocationId',
      eipType: 'EipType',
      intranetAddress: 'IntranetAddress',
      intranetAddressHcStatus: 'IntranetAddressHcStatus',
      ipv4LocalAddresses: 'Ipv4LocalAddresses',
      ipv6Address: 'Ipv6Address',
      ipv6AddressHcStatus: 'Ipv6AddressHcStatus',
      ipv6LocalAddresses: 'Ipv6LocalAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allocationId: 'string',
      eipType: 'string',
      intranetAddress: 'string',
      intranetAddressHcStatus: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6AddressHcStatus: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4LocalAddresses)) {
      $dara.Model.validateArray(this.ipv4LocalAddresses);
    }
    if(Array.isArray(this.ipv6LocalAddresses)) {
      $dara.Model.validateArray(this.ipv6LocalAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The address of the ALB instance.
   */
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - **Active**: The ALB instance is running.
   * 
   * - **Stopped**: The ALB instance is disabled. 
   * 
   * - **Shifted**: The ALB instance is removed.
   * 
   * - **Starting**: The ALB instance is starting.
   * 
   * - **Stopping**: The ALB instance is stopping.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an ALB instance.
   * 
   * @example
   * vsw-bp12mw1f8k3jgy****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the ALB instance.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerAddresses)) {
      $dara.Model.validateArray(this.loadBalancerAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

