// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoadBalancerAttributeResponseBodyBackendServers } from "./DescribeLoadBalancerAttributeResponseBodyBackendServers";
import { DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols } from "./DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols";


export class DescribeLoadBalancerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address that the Edge Load Balancer (ELB) instance uses to provide services.
   * 
   * @example
   * 192.168XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the ELB instance. Valid values: ipv4 and ipv6.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  addressType?: string;
  /**
   * @remarks
   * The list of backend servers.
   */
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers[];
  /**
   * @remarks
   * The peak bandwidth of the ELB. The default value is -1, which indicates that the bandwidth is unlimited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The time when the ELB instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2019-05-21T12:22:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the ELB instance was disabled.
   * 
   * @example
   * 2020-05-21T12:22:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The frontend ports that are used by the ELB instance.
   */
  listenerPorts?: string[];
  /**
   * @remarks
   * The frontend ports and protocols that are used by the ELB instance.
   */
  listenerPortsAndProtocols?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols[];
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5rcvo1n1t3hykfhhjwjgqp****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ELB instance.
   * 
   * @example
   * example
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specifications of the ELB instance.
   * 
   * @example
   * elb.s2.medium
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The status of the ELB instance. Valid values:
   * 
   * *   **Active** (default): The listener for the instance can forward the received traffic based on the rule.
   * *   **InActive**: The listener for the instance does not forward the received traffic.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5rwbi3g9zvgxcsiufwhw8****
   */
  networkId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go. Only this billing method is supported.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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

