// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNatGatewayRequestTag } from "./CreateNatGatewayRequestTag";


export class CreateNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The instance type of the NAT gateway. Set the value to **enat.default**.
   * 
   * @example
   * enat.default
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the NAT gateway. The name must be 1 to 128 characters in length. The name cannot start with `http://` or `https://`.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5qj7ykuxmjn7k96l090sp****
   */
  networkId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateNatGatewayRequestTag[];
  /**
   * @remarks
   * The ID of the new vSwitch.
   * 
   * @example
   * vsw-5savh5ngxh8sbj14bu7n****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceType: 'InstanceType',
      name: 'Name',
      networkId: 'NetworkId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceBillingCycle: 'string',
      instanceType: 'string',
      name: 'string',
      networkId: 'string',
      tag: { 'type': 'array', 'itemType': CreateNatGatewayRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

