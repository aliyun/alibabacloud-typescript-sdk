// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoryUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The number of assigned cloud computers.
   * 
   * @example
   * 2
   */
  assignedDesktopNumber?: number;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  displayNameNew?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * Alice
   */
  endUser?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 130********
   */
  phone?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      assignedDesktopNumber: 'AssignedDesktopNumber',
      displayName: 'DisplayName',
      displayNameNew: 'DisplayNameNew',
      email: 'Email',
      endUser: 'EndUser',
      phone: 'Phone',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedDesktopNumber: 'number',
      displayName: 'string',
      displayNameNew: 'string',
      email: 'string',
      endUser: 'string',
      phone: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

