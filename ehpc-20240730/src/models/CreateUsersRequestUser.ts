// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The public key of the user.
   * 
   * You can add up to 20 users in a call.
   * 
   * Specify one of the Password and AuthKey parameters. The AuthKey parameter takes effect only when the cluster authentication method is set to Key. Key authentication is not recommended.
   * 
   * @example
   * Abc****
   */
  authKey?: string;
  /**
   * @remarks
   * The permission group to which the user belongs. Valid values:
   * 
   * users: ordinary permissions, which are suitable for ordinary users that need only to submit and debug jobs. wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes. You can add up to 20 users in a call.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The password of the user. The password must be 6 to 30 characters in length and must contain three of the following character types:
   * 
   * *   Uppercase letters
   * *   Lowercase letters
   * *   Digits
   * *   Special characters ()~!@#$%^&\\*-_+=|{}[]:;\\"/<>,.?/
   * 
   * You can add up to 20 users in a call.
   * 
   * Specify one of the Password and AuthKey parameters. The Password parameter takes effect only when the cluster authentication method is set to Password. Password authentication is recommended.
   * 
   * @example
   * 1@a2****
   */
  password?: string;
  /**
   * @remarks
   * The username. The username must be 1 to 30 characters in length. It must start with a letter and can contain digits, letters, and periods (.).
   * 
   * You can add up to 20 users in a call.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      group: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

