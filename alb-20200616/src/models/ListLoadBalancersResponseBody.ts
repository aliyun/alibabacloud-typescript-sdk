// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig extends $dara.Model {
  /**
   * @remarks
   * The log project.
   * 
   * @example
   * sls-setter
   */
  logProject?: string;
  /**
   * @remarks
   * The log store.
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

export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The deletion protection status. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when deletion protection was enabled. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
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

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **PostPay**: pay-as-you-go billing method.
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

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks extends $dara.Model {
  /**
   * @remarks
   * The reason for the lock. This parameter is valid only when **LoadBalancerBussinessStatus** is set to **Abnormal**.
   * 
   * @example
   * Overdue payment
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of the lock. Valid values:
   * 
   * - **SecurityLocked**: Security lock.
   * 
   * - **RelatedResourceLocked**: Associated resource lock.
   * 
   * - **FinancialLocked**: Financial lock.
   * 
   * - **ResidualLocked**: Residual lock.
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

export class ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason for enabling modification protection.
   * 
   * The value must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is returned only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed Instance
   */
  reason?: string;
  /**
   * @remarks
   * The modification protection status of the Application Load Balancing instance. Valid values:
   * 
   * - **NonProtection**: Modification protection is disabled. If **Reason** is configured, **Reason** is forcibly cleared.
   * 
   * - **ConsoleProtection**: Console modification protection is enabled. If **Reason** is configured, **Reason** takes effect.
   * 
   * > When this parameter is set to **ConsoleProtection**, modification protection is enabled. Users cannot modify the instance configuration in the load balancing console, but can invoke API operations to modify the instance configuration.
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

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @remarks
   * The IPv4 address.
   * 
   * @example
   * 10.1.0.61
   */
  address?: string;
  /**
   * @remarks
   * The allocation ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-uf6wm****1zj9
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP.
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The IPv4 private network address.
   * 
   * @example
   * 10.1.0.61
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The health check status of the private network IPv4 address for the Application Load Balancer instance.
   * 
   * @example
   * Healthy
   */
  intranetAddressHcStatus?: string;
  /**
   * @remarks
   * The IPv6 address.
   * 
   * @example
   * 2408:xxxx:249:dd01:6f4:750f:xxxx:bcd9
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The health check status of the IPv6 address for the Application Load Balancer instance.
   * 
   * @example
   * Healthy
   */
  ipv6AddressHcStatus?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      allocationId: 'AllocationId',
      eipType: 'EipType',
      intranetAddress: 'IntranetAddress',
      intranetAddressHcStatus: 'IntranetAddressHcStatus',
      ipv6Address: 'Ipv6Address',
      ipv6AddressHcStatus: 'Ipv6AddressHcStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allocationId: 'string',
      eipType: 'string',
      intranetAddress: 'string',
      intranetAddressHcStatus: 'string',
      ipv6Address: 'string',
      ipv6AddressHcStatus: 'string',
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
   * The instance addresses.
   */
  loadBalancerAddresses?: ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The status of the zone.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. Each zone supports only one vSwitch and one subnet.
   * 
   * @example
   * vsw-bp12mw1f8k3jgy****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the Application Load Balancer instance.
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
   * The access log configuration structure.
   */
  accessLogConfig?: ListLoadBalancersResponseBodyLoadBalancersAccessLogConfig;
  /**
   * @remarks
   * The address mode. Valid values:
   * 
   * - **Fixed**: Fixed IP mode. Indicates that a fixed IP address is used.
   * 
   * - **Dynamic**: Dynamic IP mode. Indicates that an IP address is dynamically allocated to each zone.
   * 
   * @example
   * Fixed
   */
  addressAllocatedMode?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * 
   * - **DualStack**: Dual-stack.
   * 
   * @example
   * DualStack
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The address type of the load balancing instance. Valid values:
   * 
   * - **Internet**: The load balancing instance has a public IP address. The DNS domain name is parsed to the public IP address, so it can be accessed in the public network environment.
   * 
   * - **Intranet**: The load balancing instance has only a private IP address. The DNS domain name is parsed to the private IP address, so it can only be accessed in the internal network environment of the VPC where the load balancing instance is deployed.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth plan associated with the Internet-facing instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
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
   * The deletion protection configuration.
   */
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  /**
   * @remarks
   * The IPv6 network address type of the Application Load Balancing instance. Valid values:
   * 
   * - **Internet**: Internet. The load balancing instance has a public IP address. The DNS domain name is parsed to the public IP address, so it can be accessed in the public network environment.
   * 
   * - **Intranet**: Private network. The load balancing instance has only a private IP address. The DNS domain name is parsed to the private IP address, so it can only be accessed in the internal network environment of the VPC where the load balancing instance is deployed.
   * 
   * @example
   * Intranet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing configuration of the load balancing instance.
   */
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  /**
   * @remarks
   * The business status of the load balancing instance. Valid values:
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
   * The edition of the load balancing instance. Different editions have different feature limits and billing policy. Valid values:
   * 
   * - **Basic**: Basic Edition.
   * 
   * - **Standard**: Standard Edition.
   * 
   * - **StandardWithWaf**: WAF-enhanced Edition.
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The instance ID of the Application Load Balancing instance.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the load balancing instance.
   * 
   * @example
   * alb-instance-test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The operation lock configuration of the load balancing instance.
   */
  loadBalancerOperationLocks?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerOperationLocks[];
  /**
   * @remarks
   * The instance status of the Application Load Balancing instance. Valid values:
   * 
   * - **Inactive**: Stopped. Indicates that the listeners of the instance no longer forward traffic.
   * 
   * - **Active**: Running.
   * 
   * - **Provisioning**: Creating.
   * 
   * - **Configuring**: Upgrade/Downgrade.
   * 
   * - **CreateFailed**: Creation failed.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The modification protection configuration.
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
  /**
   * @remarks
   * The security groups to which the Application Load Balancing instance is added.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the Application Load Balancing instance is deployed.
   * 
   * @example
   * vpc-bp1b49rqryhk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of zone and vSwitch mappings. A maximum of 10 zones can be returned. If the current region supports two or more zones, at least two zones are returned.
   */
  zoneMappings?: ListLoadBalancersResponseBodyLoadBalancersZoneMappings[];
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
      zoneMappings: 'ZoneMappings',
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
      zoneMappings: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappings },
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

export class ListLoadBalancersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Application Load Balancing instances.
   */
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
  /**
   * @remarks
   * The maximum number of entries returned per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates whether a next token is returned for subsequent queries. Valid values:
   * - If **NextToken** is empty, no subsequent query is available.
   * - If **NextToken** is returned, the value indicates the token used to start the next query.
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
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
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

