// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch } from "./DescribeRdsVswitchsResponseBodyVswitchesVswitch";


export class DescribeRdsVSwitchsResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * Details of the vSwitch.
   */
  vSwitch?: DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitch)) {
      $dara.Model.validateArray(this.vSwitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

