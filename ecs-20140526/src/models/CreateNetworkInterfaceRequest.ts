// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout for a TCP connection in the TIME_WAIT or closing state, in seconds. Valid values: integers from 3 to 15.
   * 
   * Default value: 3.
   * 
   * > If your ECS instance works with NLB or CLB, the default timeout period for connections in the `TIME_WAIT` state is 15 seconds.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout for an established TCP connection, in seconds. Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.
   * 
   * Default value: 910.
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout for a UDP stream, in seconds. Valid values: 10, 20, 30, 60, 80, and 100.
   * 
   * Default value: 30.
   * 
   * > If your ECS instance works with NLB or CLB, the default value is 100 seconds.
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
      enableRss: 'EnableRss',
      enableSriov: 'EnableSriov',
      virtualFunctionQuantity: 'VirtualFunctionQuantity',
      virtualFunctionTotalQueueNumber: 'VirtualFunctionTotalQueueNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The traffic mode of the elastic network interface.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues for the elastic network interface.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs for the RDMA-enabled elastic network interface.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The receive (Rx) queue depth of the elastic network interface.
   * 
   * <props="china">
   * 
   * > This parameter is available by invitation only. To request access, submit a ticket.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is available by invitation only. To request access, submit a ticket.
   * 
   * 
   * 
   * - This parameter is applicable only to seventh-generation or later ECS instance types.
   * 
   * - This parameter is applicable only to Linux images.
   * 
   * - A larger Rx queue depth can improve receive throughput and reduce the packet loss rate, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The transmit (Tx) queue depth of the elastic network interface.
   * 
   * <props="china">
   * 
   * > This parameter is available by invitation only. To request access, submit a ticket.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is available by invitation only. To request access, submit a ticket.
   * 
   * 
   * 
   * - This parameter is applicable only to seventh-generation or later ECS instance types.
   * 
   * - This parameter is applicable only to Linux images.
   * 
   * - A larger Tx queue depth can improve transmit throughput and reduce the packet loss rate, but consumes more memory.
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
   * The key of the tag. Valid values for N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters long and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Valid values for N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters long and cannot contain `http://` or `https://`.
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
   * A client token to ensure request idempotence. Your client generates this token, which must be unique across requests. The token can contain only ASCII characters and must not exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection tracking settings.
   * 
   * Before using this parameter, read [Connection timeout management](https://help.aliyun.com/document_detail/2865958.html).
   */
  connectionTrackingConfiguration?: CreateNetworkInterfaceRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to release the elastic network interface when its attached instance is released. Valid values:
   * 
   * - `true`: The elastic network interface is released.
   * 
   * - `false`: The elastic network interface is retained.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the elastic network interface. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  enhancedNetwork?: CreateNetworkInterfaceRequestEnhancedNetwork;
  /**
   * @remarks
   * The type of the elastic network interface. Valid values:
   * 
   * - `Secondary`: a secondary elastic network interface.
   * 
   * - `Trunk`: a trunk network interface. (This feature is available by invitation only.)
   * 
   * Default value: `Secondary`.
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * One or more IPv4 prefixes to assign to the elastic network interface. Valid values of N: 1 to 10.
   * 
   * > You must specify either `Ipv4Prefix.N` or `Ipv4PrefixCount`, but not both, to assign IPv4 prefixes.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of IPv4 prefixes to assign to the elastic network interface. Valid values: 1 to 10.
   * 
   * > You must specify either `Ipv4Prefix.N` or `Ipv4PrefixCount`, but not both, to assign IPv4 prefixes.
   * 
   * @example
   * 1
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * One or more IPv6 addresses to assign to the elastic network interface. You can specify up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::****`
   * 
   * > You must specify either `Ipv6Address.N` or `Ipv6AddressCount`, but not both, to assign IPv6 addresses.
   * 
   * @example
   * 2001:db8:1234:1a00::****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of random IPv6 addresses to assign to the elastic network interface. Valid values: 1 to 10.
   * 
   * > You must specify either `Ipv6Address.N` or `Ipv6AddressCount`, but not both, to assign IPv6 addresses.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * One or more IPv6 prefixes to assign to the elastic network interface. Valid values of N: 1 to 10.
   * 
   * > You must specify either `Ipv6Prefix.N` or `Ipv6PrefixCount`, but not both, to assign IPv6 prefixes.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The number of IPv6 prefixes to assign to the elastic network interface. Valid values: 1 to 10.
   * 
   * > You must specify either `Ipv6Prefix.N` or `Ipv6PrefixCount`, but not both, to assign IPv6 prefixes.
   * 
   * @example
   * 1
   */
  ipv6PrefixCount?: number;
  /**
   * @remarks
   * The name of the elastic network interface. The name must be 2 to 128 characters long and can contain Unicode letters (such as English and Chinese characters), digits (0-9), colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * testNetworkInterfaceName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication parameters of the elastic network interface.
   */
  networkInterfaceTrafficConfig?: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The traffic mode of the elastic network interface. Valid values:
   * 
   * - `Standard`: uses the TCP traffic mode.
   * 
   * - `HighPerformance`: enables the Elastic RDMA Interface (ERI) and uses the RDMA traffic mode.
   * 
   * > An elastic network interface in RDMA traffic mode can be attached only to an ERI-supported instance type. The number of these elastic network interfaces that can be attached is limited by the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html), [Configure eRDMA on an enterprise-level instance](https://help.aliyun.com/document_detail/336853.html)<props="china">, and [Configure eRDMA on a GPU instance](https://help.aliyun.com/document_detail/2248432.html).
   * 
   * Default value: `Standard`.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The primary private IP address of the elastic network interface.
   * 
   * The IP address must be an available IP address within the CIDR block of the VSwitch. If this parameter is not specified, the system randomly assigns an available IP address from the VSwitch\\"s CIDR block.
   * 
   * @example
   * ``172.17.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * One or more secondary private IP addresses to assign to the elastic network interface. The IP addresses must be available addresses from the CIDR block of the VSwitch to which the elastic network interface belongs. Valid values of N: 0 to 10.
   * 
   * > You cannot specify both `PrivateIpAddress.N` and `SecondaryPrivateIpAddressCount` to assign secondary private IP addresses.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The number of queues for the elastic network interface. Valid values: 1 to 2048.
   * 
   * When attached to an instance, this value must be less than the maximum number of queues per elastic network interface that the instance type supports. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation and check the `MaximumQueueNumberPerEni` value in the response to query this limit.
   * 
   * If you do not specify this parameter, the default queue number for the instance type is used upon attachment.
   * 
   * @example
   * 1
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs for the RDMA-enabled elastic network interface.
   * 
   * If you want to attach multiple RDMA-enabled elastic network interfaces to an instance, we recommend that you specify a `QueuePairNumber` value for each elastic network interface. The value should be based on the maximum `QueuePairNumber` value supported by the instance type and the number of elastic network interfaces that you plan to use. The total number of queue pairs for all elastic network interfaces cannot exceed the maximum value for the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the maximum value.
   * 
   * >Notice: 
   * 
   * If you do not specify `QueuePairNumber` for an RDMA-enabled elastic network interface, the system defaults to the maximum value that the instance type supports. Consequently, you cannot attach any more RDMA-enabled elastic network interfaces to that instance. This does not affect standard elastic network interfaces.
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The ID of the region in which to create the elastic network interface. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The receive (Rx) queue depth of the elastic network interface.
   * 
   * - The receive (Rx) and transmit (Tx) queue depths must be equal. The value must be a power of 2 between 8,192 and 16,384.
   * 
   * - A larger Rx queue depth can improve receive throughput but consumes more memory.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The number of secondary private IP addresses to automatically assign to the elastic network interface. Valid values: 1 to 49.
   * 
   * @example
   * 1
   */
  secondaryPrivateIpAddressCount?: number;
  /**
   * @remarks
   * The ID of the security group for the elastic network interface. The security group and the elastic network interface must be in the same VPC.
   * 
   * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which to add the elastic network interface. The security groups and the elastic network interface must be in the same VPC. The valid values of N depend on the maximum number of security groups to which an elastic network interface can be added. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not both.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination check. Enabling this feature enhances network security. Valid values:
   * 
   * - `true`: enabled.
   * 
   * - `false`: disabled.
   * 
   * Default value: false.
   * 
   * > This feature is available only in some regions. Before you use this feature, read [Source/destination check](https://help.aliyun.com/document_detail/2863210.html).
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The tags to add to the elastic network interface.
   */
  tag?: CreateNetworkInterfaceRequestTag[];
  /**
   * @remarks
   * The transmit (Tx) queue depth of the elastic network interface.
   * 
   * - The transmit (Tx) and receive (Rx) queue depths must be equal. The value must be a power of 2 between 8,192 and 16,384.
   * 
   * - A larger Tx queue depth can improve transmit throughput but consumes more memory.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the VSwitch for the elastic network interface. The private IP addresses for the elastic network interface are assigned from the available CIDR block of the VSwitch.
   * 
   * >Notice: 
   * 
   * The elastic network interface and the instance to be attached must be in the same availability zone but can belong to different VSwitches.
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

