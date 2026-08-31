// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for TCP connections in the TIME_WAIT and CLOSED states. Unit: seconds. Valid values: integers from 3 to 15.
   * 
   * Default value: 3.
   * 
   * > If your ECS instance is used with NLB or CLB, the default timeout period for connections in the `TIME_WAIT` state is 15 seconds.
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
   * > If your ECS instance is used with NLB or CLB, the default value is 100 seconds.
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
  enableExpress?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * false
   */
  enableRss?: boolean;
  /**
   * @remarks
   * This parameter is not publicly available.
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

export class ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The communication pattern of the network interface controller (NIC). Valid values:
   * 
   * - Standard: uses the TCP communication pattern.
   * - HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the RDMA communication pattern.
   * 
   * When the network interface controller (NIC) is in the attached state, take note of the following items:
   * - The total number of RDMA network interface controllers (NICs) of an instance cannot exceed the RDMA network interface controller (NIC) quota allowed by the instance type. You can call DescribeInstanceTypes to query the EriQuantity field for the RDMA network interface controller (NIC) quota.
   * 
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues for the network interface controller (NIC).
   * When the network interface controller (NIC) is in the attached state, take note of the following items:
   * - The value cannot exceed the maximum number of queues per network interface controller (NIC) allowed by the instance type.
   * - The total number of queues across all network interface controllers (NICs) of an instance cannot exceed the total queue quota allowed by the instance type. You can call DescribeInstanceTypes to query the MaximumQueueNumberPerEni and TotalEniQueueQuantity fields.
   * 
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of RDMA queues for the network interface controller (NIC).
   * When the network interface controller (NIC) is in the attached state, take note of the following items:
   * - The value cannot exceed the maximum number of queues per RDMA network interface controller (NIC) allowed by the instance type. You can call DescribeInstanceTypes to query the QueuePairNumber field for the maximum number of queues per RDMA network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The inbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not publicly available. To use this parameter, submit a ticket to request access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to instances of the seventh generation or later.
   * - This parameter currently applies only to Linux images.
   * - A larger inbound queue depth can improve inbound throughput and reduce packet loss, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not publicly available. To use this parameter, submit a ticket to request access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to instances of the seventh generation or later.
   * - This parameter currently applies only to Linux images.
   * - A larger outbound queue depth can improve outbound throughput and reduce packet loss, but consumes more memory.
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
   * The network connectivity tracking configuration.
   * 
   * Before you use this parameter, read [Connection timeout management](https://help.aliyun.com/document_detail/2865958.html).
   */
  connectionTrackingConfiguration?: ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to retain the ENI when the associated instance is released. Valid values:
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
   * The description of the network interface controller (NIC). The description must be 2 to 255 characters in length and cannot start with http:// or https://.
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
   * This parameter is not publicly available.
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
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. The name can contain characters under the categorization of letter in Unicode, including English letters, Chinese characters, and digits. The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * eniTestName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication parameter of the network interface controller (NIC).
   */
  networkInterfaceTrafficConfig?: ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of queues for the ENI. Valid values: 1 to 2048.
   * 
   * - You can modify the queue number of an ENI that is in the Available state, or an ENI that is in the InUse state but attached to an instance in the Stopped state.
   * 
   * - The queue number cannot exceed the maximum number of queues per ENI allowed by the instance type. The total number of queues across all ENIs of an instance cannot exceed the total queue quota allowed by the instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the MaximumQueueNumberPerEni and TotalEniQueueQuantity fields for the instance type.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The region ID of the network interface controller (NIC). You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * > This parameter is in invitational preview and is not publicly available. To use this parameter, submit a ticket to request access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to instances of the seventh generation or later.
   * - This parameter currently applies only to Linux images.
   * - A larger inbound queue depth can improve inbound throughput and reduce packet loss, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The list of security group IDs. The secondary network interface controller (NIC) joins the specified security groups and is removed from the existing security groups.
   * 
   * - Valid values of N depend on the maximum number of security groups to which a network interface controller (NIC) can belong. For more information, see [Limits](~~25412#SecurityGroupQuota~~).
   * 
   * - The modification takes effect shortly, but a slight delay may occur.
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
   * > Only specific regions support this feature. Before using this feature, read [Source/destination checking](https://help.aliyun.com/document_detail/2863210.html).
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The outbound queue depth of the network interface controller (NIC).
   * 
   * > This parameter is in invitational preview and is not publicly available. To use this parameter, submit a ticket to request access.
   * 
   * Take note of the following items:
   * 
   * - This parameter applies only to instances of the seventh generation or later.
   * - This parameter currently applies only to Linux images.
   * - A larger outbound queue depth can improve outbound throughput and reduce packet loss, but consumes more memory.
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

