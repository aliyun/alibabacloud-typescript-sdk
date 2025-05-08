// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVSwitchRequestTag } from "./CreateVswitchRequestTag";


export class CreateVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch. Take note of the following limits:
   * 
   * *   The subnet mask must be 16 to 29 bits in length.
   * *   The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
   * *   The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
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
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the network to which the vSwitch that you want to create belongs.
   * 
   * @example
   * n-257gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateVSwitchRequestTag[];
  /**
   * @remarks
   * The name of the vSwitch. The name must meet the following requirements:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: null.
   * 
   * @example
   * test
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
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

