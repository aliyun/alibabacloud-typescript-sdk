// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstanceAttributeResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 10.0.0.1/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-chengdu-telecom-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vs-xxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vs-test
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ensRegionId: 'EnsRegionId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ensRegionId: 'string',
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

