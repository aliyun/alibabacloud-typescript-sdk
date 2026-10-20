// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * - Cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - Can be up to 64 characters in length.
   * - Cannot be an empty string.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length, cannot start with acs:, and cannot contain http:// or https://.
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
   * The ID of the ENS edge zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The billing cycle of the instance. Valid values: Hour and Month.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The NAT gateway specification. Valid value: **enat.default**.
   * 
   * @example
   * enat.default
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the NAT gateway. The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5qj7ykuxmjn7k96l090sp****
   */
  networkId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateNatGatewayRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
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

