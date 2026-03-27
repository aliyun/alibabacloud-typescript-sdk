// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesRequest extends $dara.Model {
  /**
   * @example
   * vsw-bp165bn1eu4fyztdvbfvo,vsw-bp1iof8x4ypzrwfwg1h08
   */
  vSwitchId?: string;
  /**
   * @example
   * KKKK
   */
  vSwitchName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-wz97dyzl4m3dtuacb36ox
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

