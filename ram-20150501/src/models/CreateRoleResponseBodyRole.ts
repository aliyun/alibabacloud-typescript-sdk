// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleResponseBodyRole extends $dara.Model {
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
   * The trust policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
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
   * The maximum session time of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 901234567890****
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
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
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

