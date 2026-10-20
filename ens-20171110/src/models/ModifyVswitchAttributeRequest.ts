// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVSwitchAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * - The description must be 2 to 256 characters in length.
   * - It cannot start with http:// or https://.
   * 
   * @example
   * this is my first vswitch
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6 for the vSwitch. Valid values:
   * - true: enables IPv6. The VPC to which the vSwitch belongs must have IPv6 enabled, and you must also specify Ipv6CidrBlock to assign an IPv6 CIDR block to the vSwitch.
   * - false (default): disables IPv6. Before you disable IPv6 for the vSwitch, make sure that no IPv6 addresses are in use, and do not specify Ipv6CidrBlock at the same time.
   * 
   * @example
   * false
   */
  enableIPv6?: boolean;
  /**
   * @remarks
   * The IPv6 CIDR block of the vSwitch.
   * 
   * > You can specify this parameter to assign an IPv6 CIDR block to the vSwitch only when IPv6 is enabled for the VPC to which the vSwitch belongs. After the IPv6 CIDR block is assigned, it cannot be changed. Make sure that the IPv6 CIDR block does not overlap with the CIDR blocks of other vSwitches in the same VPC.
   * 
   * @example
   * 2408:XXXX:0:a600::/110
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch name.
   * 
   * - The name must be 2 to 128 characters in length.
   * - It must start with a letter or a Chinese character and cannot start with http:// or https://.
   * 
   * @example
   * Test-switch
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableIPv6: 'EnableIPv6',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableIPv6: 'boolean',
      ipv6CidrBlock: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

