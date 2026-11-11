// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $dara.Model {
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
   * 2022-12-01T17:22:45Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason for the change of the deletion protection status. The reason must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
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

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The billing type of the NLB instance. Only **PostPay** is returned, which indicates the pay-as-you-go billing method.
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
   * The time when modification protection was enabled. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-12-01T17:22:45Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason for enabling modification protection. The reason must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Business protection period.
   */
  reason?: string;
  /**
   * @remarks
   * The modification protection status of the NLB instance. Valid values:
   * 
   * - **NonProtection**: Modification protection is disabled. You cannot specify **Reason**. If **Reason** is specified, the value is cleared.
   * - **ConsoleProtection**: Modification protection is enabled through the console. You can specify **Reason**.
   * 
   * > If the value is **ConsoleProtection**, you cannot modify the instance configuration in the load balancing console. However, you can modify the instance configuration by invoking API operations.
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
   * The reason for the lock.
   * 
   * @example
   * Business exception.
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of the lock. Valid values:
   * 
   * - **SecurityLocked**: locked due to security reasons.
   * - **RelatedResourceLocked**: locked due to associated resources.
   * - **FinancialLocked**: financial lock due to overdue payment.
   * - **ResidualLocked**: locked due to residual resources.
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
   * The tag key of the instance.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.
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
   * The ID of the elastic IP address (EIP) instance.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the ENI attached to the NLB instance.
   * 
   * @example
   * eni-bp12f1xhs5yal61a****
   */
  eniId?: string;
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
   * The private IP IPv4 address of the NLB instance.
   * 
   * @example
   * 192.168.3.32
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The health check status of the private IP IPv4 address of the NLB instance. Valid values:
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
   * The address information of the NLB instance.
   */
  loadBalancerAddresses?: ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - **Active**: enabled.
   * - **Stopped**: stopped. This state can only be triggered through service invocation of the CADT disaster recovery management service.
   * - **Shifted**: DNS manually removed. You can call the [CancelShiftLoadBalancerZones](https://help.aliyun.com/document_detail/2412000.html) operation to restore the zone DNS.
   * - **AutoShifted**: DNS automatically removed. When a zone encounters an exception or other special conditions, the system automatically removes the IP address of the abnormal zone to ensure that you can access services normally through the NLB domain name. The IP address is automatically restored when the zone recovers. No manual operation is required.
   * - **Starting**: starting. This state can only be triggered through service invocation of the CADT disaster recovery management service.
   * - **Stopping**: stopping. This state can only be triggered through service invocation of the CADT disaster recovery management service.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch that corresponds to the zone. Each zone uses one vSwitch and one subnet by default.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone name. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query zones.
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
   * The protocol version. Valid values:
   * - **ipv4**: IPv4.
   * - **DualStack**: dual-stack.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The IPv4 address type of the NLB instance. Valid values:
   * - **Internet**: The load balancing instance has a public IP address. The DNS domain name is resolved to the public IP address. Therefore, the instance is accessible over the Internet.
   * - **Intranet**: The load balancing instance has only a private IP address. The DNS domain name is resolved to the private IP address. Therefore, the instance is accessible only within the internal network environment of the VPC where the load balancing instance is deployed.
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
   * The time when the resource was created. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-07-18T17:22:45Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether cross-zone load balancing is enabled for the NLB instance. Valid values:
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * The DNS domain name.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The deletion protection configuration.
   */
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  /**
   * @remarks
   * The IPv6 address type of the NLB instance. Valid values:
   * 
   * - **Internet**: The load balancing instance has a public IP address. The DNS domain name is resolved to the public IP address. Therefore, the instance is accessible over the Internet.
   * - **Intranet**: The load balancing instance has only a private IP address. The DNS domain name is resolved to the private IP address. Therefore, the instance is accessible only within the internal network environment of the VPC where the load balancing instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing configuration of the NLB instance.
   */
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  /**
   * @remarks
   * The business status of the NLB instance. Valid values:
   * - **Abnormal**: The instance is in an abnormal state.
   * - **Normal**: The instance is in a normal state.
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
   * - **Inactive**: The instance is stopped. Listeners of the instance no longer forward traffic.
   * - **Active**: The instance is running.
   * - **Provisioning**: The instance is being created.
   * - **Configuring**: Upgrade/Downgrade in progress.
   * - **Deleting**: The instance is being deleted.
   * - **Deleted**: The instance is deleted.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the load balancing instance. Only **Network** is returned, which indicates Network Load Balancer (NLB).
   * 
   * @example
   * Network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The modification protection configuration.
   */
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  /**
   * @remarks
   * The operation lock configuration of the NLB instance. This parameter takes effect when `LoadBalancerBussinessStatus` is **Abnormal**.
   */
  operationLocks?: ListLoadBalancersResponseBodyLoadBalancersOperationLocks[];
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
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security groups to which the NLB instance is added.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
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
   * The list of zone and vSwitch mappings.
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
   * The list of NLB instances.
   */
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If this is the first request or no next request exists, you do not need to specify this parameter.
   * - If a next request exists, set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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

