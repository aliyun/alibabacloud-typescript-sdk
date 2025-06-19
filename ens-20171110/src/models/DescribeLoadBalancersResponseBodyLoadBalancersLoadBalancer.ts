// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $dara.Model {
  /**
   * @remarks
   * The IP address that the ELB instance uses to provide services.
   * 
   * @example
   * 10.10.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version. Valid values: ipv4 and ipv6.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  addressType?: string;
  /**
   * @remarks
   * The time when the ELB instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-06T11:13:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-wuhan-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5snthcyu1x10g7tywj7iu****
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
   * The status of the listener for the ELB instance. Valid values:
   * 
   * *   **Active**: The listener for the instance can forward the received traffic based on forwarding rules.
   * *   **InActive**: The listener for the instance does not forward the received traffic.
   * 
   * @example
   * InActive
   */
  loadBalancerStatus?: string;
  loadBalancerType?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5rz0rj1caexauilpsjx0w****
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
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5rllcjb3ol6duzjdnbm1om****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      createTime: 'CreateTime',
      ensRegionId: 'EnsRegionId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      networkId: 'NetworkId',
      payType: 'PayType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      createTime: 'string',
      ensRegionId: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      networkId: 'string',
      payType: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

