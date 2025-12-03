// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address that is allocated to the CLB instance.
   * 
   * @example
   * 42.XX.XX.6
   */
  address?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-hddhfjg****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The CLB instance name.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **vpc**: VPC
   * *   **Classic**: classic network
   * 
   * @example
   * classic
   */
  networkType?: string;
  /**
   * @remarks
   * The order ID of the subscription CLB instance.
   * 
   * @example
   * 20212961978****
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the CLB instance belongs.
   * 
   * @example
   * rg-atstuj3rto****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the CLB instance belongs.
   * 
   * @example
   * vsw-255ecr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the CLB instance belongs.
   * 
   * @example
   * vpc-25dvzy9****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      networkType: 'NetworkType',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      networkType: 'string',
      orderId: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

