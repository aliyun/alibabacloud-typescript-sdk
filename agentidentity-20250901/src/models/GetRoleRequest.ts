// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleRequest extends $dara.Model {
  roleName?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

