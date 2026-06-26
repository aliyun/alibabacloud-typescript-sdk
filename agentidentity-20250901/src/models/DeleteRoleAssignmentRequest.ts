// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoleAssignmentRequest extends $dara.Model {
  principalName?: string;
  principalType?: string;
  roleName?: string;
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

