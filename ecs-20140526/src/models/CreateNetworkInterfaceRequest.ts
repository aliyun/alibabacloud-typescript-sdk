// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for TCP connections in the TIME_WAIT and CLOSED states. Unit: seconds. Valid values: integers from 3 to 15.
   * 
   * Default value: 3.
   * 
   * > If your ECS instance is used with NLB/CLB, the default timeout period for connections in the `TIME_WAIT` state is 15 seconds.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout period for established TCP connections. Unit: seconds. Valid values: [30, 60, 80, 100, 200, 300, 500, 700, 910].
   * 
   * Default value: 910.
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout period for UDP flows. Unit: seconds. Valid values: [10, 20, 30, 60, 80, 100].
   * 
   * Default value: 30.
   * 
   * > If your ECS instance is used with NLB/CLB, the default value is 100 seconds.
   * 
   * @example
   * 30
   */
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      tcpClosedAndTimeWaitTimeout: 'TcpClosedAndTimeWaitTimeout',
      tcpEstablishedTimeout: 'TcpEstablishedTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tcpClosedAndTimeWaitTimeout: 'number',
      tcpEstablishedTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceRequestEnhancedNetwork extends $dara.Model {
  enableExpress?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * true
   */
  enableRss?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * true
   */
  enableSriov?: boolean;
  virtualFunctionQuantity?: number;
  virtualFunctionTotalQueueNumber?: number;
  static names(): { [key: string]: string } {
    return {
      enableExpress: 'EnableExpress',
      enableRss: 'EnableRss',
      enableSriov: 'EnableSriov',
      virtualFunctionQuantity: 'VirtualFunctionQuantity',
      virtualFunctionTotalQueueNumber: 'VirtualFunctionTotalQueueNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExpress: 'boolean',
      enableRss: 'boolean',
      enableSriov: 'boolean',
      virtualFunctionQuantity: 'number',
      virtualFunctionTotalQueueNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The communication pattern of the network interface controller (NIC).
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues for the network interface controller (NIC).
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA ENI.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not publicly available. If you want to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to request access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not publicly available. If you want to use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to request access.
   * 
   * 
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * 
   * - This parameter currently applies only to Linux images.
   * 
   * - A larger inbound queue depth of the network interface controller (NIC) increases inbound throughput and reduces packet loss probability but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * 
   * <props="china">
   * 
   * >This parameter is in invitational preview and is not publicly available. If you want to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to request access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not publicly available. If you want to use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to request access.
   * 
   * 
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * 
   * - This parameter currently applies only to Linux images.
   * 
   * - A larger outbound queue depth of the network interface controller (NIC) increases outbound throughput and reduces packet loss probability but consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      rxQueueSize: 'RxQueueSize',
      txQueueSize: 'TxQueueSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceTrafficMode: 'string',
      queueNumber: 'number',
      queuePairNumber: 'number',
      rxQueueSize: 'number',
      txQueueSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the network interface controller (NIC). Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the network interface controller (NIC). Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  businessType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The network connectivity tracking configuration.
   * 
   * Before you use this parameter, read [Connection timeout management](https://help.aliyun.com/document_detail/2865958.html).
   */
  connectionTrackingConfiguration?: CreateNetworkInterfaceRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to retain the ENI when the associated instance is released. Valid values:
   * 
   * - true: does not retain the ENI.
   * 
   * - false: retains the ENI.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the network interface controller (NIC). The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  enablePrimaryIPv6?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  enhancedNetwork?: CreateNetworkInterfaceRequestEnhancedNetwork;
  /**
   * @remarks
   * The type of the Elastic Network Interface (ENI). Valid values:
   * 
   * - Secondary: secondary ENI.
   * - Trunk: trunk network interface controller (NIC) (in invitational preview).
   * 
   * Default value: Secondary.
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * One or more IPv4 prefixes to assign to the network interface controller (NIC). Valid values of N: 1 to 10.
   * > If you want to set IPv4 prefixes for the network interface controller (NIC), you must set either the parameter Ipv4Prefix.N or the parameter Ipv4PrefixCount but not both.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of IPv4 prefixes to assign to the network interface controller (NIC). Valid values: 1 to 10.
   * > If you want to set IPv4 prefixes for the network interface controller (NIC), you must set either the parameter Ipv4Prefix.N or the parameter Ipv4PrefixCount but not both.
   * 
   * @example
   * 1
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * One or more IPv6 addresses to assign to the network interface controller (NIC). You can specify up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * Example: Ipv6Address.1=2001:db8:1234:1a00::\\*\\*\\*\\*
   * 
   * > If you want to set IPv6 addresses for the network interface controller (NIC), you must set either the parameter `Ipv6Addresses.N` or the parameter `Ipv6AddressCount` but not both.
   * 
   * @example
   * 2001:db8:1234:1a00::****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to randomly generate for the network interface controller (NIC). Valid values: 1 to 10.
   * 
   * > If you want to set IPv6 addresses for the network interface controller (NIC), you must set either the parameter `Ipv6Addresses.N` or the parameter `Ipv6AddressCount` but not both.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * One or more IPv6 prefixes to assign to the network interface controller (NIC). Valid values of N: 1 to 10.
   * > If you want to set IPv6 prefixes for the network interface controller (NIC), you must set either the parameter Ipv6Prefix.N or the parameter Ipv6PrefixCount but not both.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The number of IPv6 prefixes to assign to the network interface controller (NIC). Valid values: 1 to 10.
   * > If you want to set IPv6 prefixes for the network interface controller (NIC), you must set either the parameter Ipv6Prefix.N or the parameter Ipv6PrefixCount but not both.
   * 
   * @example
   * 1
   */
  ipv6PrefixCount?: number;
  /**
   * @remarks
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and can contain characters from the Unicode letter categorization (including English and Chinese characters) and ASCII digits (0-9). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * testNetworkInterfaceName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The traffic configuration parameter set of the network interface controller (NIC).
   */
  networkInterfaceTrafficConfig?: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The communication pattern of the network interface controller (NIC). Valid values:
   * 
   * - Standard: uses the TCP communication pattern.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication pattern.
   * 
   * > A network interface controller (NIC) in RDMA communication pattern can be attached only to an instance whose instance type supports ERI. The number of ENIs in RDMA pattern cannot exceed the limit of the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) and [Configure eRDMA on enterprise-level instances](https://help.aliyun.com/document_detail/336853.html)<props="china"> and [Configure eRDMA on GPU-accelerated instances](https://help.aliyun.com/document_detail/2248432.html).
   * 
   * Default value: Standard.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The primary private IP address of the network interface controller (NIC).
   * 
   * The specified IP address must be an idle address within the CIDR block of the vSwitch. If you do not specify this parameter, an idle private IP address in the vSwitch CIDR block is randomly allocated by default.
   * 
   * @example
   * ``172.17.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * One or more secondary private IP addresses selected from the idle addresses within the CIDR block of the vSwitch to which the network interface controller (NIC) belongs. Valid values of N: 0 to 10.
   * 
   * > When you allocate secondary private IP addresses, you cannot specify both the parameter `PrivateIpAddress.N` and the parameter `SecondaryPrivateIpAddressCount` at the same time.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The number of queues for the network interface controller (NIC). Valid values: 1 to 2048.
   * 
   * When you attach the ENI to an instance, the value must be less than the maximum number of queues per network interface controller (NIC) supported by the instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the `MaximumQueueNumberPerEni` field.
   * 
   * Default value: empty. When the ENI is attached, the default queue number for the instance type is used. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the `SecondaryEniQueueNumber` field.
   * 
   * @example
   * 1
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA ENI.
   * 
   * If you want to attach multiple RDMA ENIs to an instance, we recommend that you manually specify QueuePairNumber for each ENI based on the upper limit of `QueuePairNumber` supported by the instance type and the number of ENIs you plan to use. Make sure that the total QueuePairNumber of all ENIs does not exceed the maximum value allowed by the instance type. Call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) to query the upper limit for the instance type.
   * 
   * >Notice: If QueuePairNumber is not specified for an RDMA ENI, the upper limit of QueuePairNumber for all RDMA ENIs supported by the instance type is used by default. Therefore, after an RDMA ENI without a specified QueuePairNumber is attached, no more RDMA ENIs can be added (regular ENIs are not affected by this limit).</notice>
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The region ID of the network interface controller (NIC) to create. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) to query resource group information.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * Take note of the following items:
   * 
   * - The inbound queue depth of the network interface controller (NIC) must be equal to the outbound queue depth. Valid values: 8192 to 16384. The value must be a power of 2.
   * 
   * - A larger inbound queue depth increases inbound throughput but consumes more memory.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of private IP addresses for automatic creation by ECS. Valid values: 1 to 49.
   * 
   * @example
   * 1
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which the network interface controller (NIC) belongs. The security group and the ENI must be in the same VPC.
   * 
   * > When you invoke this operation, you must set either `SecurityGroupId` or `SecurityGroupIds.N` but not both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the network interface controller (NIC) belongs. The security groups and the ENI must be in the same VPC. The valid values of N depend on the quota for the maximum number of security groups to which an ENI can belong. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > When you invoke this operation, you must set either `SecurityGroupId` or `SecurityGroupIds.N` but not both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination checking. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * Default value: false.
   * 
   * > This feature is supported only in specific regions. Before you use this feature, read [Source/destination checking](https://help.aliyun.com/document_detail/2863210.html).
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The tags of the network interface controller (NIC).
   */
  tag?: CreateNetworkInterfaceRequestTag[];
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * Take note of the following items:
   * 
   * - The outbound queue depth of the network interface controller (NIC) must be equal to the inbound queue depth. Valid values: 8192 to 16384. The value must be a power of 2.
   * 
   * - A larger outbound queue depth increases outbound throughput but consumes more memory.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The vSwitch ID of the network interface controller (NIC). The private IP address of the ENI is allocated from the idle addresses within the CIDR block of the vSwitch.
   * 
   * >Notice: The network interface controller (NIC) and the instance to which you want to attach the ENI must be in the same zone but can belong to different vSwitches.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws03****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      clientToken: 'ClientToken',
      connectionTrackingConfiguration: 'ConnectionTrackingConfiguration',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      enablePrimaryIPv6: 'EnablePrimaryIPv6',
      enhancedNetwork: 'EnhancedNetwork',
      instanceType: 'InstanceType',
      ipv4Prefix: 'Ipv4Prefix',
      ipv4PrefixCount: 'Ipv4PrefixCount',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      ipv6Prefix: 'Ipv6Prefix',
      ipv6PrefixCount: 'Ipv6PrefixCount',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficConfig: 'NetworkInterfaceTrafficConfig',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      primaryIpAddress: 'PrimaryIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rxQueueSize: 'RxQueueSize',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      sourceDestCheck: 'SourceDestCheck',
      tag: 'Tag',
      txQueueSize: 'TxQueueSize',
      vSwitchId: 'VSwitchId',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      clientToken: 'string',
      connectionTrackingConfiguration: CreateNetworkInterfaceRequestConnectionTrackingConfiguration,
      deleteOnRelease: 'boolean',
      description: 'string',
      enablePrimaryIPv6: 'boolean',
      enhancedNetwork: CreateNetworkInterfaceRequestEnhancedNetwork,
      instanceType: 'string',
      ipv4Prefix: { 'type': 'array', 'itemType': 'string' },
      ipv4PrefixCount: 'number',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      ipv6Prefix: { 'type': 'array', 'itemType': 'string' },
      ipv6PrefixCount: 'number',
      networkInterfaceName: 'string',
      networkInterfaceTrafficConfig: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig,
      networkInterfaceTrafficMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      primaryIpAddress: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      queueNumber: 'number',
      queuePairNumber: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rxQueueSize: 'number',
      secondaryPrivateIpAddressCount: 'number',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      sourceDestCheck: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateNetworkInterfaceRequestTag },
      txQueueSize: 'number',
      vSwitchId: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    if(this.connectionTrackingConfiguration && typeof (this.connectionTrackingConfiguration as any).validate === 'function') {
      (this.connectionTrackingConfiguration as any).validate();
    }
    if(this.enhancedNetwork && typeof (this.enhancedNetwork as any).validate === 'function') {
      (this.enhancedNetwork as any).validate();
    }
    if(Array.isArray(this.ipv4Prefix)) {
      $dara.Model.validateArray(this.ipv4Prefix);
    }
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.ipv6Prefix)) {
      $dara.Model.validateArray(this.ipv6Prefix);
    }
    if(this.networkInterfaceTrafficConfig && typeof (this.networkInterfaceTrafficConfig as any).validate === 'function') {
      (this.networkInterfaceTrafficConfig as any).validate();
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

