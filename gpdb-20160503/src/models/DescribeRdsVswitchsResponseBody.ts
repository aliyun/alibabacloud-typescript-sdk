// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsVSwitchsResponseBodyVSwitches } from "./DescribeRdsVswitchsResponseBodyVswitches";


export class DescribeRdsVSwitchsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B0BA251D-6854-5A99-A964-3C**********
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the vSwitches.
   */
  vSwitches?: DescribeRdsVSwitchsResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeRdsVSwitchsResponseBodyVSwitches,
    };
  }

  validate() {
    if(this.vSwitches && typeof (this.vSwitches as any).validate === 'function') {
      (this.vSwitches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

