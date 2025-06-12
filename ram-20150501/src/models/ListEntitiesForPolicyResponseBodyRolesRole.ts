// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesForPolicyResponseBodyRolesRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The time when the policy was attached to the RAM role.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 122748924538****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      attachDate: 'AttachDate',
      description: 'Description',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      attachDate: 'string',
      description: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

