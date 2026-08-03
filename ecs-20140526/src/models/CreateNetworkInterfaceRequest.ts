// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for TCP connections in the closed or time-wait state. Unit: seconds. Valid values: integers from 3 to 15.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout period for established TCP connections. Unit: seconds. Valid values: [30, 60, 80, 100, 200, 300, 500, 700, 910].
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout period for UDP flows. Unit: seconds. Valid values: [10, 20, 30, 60, 80, 100].
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
   * The communication mode of the network interface controller (NIC).
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
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
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
   * The key of the tag for the network interface controller (NIC). Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag for the network interface controller (NIC). Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The network connectivity tracking configuration of the ENI.
   */
  connectionTrackingConfiguration?: CreateNetworkInterfaceRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to retain the ENI when the associated instance is released. Valid values:
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the network interface controller (NIC). The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
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
   * The type of the network interface controller (NIC). Valid values:
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * One or more IPv4 prefixes to assign to the network interface controller (NIC). Valid values of N: 1 to 10.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of IPv4 prefixes to assign to the network interface controller (NIC). Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * One or more IPv6 addresses to assign to the network interface controller (NIC). You can specify up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * @example
   * 2001:db8:1234:1a00::****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses to assign to the network interface controller (NIC). Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * One or more IPv6 prefixes to assign to the network interface controller (NIC). Valid values of N: 1 to 10.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The number of IPv6 prefixes to assign to the network interface controller (NIC). Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv6PrefixCount?: number;
  /**
   * @remarks
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and can contain letters in the Unicode letter categorization (including English and Chinese characters) and ASCII digits (0-9). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * testNetworkInterfaceName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication parameter set of the network interface controller (NIC).
   */
  networkInterfaceTrafficConfig?: CreateNetworkInterfaceRequestNetworkInterfaceTrafficConfig;
  /**
   * @remarks
   * The communication mode of the network interface controller (NIC). Valid values:
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
   * @example
   * ``172.17.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * One or more secondary private IP addresses selected from the idle IP addresses within the CIDR block of the vSwitch to which the network interface controller (NIC) belongs. Valid values of N: 0 to 10.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The number of queues for the network interface controller (NIC). Valid values: 1 to 2048.
   * 
   * @example
   * 1
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA ENI.
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The region ID of the network interface controller (NIC) to be created. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The ID of the security group to which the network interface controller (NIC) is added. The security group and the network interface controller (NIC) must belong to the same VPC.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more security groups to which the network interface controller (NIC) is added. The security groups and the network interface controller (NIC) must belong to the same VPC. The valid values of N depend on the quota for the maximum number of security groups to which an ENI can be added. For more information, see [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @example
   * sg-bp1fg655nh68xyz9i****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable source/destination checking. We recommend that you enable this feature to improve network security. Valid values:
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
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The vSwitch ID of the network interface controller (NIC). The private IP address of the network interface controller (NIC) is allocated from the idle IP addresses within the CIDR block of the vSwitch.
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

