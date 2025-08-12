// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
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
   * 2022-11-02T02:49:05Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * @example
   * create-by-mse-can-not-delete
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
      reason: 'string',
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
   * The billing method of the NLB instance. Set the value to **PostPay**, which specifies the pay-as-you-go billing method.
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

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the modification protection feature was enabled. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02T02:49:05Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * >  This parameter takes effect only if the **Status** parameter is set to **ConsoleProtection**.
   * 
   * @example
   * create-by-mse-cannot-modify
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: does not enable the configuration read-only mode. You cannot set the **Reason** parameter. If the **Reason** parameter is set, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. You can set the **Reason** parameter.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify instance configurations. However, you can call API operations to modify instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTime: 'EnabledTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTime: 'string',
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

export class GetLoadBalancerAttributeResponseBodyOperationLocks extends $dara.Model {
  /**
   * @remarks
   * The reason why the NLB instance is locked.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of the lock. Valid values:
   * 
   * *   **SecurityLocked**: The NLB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The NLB instance is locked due to other resources associated with the NLB instance.
   * *   **FinancialLocked**: The NLB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The NLB instance is locked because the associated resources have overdue payments and the resources are released.
   * 
   * @example
   * SecurityLocked
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

export class GetLoadBalancerAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * KeyTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ValueTest
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

export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp12f1xhs5yal61a****
   */
  eniId?: string;
  /**
   * @remarks
   * The IPv4 link-local addresses. The IP addresses that the NLB instance uses to communicate with the backend servers.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * The IPv6 address of the NLB instance.
   * 
   * @example
   * 2001:db8:1:1:1:1:1:1
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The IPv6 link-local addresses. The IP addresses that the NLB instance uses to communicate with the backend servers.
   */
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private IPv4 address of the NLB instance.
   * 
   * @example
   * 192.168.3.32
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The health status of the private IPv4 address of the NLB instance. Valid values:
   * 
   * *   **Healthy**
   * *   **Unhealthy**
   * 
   * > This parameter is returned only when the **Status** of the zone is **Active**.
   * 
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @remarks
   * The health status of the IPv6 address of the NLB instance. Valid values:
   * 
   * *   **Healthy**
   * *   **Unhealthy**
   * 
   * > This parameter is returned only when the **Status** of the zone is **Active**.
   * 
   * @example
   * Healthy
   */
  privateIPv6HcStatus?: string;
  /**
   * @remarks
   * The public IPv4 address of the NLB instance.
   * 
   * @example
   * 120.XX.XX.69
   */
  publicIPv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eniId: 'EniId',
      ipv4LocalAddresses: 'Ipv4LocalAddresses',
      ipv6Address: 'Ipv6Address',
      ipv6LocalAddresses: 'Ipv6LocalAddresses',
      privateIPv4Address: 'PrivateIPv4Address',
      privateIPv4HcStatus: 'PrivateIPv4HcStatus',
      privateIPv6HcStatus: 'PrivateIPv6HcStatus',
      publicIPv4Address: 'PublicIPv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eniId: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
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
   * The information about the IP addresses used by the NLB instance.
   */
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * *   **Active**: The zone is available.
   * *   **Stopped**: The zone is disabled. You can set the zone to this status only by using Cloud Architect Design Tools (CADT).
   * *   **Shifted**: The DNS record is removed.
   * *   **Starting**: The zone is being enabled. You can set the zone to this status only by using CADT.
   * *   **Stopping** You can set the zone to this status only by using CADT.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone contains one vSwitch and one subnet.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
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
   * The protocol version. Valid values:
   * 
   * *   **ipv4**: IPv4
   * *   **DualStack**: dual stack
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The IPv4 network type of the NLB instance. Valid values:
   * 
   * *   **Internet** The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet** The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC in which the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the EIP bandwidth plan.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address). Valid values: **0** to **1000000**.
   * 
   * **0** indicates that the number of connections is unlimited.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * The time when the NLB instance was created. This value is a UNIX timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the NLB instance is accessible across zones. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
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
   * The configuration of the deletion protection feature.
   */
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
  /**
   * @remarks
   * The IPv6 network type of the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. In this case, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing information of the NLB instance.
   */
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
  /**
   * @remarks
   * The status of workloads on the NLB instance. Valid values:
   * 
   * *   **Abnormal**
   * *   **Normal**
   * 
   * @example
   * Normal
   */
  loadBalancerBusinessStatus?: string;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The NLB instance name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The NLB instance status. Valid values:
   * 
   * *   **Inactive**: The NLB instance is disabled. The listeners of NLB instances in the Inactive state do not forward traffic.
   * *   **Active**: The NLB instance is running.
   * *   **Provisioning**: The NLB instance is being created.
   * *   **Configuring**: The NLB instance is being modified.
   * *   **CreateFailed**: The system failed to create the NLB instance. In this case, you are not charged for the NLB instance. You can only delete the NLB instance.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instance. Set the value to **network**, which specifies NLB.
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The configuration of the configuration read-only mode.
   */
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  /**
   * @remarks
   * The information about the locked NLB instance. This parameter is returned only when `LoadBalancerBussinessStatus` is **Abnormal**.
   */
  operationLocks?: GetLoadBalancerAttributeResponseBodyOperationLocks[];
  /**
   * @remarks
   * The region ID of the NLB instance.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group associated with the NLB instance.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  /**
   * @remarks
   * The VPC ID of the NLB instance.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of zones and vSwitches in the zones. You must specify 2 to 10 zones.
   */
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      cps: 'Cps',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      operationLocks: 'OperationLocks',
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
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      cps: 'number',
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      DNSName: 'string',
      deletionProtectionConfig: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig,
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig,
      operationLocks: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyOperationLocks },
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
    if(this.deletionProtectionConfig && typeof (this.deletionProtectionConfig as any).validate === 'function') {
      (this.deletionProtectionConfig as any).validate();
    }
    if(this.loadBalancerBillingConfig && typeof (this.loadBalancerBillingConfig as any).validate === 'function') {
      (this.loadBalancerBillingConfig as any).validate();
    }
    if(this.modificationProtectionConfig && typeof (this.modificationProtectionConfig as any).validate === 'function') {
      (this.modificationProtectionConfig as any).validate();
    }
    if(Array.isArray(this.operationLocks)) {
      $dara.Model.validateArray(this.operationLocks);
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

