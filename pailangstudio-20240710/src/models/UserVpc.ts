// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserVpc extends $dara.Model {
  /**
   * @remarks
   * 用户安全组的ID
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 用户交换机的ID
   */
  vSwitchId?: string;
  /**
   * @remarks
   * 用户VPC的ID
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
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

