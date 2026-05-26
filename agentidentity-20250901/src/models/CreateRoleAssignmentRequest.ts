// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleAssignmentRequest extends $dara.Model {
  /**
   * @example
   * alice
   */
  principalName?: string;
  /**
   * @example
   * User
   */
  principalType?: string;
  /**
   * @example
   * Analyst
   */
  roleName?: string;
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      roleName: 'RoleName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
      roleName: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

