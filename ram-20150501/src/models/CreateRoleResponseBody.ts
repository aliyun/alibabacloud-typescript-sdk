// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the RAM role is allowed to log on to the console.
   * 
   * @example
   * true
   */
  allowConsoleLogin?: boolean;
  /**
   * @remarks
   * The resource descriptor of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The trust policy of the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
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
   * ECS management role
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
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
      allowConsoleLogin: 'AllowConsoleLogin',
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
      allowConsoleLogin: 'boolean',
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

export class CreateRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The RAM role information.
   */
  role?: CreateRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

