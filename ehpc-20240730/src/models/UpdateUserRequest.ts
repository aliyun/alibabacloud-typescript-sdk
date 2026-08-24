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
   * The user group property to update. Valid values:
   * 
   * - users: ordinary permission group. This group is suitable for regular users who only need to submit and debug jobs.
   * 
   * - wheel: sudo permission group. This group is suitable for administrators who need cluster management. In addition to submitting and debugging jobs, users in this group can execute sudo commands to install software, restart nodes, and perform other operations.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The user password property to update. The password must be 8 to 30 characters in length and must contain at least three of the following four character types:
   * 
   * - Uppercase letters
   * - Lowercase letters
   * - Digits
   * - Special characters: ()~!@#$%^&*-_+=|{}[]:;\\"/<>,.?/
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

