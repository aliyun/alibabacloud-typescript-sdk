// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1611******3000
   */
  userId?: string;
  /**
   * @remarks
   * The display name of the user who can be added as a workspace member.
   * 
   * @example
   * doctest****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

