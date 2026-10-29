// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $dara.Model {
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port used by the backend server.
   * 
   * @example
   * 0
   */
  port?: string;
  /**
   * @remarks
   * The instance ID of the backend server.
   * 
   * @example
   * i-5vb5h5njxiuhn48a****
   */
  serverId?: string;
  /**
   * @remarks
   * The server type of the backend server.
   * 
   * @example
   * ens
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols extends $dara.Model {
  /**
   * @remarks
   * The backend port used by the load balancing instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 6000
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination listener port to which traffic is forwarded.
   * 
   * @example
   * 0
   */
  forwardPort?: number;
  /**
   * @remarks
   * Specifies whether listener forwarding is enabled.
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 8080
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol.
   * 
   * @example
   * tcp
   */
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      description: 'string',
      forwardPort: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service address of the load balancing instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the load balancing instance. Valid values: ipv4 and ipv6.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The address type of the load balancing instance.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * The list of backend servers.
   */
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers[];
  /**
   * @remarks
   * The peak bandwidth of the load balancing instance. Default value: -1, which indicates that bandwidth is not throttled.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the load balancing instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2019-05-21T12:22:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the load balancing instance. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2020-05-21T12:22:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The frontend ports used by the load balancing instance.
   */
  listenerPorts?: string[];
  /**
   * @remarks
   * The frontend ports and protocols used by the load balancing instance.
   */
  listenerPortsAndProtocols?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols[];
  /**
   * @remarks
   * The ID of the load balancing instance.
   * 
   * @example
   * lb-5rcvo1n1t3hykfhhjwjgqp****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the load balancing instance.
   * 
   * @example
   * example
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specifications of the load balancing instance.
   * 
   * @example
   * elb.s2.medium
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The listener status of the load balancing instance. Valid values:
   * - **Active**: The listeners in the instance can forward accepted traffic based on rules.
   * - **InActive**: The listeners in the instance no longer forward accepted traffic.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the load balancing instance.
   * 
   * @example
   * CLB
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-5rwbi3g9zvgxcsiufwhw8****
   */
  networkId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid** (currently the only supported billing method): pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-5s78m2pdr9osa0j64bn78****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocols: 'ListenerPortsAndProtocols',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      networkId: 'NetworkId',
      payType: 'PayType',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      backendServers: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyBackendServers },
      bandwidth: 'number',
      createTime: 'string',
      endTime: 'string',
      ensRegionId: 'string',
      listenerPorts: { 'type': 'array', 'itemType': 'string' },
      listenerPortsAndProtocols: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols },
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      networkId: 'string',
      payType: 'string',
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backendServers)) {
      $dara.Model.validateArray(this.backendServers);
    }
    if(Array.isArray(this.listenerPorts)) {
      $dara.Model.validateArray(this.listenerPorts);
    }
    if(Array.isArray(this.listenerPortsAndProtocols)) {
      $dara.Model.validateArray(this.listenerPortsAndProtocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

