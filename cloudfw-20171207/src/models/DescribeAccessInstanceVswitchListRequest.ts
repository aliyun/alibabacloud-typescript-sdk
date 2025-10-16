// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceVSwitchListRequest extends $dara.Model {
  /**
   * @example
   * 135809047715****
   */
  memberUid?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'number',
      pageNo: 'number',
      pageSize: 'number',
      regionNo: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

