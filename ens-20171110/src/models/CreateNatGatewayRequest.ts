// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instance. Valid values of N: **1** to **20**.
   * 
   * *   The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   The key must be up to 64 characters in length.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot start with acs: or contain http:// or https://.
   * 
   * @example
   * Deep
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

