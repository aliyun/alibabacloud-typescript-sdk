// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  description?: string;
  displayName?: string;
  email?: string;
  status?: string;
  userName?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      status: 'Status',
      userName: 'UserName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      email: 'string',
      status: 'string',
      userName: 'string',
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

