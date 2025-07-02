// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VPCConfig extends $dara.Model {
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  /**
   * @example
   * sg-bp18hj1wtxgy3b0***
   */
  securityGroupId?: string;
  vSwitchIds?: string[];
  /**
   * @example
   * vpc-***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

