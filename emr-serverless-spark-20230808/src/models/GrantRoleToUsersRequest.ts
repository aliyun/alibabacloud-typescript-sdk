// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantRoleToUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:emr::w-975bcfda9625****:role/Owner
   */
  roleArn?: string;
  /**
   * @remarks
   * The user ARNs.
   */
  userArns?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'roleArn',
      userArns: 'userArns',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      userArns: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userArns)) {
      $dara.Model.validateArray(this.userArns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

