// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when deletion protection was enabled. The time is displayed in UTC in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-12-01T17:22Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the deletion protection feature is enabled or disabled. The reason must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * @example
   * The instance is running
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

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The billing method of the NLB instance. Only **PostPay** is supported, which indicates the pay-as-you-go billing method.
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

export class ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration read-only mode was enabled. The time is displayed in UTC in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-12-01T17:22Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The reason must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * This parameter takes effect only if **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Service guarantee period
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the configuration read-only mode is enabled. Valid values:
   * 
   * *   **NonProtection**: disabled. In this case, **Reason** is not returned. If **Reason** is set, the value is cleared.
   * *   **ConsoleProtection**: enabled. In this case, **Reason** is returned.
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

export class ListLoadBalancersResponseBodyLoadBalancersOperationLocks extends $dara.Model {
  /**
   * @remarks
   * The reason why the NLB instance is locked.
   * 
   * @example
   * Service exception
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of lock. Valid values:
   * 
   * *   **SecurityLocked**: The NLB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The NLB instance is locked due to association issues.
   * *   **FinancialLocked**: The NLB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The NLB instance is locked because the payments of the associated resources are overdue and the resources are released.
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

export class ListLoadBalancersResponseBodyLoadBalancersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses extends $dara.Model {
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
   * The ID of the elastic network interface (ENI) attached to the NLB instance.
   * 
   * @example
   * eni-bp12f1xhs5yal61a****
   */
  eniId?: string;
  /**
   * @remarks
   * The IPv6 address used by the NLB instance.
   * 
   * @example
   * 2001:db8:1:1:1:1:1:1
   */
  ipv6Address?: string;
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
   * - **Healthy**
   * - **Unhealthy**
   * 
   * > This parameter is returned only when the Status of the zone is Active.
   * 
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @remarks
   * The health status of the IPv6 address of the NLB instance. Valid values:
   * 
   * - **Healthy**
   * - **Unhealthy**
   * 
   * > This parameter is returned only when the Status of the zone is Active.
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
      ipv6Address: 'Ipv6Address',
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
      ipv6Address: 'string',
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that are used by the NLB instance.
   */
  loadBalancerAddresses?: ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - **Active**: The zone is available.
   * 
   * - **Stopped**: The zone is disabled. You can set the zone to this status only by using Cloud Architect Design Tools (CADT).
   * 
   * - **Shifted**: The DNS record is removed.
   * 
   * - **Starting**: The zone is being enabled. You can set the zone to this status only by using CADT.
   * 
   * - **Stopping** You can set the zone to this status only by using CADT.
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
   * The name of the zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the zones.
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
      loadBalancerAddresses: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses },
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

export class ListLoadBalancersResponseBodyLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
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
   * The type of IPv4 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the EIP bandwidth plan that is associated with the NLB instance if the NLB instance uses a public IP address.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-07-18T17:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether cross-zone load balancing is enabled for the NLB instance. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
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
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  /**
   * @remarks
   * The type of IPv6 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing settings of the NLB instance.
   */
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
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
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the NLB instance.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The status of the NLB instance. Valid values:
   * 
   * *   **Inactive**: The NLB instance is disabled. Listeners of NLB instances in the Inactive state do not forward traffic.
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
   * The type of the SLB instance. Only **Network** is returned, which indicates NLB.
   * 
   * @example
   * Network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The configuration of the configuration read-only mode.
   */
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  /**
   * @remarks
   * The configuration of the operation lock. This parameter takes effect if the value of `LoadBalancerBussinessStatus` is **Abnormal**.
   */
  operationLocks?: ListLoadBalancersResponseBodyLoadBalancersOperationLocks[];
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The security group to which the NLB instance is added.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  /**
   * @remarks
   * The ID of the VPC where the NLB instance is deployed.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches.
   */
  zoneMappings?: ListLoadBalancersResponseBodyLoadBalancersZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
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
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      DNSName: 'string',
      deletionProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig,
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig,
      operationLocks: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersOperationLocks },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappings },
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

export class ListLoadBalancersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NLB instances.
   */
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

