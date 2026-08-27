// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the RAM role is allowed to log on to the console.
   * 
   * @example
   * true
   */
  newAllowConsoleLogin?: boolean;
  /**
   * @remarks
   * The trust policy of the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234****:root" } } ], "Version": "1" }
   */
  newAssumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * The description must be 1 to 1024 characters in length.
   * 
   * @example
   * ECS management role
   */
  newDescription?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
   * 
   * @example
   * 3600
   */
  newMaxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      newAllowConsoleLogin: 'NewAllowConsoleLogin',
      newAssumeRolePolicyDocument: 'NewAssumeRolePolicyDocument',
      newDescription: 'NewDescription',
      newMaxSessionDuration: 'NewMaxSessionDuration',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newAllowConsoleLogin: 'boolean',
      newAssumeRolePolicyDocument: 'string',
      newDescription: 'string',
      newMaxSessionDuration: 'number',
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

