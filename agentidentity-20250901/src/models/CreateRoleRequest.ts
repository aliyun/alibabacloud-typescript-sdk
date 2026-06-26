// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleRequest extends $dara.Model {
  description?: string;
  roleName?: string;
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

