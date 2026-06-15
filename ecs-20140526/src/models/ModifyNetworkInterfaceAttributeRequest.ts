// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period, in seconds, for TCP connections in the `TIME_WAIT` or `CLOSE_WAIT` state. The value must be an integer from 3 to 15.
   * 
   * Default value: 3.
   * 
   * > If your ECS instance is used with Network Load Balancer (NLB) or Classic Load Balancer (CLB), the default timeout period for connections in the `TIME_WAIT` state is 15 seconds.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout period for TCP connections in the `ESTABLISHED` state, in seconds. Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.
   * 
   * Default value: 910.
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout period for UDP flows, in seconds. Valid values: 10, 20, 30, 60, 80, and 100.
   * 
   * Default value: 30.
   * 
   * > If your ECS instance is used with Network Load Balancer (NLB) or Classic Load Balancer (CLB), the default value is 100 seconds.
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

export class ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The traffic mode of the elastic network interface. Valid values:
   * 
   * - `Standard`: The standard TCP traffic mode.
   * 
   * - `HighPerformance`: The RDMA traffic mode with the Elastic RDMA Interface (ERI) feature enabled.
   * 
   * If the elastic network interface is attached to an instance, note the following:
   * 
   * - The total number of ERI-enabled elastic network interfaces on the instance cannot exceed the quota for the instance type. You can call the [DescribeInstanceTypes operation to query the value of the `EriQuantity` parameter.]()
   * 
   * > This parameter is available by invitation only.
   * 
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The number of queues for the elastic network interface.
   * If the elastic network interface is attached to an instance, note the following:
   * 
   * - The value cannot exceed the maximum number of queues per elastic network interface that is supported by the instance type.
   * 
   * - The total number of queues for all elastic network interfaces on the instance cannot exceed the queue quota for the instance type. You can call the [DescribeInstanceTypes operation to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values for an instance type.]()
   * 
   * > This parameter is available by invitation only. To use this feature, submit a ticket.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs for the ERI.
   * If the elastic network interface is attached to an instance, note the following:
   * 
   * - The value cannot exceed the maximum number of queue pairs per ERI that is supported by the instance type. You can call the [DescribeInstanceTypes operation to query the value of the `QueuePairNumber` parameter for an instance type.]()
   * 
   * > This parameter is available by invitation only. To use this feature, submit a ticket.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The queue depth for inbound traffic on the elastic network interface.
   * 
   * > This parameter is available by invitation only. To use this feature, submit a ticket.
   * 
   * Note the following:
   * 
   * - This parameter is available only for instance types of the 7th generation and later.
   * 
   * - This parameter is available only for instances that use Linux images.
   * 
   * - A larger queue depth for inbound traffic increases throughput and reduces the packet loss rate, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The queue depth for outbound traffic on the elastic network interface.
   * 
   * > This parameter is available by invitation only. To use this feature, submit a ticket.
   * 
   * Note the following:
   * 
   * - This parameter is available only for instance types of the 7th generation and later.
   * 
   * - This parameter is available only for instances that use Linux images.
   * 
   * - A larger queue depth for outbound traffic increases throughput and reduces the packet loss rate, but consumes more memory.
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
   * The connection tracking configuration.
   * 
   * Before using this parameter, we recommend that you read [Connection timeout management](https://help.aliyun.com/document_detail/2865958.html).
   */
  connectionTrackingConfiguration?: ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration;
  /**
   * @remarks
   * Specifies whether to delete the elastic network interface when its attached instance is released. Valid values:
   * 
   * - `true`: The elastic network interface is deleted.
   * 
   * - `false`: The elastic network interface is retained.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the elastic network interface. The description must be 2 to 255 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   */
  enhancedNetwork?: ModifyNetworkInterfaceAttributeRequestEnhancedNetwork;
  /**
   * @remarks
   * The ID of the elastic network interface.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp67acfmxazb4p****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the elastic network interface. The name must be 2 to 128 characters in length, start with a letter or a Chinese character, and not start with `http://` or `https://`. It can contain letters, digits, Chinese characters, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * eniTestName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The traffic configuration of the elastic network interface.
   */
  networkInterfaceTrafficConfig?: ModifyNetworkInterfaceAttributeRequestNetworkInterfaceTrafficConfig;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of queues for the elastic network interface. Valid values: 1 to 2048.
   * 
   * - You can change the number of queues for an elastic network interface only when it is in the `Available` state or is attached to an instance in the `Stopped` state.
   * 
   * - The number of queues cannot exceed the maximum supported by the instance type. The total number of queues for all elastic network interfaces attached to the instance cannot exceed the instance\\"s queue quota. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values for an instance type.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The ID of the region where the elastic network interface is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
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
   * The queue depth for inbound traffic on the elastic network interface.
   * 
   * > This parameter is available by invitation only. To use this feature, submit a ticket.
   * 
   * Note the following:
   * 
   * - This parameter is available only for instance types of the 7th generation and later.
   * 
   * - This parameter is available only for instances that use Linux images.
   * 
   * - A larger queue depth for inbound traffic increases throughput and reduces the packet loss rate, but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The IDs of new security groups to associate with the secondary elastic network interface. The interface is then detached from its original security groups.
   * 
   * - The number of security groups that you can specify is limited by the maximum number of security groups to which an elastic network interface can be attached. For more information, see [Usage limits](~~25412#SecurityGroupQuota~~).
   * 
   * - The changes take effect after a short delay.
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * Specifies whether to enable the source/destination check. For enhanced security, we recommend enabling this feature. Valid values:
   * 
   * - `true`: Enabled
   * 
   * - `false`: Disabled
   * 
   * Default value: `false`.
   * 
   * > This feature is available only in specific regions. Before you use this parameter, read [Source/destination check](https://help.aliyun.com/document_detail/2863210.html).
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The queue depth for outbound traffic on the elastic network interface.
   * 
   * > This parameter is available by invitation only. To use this feature, submit a ticket.
   * 
   * Note the following:
   * 
   * - This parameter is available only for instance types of the 7th generation and later.
   * 
   * - This parameter is available only for instances that use Linux images.
   * 
   * - A larger queue depth for outbound traffic increases throughput and reduces the packet loss rate, but consumes more memory.
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

