// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfficeSiteUsersResponseBodyUsers extends $dara.Model {
  assignedDesktopNumber?: number;
  /**
   * @remarks
   * The display name of the AD account.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  displayNameNew?: string;
  email?: string;
  /**
   * @remarks
   * The username of the AD account.
   * 
   * @example
   * Alice
   */
  endUser?: string;
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

