// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVSwitchRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * - The tag key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - The tag key can be up to 64 characters in length.
   * - The tag key cannot be an empty string.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot start with acs: or contain http:// or https://.
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

export class CreateVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch. The CIDR block must meet the following requirements:
   * - The subnet mask length of the vSwitch CIDR block must be 16 to 29 bits.
   * - The vSwitch CIDR block must fall within the CIDR block of the VPC to which the vSwitch belongs.
   * - The vSwitch CIDR block cannot be the same as the destination CIDR block of a route entry in the VPC, but it can be a subset of the destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the vSwitch.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter or a Chinese character and cannot start with http:// or https://.
   * 
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the vSwitch.
   * 
   * > You can specify this parameter to assign an IPv6 CIDR block to the vSwitch only when IPv6 is enabled for the network to which the vSwitch belongs. After the IPv6 CIDR block is assigned, it cannot be changed. Make sure that the IPv6 CIDR block does not overlap with the CIDR blocks of other vSwitches in the same network.
   * 
   * @example
   * 2408:XXXX:0:a600::/110
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The ID of the network to which the new vSwitch belongs.
   * 
   * @example
   * n-257gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateVSwitchRequestTag[];
  /**
   * @remarks
   * The name of the vSwitch. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name must start with a letter or a Chinese character, and cannot start with http:// or https://. It can contain digits, half-width colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * Test vSwitch
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      networkId: 'NetworkId',
      tag: 'Tag',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ensRegionId: 'string',
      ipv6CidrBlock: 'string',
      networkId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVSwitchRequestTag },
      vSwitchName: 'string',
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

