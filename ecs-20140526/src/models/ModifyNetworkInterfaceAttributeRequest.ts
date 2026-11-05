// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for closed and TIME_WAIT TCP connections. Unit: seconds. Valid values: integers from 3 to 15.
   * 
   * Default value: 3.
   * 
   * > If your ECS instance is used together with an NLB or CLB instance, the default timeout period for connections in the `TIME_WAIT` state is 15 seconds.
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

export class ModifyNetworkInterfaceAttributeRequestEnhancedNetwork extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available for public use.
   */
  enableExpress?: boolean;
  /**
   * @remarks
   * > This parameter is not available for public use.
   * 
   * @example
   * false
   */
  enableRss?: boolean;
  /**
   * @remarks
   * This parameter is not available for public use.
   * 
   * @example
   * true
   */
  enableSriov?: boolean;
  /**
   * @remarks
   * The number of virtual functions when SR-IOV is enabled. Valid values: 1 to 256.
   * 
   * @example
   * 1
   */
  virtualFunctionQuantity?: number;
  /**
   * @remarks
   * The total number of queues for virtual functions when SR-IOV is enabled.
   * 
   * @example
   * 4
   */
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

export class ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The traffic pattern of the network interface controller (NIC). Valid values of the parameter:
   * 
   * - Standard: uses the TCP traffic pattern.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA traffic pattern.
   * 
   * When the Elastic Network Interface (ENI) is attached to an instance, take note of the following items:
   * - The total number of RDMA network interface controllers (NICs) for the instance cannot exceed the RDMA network interface controller (NIC) quota allowed by the instance type. You can invoke the DescribeInstanceTypes operation and query the EriQuantity parameter to obtain the RDMA network interface controller (NIC) quota for the instance type.
   * 
   * > This parameter is in invitational preview and is not available for public use.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues for the network interface controller (NIC).
   * When the Elastic Network Interface (ENI) is attached to an instance, take note of the following items:
   * - The number of queues cannot exceed the maximum number of queues per network interface controller (NIC) allowed by the instance type.
   * - The total number of queues for all network interface controllers (NICs) attached to the instance cannot exceed the total queue quota allowed by the instance type. You can invoke the DescribeInstanceTypes operation and query the MaximumQueueNumberPerEni and TotalEniQueueQuantity parameters to obtain the maximum number of queues per network interface controller (NIC) and the total queue quota for the instance type.
   * 
   * > This parameter is in invitational preview and is not available for public use.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queues for the RDMA network interface controller (NIC).
   * When the Elastic Network Interface (ENI) is attached to an instance, take note of the following items:
   * - The number of queues cannot exceed the maximum number of queues per RDMA network interface controller (NIC) allowed by the instance type. You can invoke the DescribeInstanceTypes operation and query the QueuePairNumber parameter to obtain the maximum number of queues per RDMA network interface controller (NIC) for the instance type.
   * 
   * > This parameter is in invitational preview and is not available for public use.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not available for public use. If you need to use it, submit a ticket to apply for whitelist access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * - This parameter currently applies only to Linux images.
   * - A larger inbound queue depth can increase inbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not available for public use. If you need to use it, submit a ticket to apply for whitelist access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * - This parameter currently applies only to Linux images.
   * - A larger outbound queue depth can increase outbound throughput and reduce the packet loss rate, but it consumes more memory.
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

export class ModifyNetworkInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The network connectivity tracking configuration information collection.
   * 
   * Before you use this parameter, read [Connection timeout management](https://help.aliyun.com/document_detail/2865958.html) carefully.
   */
  connectionTrackingConfiguration?: ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration;
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
   * The description of the network interface controller (NIC). The description must be 2 to 255 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the primary IPv6 address for the network interface controller (NIC).
   */
  enablePrimaryIPv6?: boolean;
  /**
   * @remarks
   * This parameter is not available for public use.
   */
  enhancedNetwork?: ModifyNetworkInterfaceAttributeRequestEnhancedNetwork;
  /**
   * @remarks
   * The ID of the network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp67acfmxazb4p****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the Elastic Network Interface (ENI). The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. It supports characters in the Letter category of Unicode, such as English letters, Chinese characters, and digits. It can contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * eniTestName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The traffic parameters of the network interface controller (NIC).
   */
  networkInterfaceTrafficConfig?: ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of queues for the ENI. Valid values: 1 to 2048.
   * 
   * - You can modify the number of queues for an ENI that is in the `Available` state, or for an ENI that is attached (`InUse`) to an instance that is in the `Stopped` state.
   * 
   * - The number of queues for the ENI cannot exceed the maximum number of queues per ENI allowed by the instance type. The total number of queues for all ENIs attached to the instance cannot exceed the total queue quota allowed by the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation and query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` parameters to obtain the maximum number of queues per ENI and the total queue quota for the instance type.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The region ID of the network interface controller (NIC). You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not available for public use. If you need to use it, submit a ticket to apply for whitelist access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * - This parameter currently applies only to Linux images.
   * - A larger inbound queue depth can increase inbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The list of security group IDs. The secondary network interface controller (NIC) is added to the specified security groups and removed from its current security groups.
   * 
   * - The valid values of N depend on the quota of security groups that each network interface controller (NIC) can join. For more information, see [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * - The modification takes effect shortly, but there may be a slight delay.
   */
  securityGroupId?: string[];
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
   * > This feature is supported only in specific regions. Before you use it, read [Source/destination checking](https://help.aliyun.com/document_detail/2863210.html) carefully.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not available for public use. If you need to use it, submit a ticket to apply for whitelist access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to seventh-generation and later ECS instance types.
   * - This parameter currently applies only to Linux images.
   * - A larger outbound queue depth can increase outbound throughput and reduce the packet loss rate, but it consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionTrackingConfiguration: 'ConnectionTrackingConfiguration',
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      enablePrimaryIPv6: 'EnablePrimaryIPv6',
      enhancedNetwork: 'EnhancedNetwork',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficConfig: 'NetworkInterfaceTrafficConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      queueNumber: 'QueueNumber',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rxQueueSize: 'RxQueueSize',
      securityGroupId: 'SecurityGroupId',
      sourceDestCheck: 'SourceDestCheck',
      txQueueSize: 'TxQueueSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionTrackingConfiguration: ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration,
      deleteOnRelease: 'boolean',
      description: 'string',
      enablePrimaryIPv6: 'boolean',
      enhancedNetwork: ModifyNetworkInterfaceAttributeRequestEnhancedNetwork,
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficConfig: ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig,
      ownerAccount: 'string',
      ownerId: 'number',
      queueNumber: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rxQueueSize: 'number',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      sourceDestCheck: 'boolean',
      txQueueSize: 'number',
    };
  }

  validate() {
    if(this.connectionTrackingConfiguration && typeof (this.connectionTrackingConfiguration as any).validate === 'function') {
      (this.connectionTrackingConfiguration as any).validate();
    }
    if(this.enhancedNetwork && typeof (this.enhancedNetwork as any).validate === 'function') {
      (this.enhancedNetwork as any).validate();
    }
    if(this.networkInterfaceTrafficConfig && typeof (this.networkInterfaceTrafficConfig as any).validate === 'function') {
      (this.networkInterfaceTrafficConfig as any).validate();
    }
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

