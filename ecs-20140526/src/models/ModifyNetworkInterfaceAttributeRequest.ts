// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for TCP connections in the TIME_WAIT and CLOSED states. Unit: seconds. Valid values: integers from 3 to 15.
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
   * The communication mode of the ENI. Valid values:
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

export class ModifyNetworkInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The network connectivity tracking configuration.
   */
  connectionTrackingConfiguration?: ModifyNetworkInterfaceAttributeRequestConnectionTrackingConfiguration;
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
   * The description of the network interface controller (NIC). The description must be 2 to 255 characters in length and cannot start with http:// or https://.
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
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. The name can contain characters under the letter categorization in Unicode, including English letters, Chinese characters, and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
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
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The list of security group IDs. The secondary network interface controller (NIC) is added to the specified security groups and removed from the existing security groups.
   */
  securityGroupId?: string[];
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
   * The outbound queue depth of the network interface controller (NIC).
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

