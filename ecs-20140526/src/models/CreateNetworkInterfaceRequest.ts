// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for closed and TIME_WAIT TCP connections. Unit: seconds. Valid values: integers from 3 to 15.
   * 
   * Default value: 3.
   * 
   * > If your ECS instance is used together with an NLB or CLB instance, the default timeout period for connections in the TIME_WAIT state is 15 seconds.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout period for established TCP connections. Unit: seconds. Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.
   * 
   * Default value: 910.
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout period for UDP flows. Unit: seconds. Valid values: 10, 20, 30, 60, 80, and 100.
   * 
   * Default value: 30.
   * 
   * > If your ECS instance is used together with an NLB or CLB instance, the default value is 100 seconds.
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
   * > This parameter is not available.
   * 
   * @example
   * true
   */
  enableRss?: boolean;
  /**
   * @remarks
   * > This parameter is not available.
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
   * The communication pattern of the Elastic Network Interface (ENI).
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues for the Elastic Network Interface (ENI).
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
   * The inbound queue depth of the Elastic Network Interface (ENI).
   * 
   * 
   * <props="china">
   * 
   * > This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to apply for whitelist access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for whitelist access.
   * 
   * 
   * 
   * When you use this parameter, take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance families.
   * 
   * - This parameter applies only to Linux images.
   * 
   * - A larger inbound queue depth can improve inbound throughput and reduce the packet loss rate, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The outbound queue depth of the Elastic Network Interface (ENI).
   * 
   * 
   * <props="china">
   * 
   * > This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex) to apply for whitelist access.
   * 
   * 
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is in invitational preview and is not available. If you want to use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl) to apply for whitelist access.
   * 
   * 
   * 
   * When you use this parameter, take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance families.
   * 
   * - This parameter applies only to Linux images.
   * 
   * - A larger outbound queue depth can improve outbound throughput and reduce the packet loss rate, but consumes more memory.
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
   * The tag key of the Elastic Network Interface (ENI). Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the Elastic Network Interface (ENI). Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * > **[Deprecated]**
   * 
   * @example
   * null
   */
  businessType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The network connectivity tracking configurations. Before you use this parameter, read [Connection timeout management](https://help.aliyun.com/document_detail/2865958.html).
   */
  connectionTrackingConfiguration?: CreateNetworkInterfaceRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to retain the ENI when the instance is released. Valid values:
   * 
   * - true: The ENI is not retained.
   * 
   * - false: The ENI is retained.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the Elastic Network Interface (ENI). The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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
   * > This parameter is not available.
   */
  enhancedNetwork?: CreateNetworkInterfaceRequestEnhancedNetwork;
  /**
   * @remarks
   * The type of the Elastic Network Interface (ENI). Valid values:
   * 
   * - Secondary: secondary Elastic Network Interface (ENI).
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
   * One or more IPv4 prefixes that are allocated to the Elastic Network Interface (ENI). Valid values of N: 1 to 10.
   * > If you want to allocate IPv4 prefixes to the Elastic Network Interface (ENI), you must configure Settings for either Ipv4Prefix.N or Ipv4PrefixCount. You cannot configure Settings for both parameters.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of IPv4 prefixes that are allocated to the Elastic Network Interface (ENI). Valid values: 1 to 10.
   * > If you want to allocate IPv4 prefixes to the Elastic Network Interface (ENI), you must configure Settings for either Ipv4Prefix.N or Ipv4PrefixCount. You cannot configure Settings for both parameters.
   * 
   * @example
   * 1
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * One or more IPv6 addresses that are allocated to the Elastic Network Interface (ENI). It supports Settings for up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * Example: Ipv6Address.1=2001:db8:1234:1a00::\\*\\*\\*\\*
   * 
   * > If you want to allocate IPv6 addresses to the Elastic Network Interface (ENI), you must configure Settings for either Ipv6Addresses.N or Ipv6AddressCount. You cannot configure Settings for both parameters.
   * 
   * @example
   * 2001:db8:1234:1a00::****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses that are randomly generated for the Elastic Network Interface (ENI). Valid values: 1 to 10.
   * 
   * > If you want to allocate IPv6 addresses to the Elastic Network Interface (ENI), you must configure Settings for either Ipv6Addresses.N or Ipv6AddressCount. You cannot configure Settings for both parameters.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * One or more IPv6 prefixes that are allocated to the Elastic Network Interface (ENI). Valid values of N: 1 to 10.
   * > If you want to allocate IPv6 prefixes to the Elastic Network Interface (ENI), you must configure Settings for either Ipv6Prefix.N or Ipv6PrefixCount. You cannot configure Settings for both parameters.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The number of IPv6 prefixes that are allocated to the Elastic Network Interface (ENI). Valid values: 1 to 10.
   * > If you want to allocate IPv6 prefixes to the Elastic Network Interface (ENI), you must configure Settings for either Ipv6Prefix.N or Ipv6PrefixCount. You cannot configure Settings for both parameters.
   * 
   * @example
   * 1
   */
  ipv6PrefixCount?: number;
  /**
   * @remarks
   * The name of the Elastic Network Interface (ENI). The name must be 2 to 128 characters in length. It can contain letters in the Unicode letter categorization (including English and Chinese characters) and ASCII digits (0-9). It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * testNetworkInterfaceName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication parameters of the Elastic Network Interface (ENI).
   */
  networkInterfaceTrafficConfig?: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The communication pattern of the Elastic Network Interface (ENI). Valid values:
   * 
   * - Standard: uses the TCP communication pattern.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication pattern.
   * 
   * > For an Elastic Network Interface (ENI) that uses the RDMA communication pattern, you can attach the Elastic Network Interface (ENI) only to an instance of an instance type that supports ERI. The number of Elastic Network Interfaces (ENIs) that use the RDMA pattern cannot exceed the limit for the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) and [Configure eRDMA on enterprise-level instances](https://help.aliyun.com/document_detail/336853.html)<props="china"> and [Configure eRDMA on GPU-accelerated instances](https://help.aliyun.com/document_detail/2248432.html).
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
   * The primary private IP address of the Elastic Network Interface (ENI).
   * 
   * The specified IP address must be an idle IP address in the CIDR block of the vSwitch to which the Elastic Network Interface (ENI) belongs. If you do not specify this parameter, an idle IP address in the vSwitch is randomly allocated by default.
   * 
   * @example
   * ``172.17.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * One or more secondary private IP addresses that are selected from the idle IP addresses in the CIDR block of the vSwitch to which the Elastic Network Interface (ENI) belongs. Valid values of N: 0 to 10.
   * 
   * > When you allocate secondary private IP addresses, you cannot specify both the PrivateIpAddress.N parameter and the SecondaryPrivateIpAddressCount parameter.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The number of queues for the Elastic Network Interface (ENI). Valid values: 1 to 2048.
   * 
   * When you attach the Elastic Network Interface (ENI) to an instance, the value of this parameter must be less than the maximum number of queues per single network interface controller (NIC) supported by the instance type. You can invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the MaximumQueueNumberPerEni value for the instance type.
   * 
   * Default value: empty. When you attach the Elastic Network Interface (ENI), the default number of queues per Elastic Network Interface (ENI) for the instance type is used. You can invoke the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the SecondaryEniQueueNumber value for the instance type.
   * 
   * @example
   * 1
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA ENI.
   * 
   * If you want to attach multiple RDMA ENIs to an instance, we recommend that you manually specify the QueuePairNumber value for each ENI based on the maximum QueuePairNumber value supported by the instance type and the number of ENIs that you plan to use. Make sure that the total number of queue pairs for all ENIs does not exceed the maximum value allowed for the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum value for the instance type.
   * 
   * >Notice: If you do not specify the QueuePairNumber value for an RDMA ENI, the maximum QueuePairNumber value supported by the instance type for all RDMA ENIs is used by default. Therefore, after you attach an RDMA ENI for which QueuePairNumber is not specified, you cannot attach more RDMA ENIs. This limit does not apply to standard ENIs.</notice>
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The region ID of the Elastic Network Interface (ENI) to be created. You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group information.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The inbound queue depth of the Elastic Network Interface (ENI).
   * 
   * Take note of the following items:
   * 
   * - The inbound queue depth of the network interface controller (NIC) must be equal to the outbound queue depth. Valid values: 8192 to 16384. The value must be a power of 2.
   * 
   * - A larger inbound queue depth can improve inbound throughput but consumes more memory.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of private IP addresses that you want Elastic Compute Service (ECS) to allocate for automatic creation. Valid values: 1 to 49.
   * 
   * @example
   * 1
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group to which you want to add the Elastic Network Interface (ENI). The security group and the Elastic Network Interface (ENI) must belong to the same VPC.
   * 
   * > When you invoke this operation, you must configure Settings for either SecurityGroupId or SecurityGroupIds.N. You cannot configure Settings for both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which you want to add the Elastic Network Interface (ENI). The security groups and the Elastic Network Interface (ENI) must belong to the same VPC. The valid values of N depend on the quota of security groups to which an Elastic Network Interface (ENI) can be added. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > When you invoke this operation, you must configure Settings for either SecurityGroupId or SecurityGroupIds.N. You cannot configure Settings for both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination checking. We recommend that you enable this feature to improve network security. Valid values:
   * 
   * - true: enables source/destination checking.
   * 
   * - false: disables source/destination checking.
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
   * The tags of the Elastic Network Interface (ENI).
   */
  tag?: CreateNetworkInterfaceRequestTag[];
  /**
   * @remarks
   * The outbound queue depth of the Elastic Network Interface (ENI).
   * 
   * Take note of the following items:
   * 
   * - The outbound queue depth of the network interface controller (NIC) must be equal to the inbound queue depth. Valid values: 8192 to 16384. The value must be a power of 2.
   * 
   * - A larger outbound queue depth can improve outbound throughput but consumes more memory.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The vSwitch ID of the Elastic Network Interface (ENI). The private IP address of the Elastic Network Interface (ENI) is selected from the idle IP addresses in the CIDR block of the vSwitch.
   * 
   * >Notice: The Elastic Network Interface (ENI) and the instance to which you want to attach the Elastic Network Interface (ENI) must belong to the same zone, but they can belong to different vSwitches.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws03****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * > **[Deprecated]**
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

