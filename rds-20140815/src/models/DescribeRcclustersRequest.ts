// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClustersRequest extends $dara.Model {
  profile?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      regionId: 'string',
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

