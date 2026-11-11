// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The deletion protection status. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when deletion protection was enabled. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-11-02T02:49:05Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason for changing the deletion protection status. The reason must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter or a Chinese character.
   * 
   * @example
   * Instance running.
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
   * The billing type of the NLB instance.
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

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The time when modification protection was enabled. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-12-02T02:49:05Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason for enabling modification protection. The reason must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter or a Chinese character.
   * 
   * This parameter is valid and required only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Business protection period.
   */
  reason?: string;
  /**
   * @remarks
   * The modification protection status of the Network Load Balancer (NLB) instance. Valid values:
   * 
   * - **NonProtection**: Modification protection is disabled. You cannot specify the **Reason** parameter. If the **Reason** parameter is specified, the value is cleared.
   * - **ConsoleProtection**: Console modification protection is enabled. You can specify the **Reason** parameter.
   * 
   * > If the value is **ConsoleProtection**, you cannot modify the instance configuration in the load balancing console, but you can modify the instance configuration by invoking API operations.
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
   * The reason for the lock.
   * 
   * @example
   * Business exception.
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of the lock. Valid values:
   * - **SecurityLocked**: The instance is locked due to security reasons.
   * - **RelatedResourceLocked**: The instance is locked due to associate lock.
   * - **FinancialLocked**: The instance is locked due to overdue payment.
   * - **ResidualLocked**: The instance is locked due to residual resources.
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
   * The tag key of the instance.
   * 
   * @example
   * KeyTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance.
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
   * The Elastic IP Address (EIP) instance ID.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-bp12f1xhs5yal61a****
   */
  eniId?: string;
  /**
   * @remarks
   * The list of IPv4 local addresses. These are the addresses used for communication between the NLB instance and backend servers.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * The IPv6 VIP address. The IPv6 address that the NLB instance uses to provide services.
   * 
   * @example
   * 2001:db8:1:1:1:1:1:1
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The list of IPv6 local addresses. These are the addresses used for communication between the NLB instance and backend servers.
   */
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private IPv4 VIP address. The private IPv4 address that the NLB instance uses to provide services.
   * 
   * @example
   * 192.168.3.32
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The health check status of the private IPv4 address of the NLB instance. Valid values:
   * 
   * - **Healthy**: healthy.
   * - **Unhealthy**: unhealthy.
   * 
   * > This parameter is returned only when the zone status (**Status**) is Active.
   * 
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @remarks
   * The health check status of the IPv6 address of the NLB instance. Valid values:
   * 
   * - **Healthy**: healthy.
   * - **Unhealthy**: unhealthy.
   * 
   * > This parameter is returned only when the zone status (**Status**) is Active.
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
   * The Network Load Balancing (NLB) instance address information.
   */
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - **Active**: enabled.
   * - **Stopped**: stopped. This status can be set only through the CADT disaster recovery management service invocation.
   * - **Shifted**: DNS manually removed. You can call the [CancelShiftLoadBalancerZones](https://help.aliyun.com/document_detail/2412000.html) operation to restore the DNS of the zone.
   * - **AutoShifted**: DNS automatically removed. When a zone encounters an exception, the system automatically removes the IP address of the abnormal zone to ensure that you can access services normally through the NLB domain name. The IP address is automatically restored when the zone recovers. No manual operation is required.
   * - **Starting**: starting. This status can be set only through the CADT disaster recovery management service invocation.
   * - **Stopping**: stopping. This status can be set only through the CADT disaster recovery management service invocation.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch in the zone. Each zone uses one vSwitch and one subnet by default.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
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
   * - **ipv4**: IPv4.
   * - **DualStack**: dual stack.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The IPv4 network address type of the NLB instance. Valid values:
   * - **Internet**: The load balancing instance has a public IP address. The DNS domain name is resolved to the public IP address. Therefore, the instance can be accessed over the Internet.
   * - **Intranet**: The load balancing instance has only a private IP address. The DNS domain name is resolved to the private IP address. Therefore, the instance can be accessed only within the internal network of the VPC where the load balancing instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance associated with the Internet-facing NLB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The maximum number of new connections per second that the NLB instance can process per zone (VIP). Valid values: **0** to **1000000**.
   * 
   * **0** indicates that no limit is imposed.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether cross-zone is enabled for the NLB instance. Valid values:
   * - **true**: enabled.
   * - **false**: disabled.
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
   * The deletion protection configuration.
   */
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
  /**
   * @remarks
   * The IPv6 address type of the NLB instance. Valid values:
   * - **Internet**: The load balancing instance has a public IP address. The DNS domain name is resolved to the public IP address. Therefore, the instance can be accessed over the Internet.
   * - **Intranet**: The load balancing instance has only a private IP address. The DNS domain name is resolved to the private IP address. Therefore, the instance can be accessed only within the internal network of the VPC where the load balancing instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing configuration of the load balancing instance.
   */
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
  /**
   * @remarks
   * The business status of the NLB instance. Valid values:
   * - **Abnormal**: The NLB instance is in an abnormal state.
   * - **Normal**: The NLB instance is in a normal state.
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
   * The name of the NLB instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter or a Chinese character.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The NLB instance status. Valid values:
   * - **Inactive**: The NLB instance is stopped. The listeners of the instance no longer forward traffic.
   * - **Active**: The NLB instance is running.
   * - **Provisioning**: The NLB instance is being created.
   * - **Configuring**: The NLB instance is being reconfigured (Upgrade/Downgrade).
   * - **CreateFailed**: The NLB instance failed to be created. In this case, no fees are incurred, and the instance can only be deleted.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The load balancing type. Only **network** is returned, which indicates Network Load Balancer (NLB).
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The modification protection configuration.
   */
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  /**
   * @remarks
   * The lock state list of the NLB instance. This parameter is returned only when `LoadBalancerBussinessStatus` is **Abnormal**.
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
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group IDs associated with the NLB instance.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The tag list.
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
   * The mappings between zones and vSwitches. A maximum of 10 zones are returned. If the current region supports two or more zones, at least two zones are returned.
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

