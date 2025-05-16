// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The user group attribute of the user that you want to update. Valid values:
   * 
   * *   users: ordinary permissions, which are suitable for ordinary users that need only to submit and debug jobs.
   * *   wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The password attribute of the user that you want to update. The password must be 6 to 30 characters in length and must contain three of the following four character types:
   * 
   * *   Uppercase letters
   * *   Lowercase letters
   * *   Digits
   * *   Special characters ()~!@#$%^&\\*-_+=|{}[]:;\\"/<>,.?/
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

