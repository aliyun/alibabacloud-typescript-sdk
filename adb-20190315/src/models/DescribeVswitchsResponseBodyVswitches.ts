// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVSwitchsResponseBodyVSwitchesVSwitch } from "./DescribeVswitchsResponseBodyVswitchesVswitch";


export class DescribeVSwitchsResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * The queried vSwitch.
   */
  vSwitch?: DescribeVSwitchsResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchsResponseBodyVSwitchesVSwitch },
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

