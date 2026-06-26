// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserPasswordRequest extends $dara.Model {
  generateRandomPassword?: boolean;
  password?: string;
  userName?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      generateRandomPassword: 'GenerateRandomPassword',
      password: 'Password',
      userName: 'UserName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateRandomPassword: 'boolean',
      password: 'string',
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

