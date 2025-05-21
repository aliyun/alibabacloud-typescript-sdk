// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVSwitchsResponseBodyVSwitches } from "./DescribeVswitchsResponseBodyVswitches";


export class DescribeVSwitchsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B892DA2-9ABC-5CC0-AD73-405479C3FA53
   */
  requestId?: string;
  /**
   * @remarks
   * The queried vSwitches.
   */
  vSwitches?: DescribeVSwitchsResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeVSwitchsResponseBodyVSwitches,
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

