// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoleRequest extends $dara.Model {
  description?: string;
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
      description: 'Description',
      roleName: 'RoleName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

