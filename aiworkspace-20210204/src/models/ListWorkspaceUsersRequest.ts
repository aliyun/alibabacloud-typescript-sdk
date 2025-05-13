// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The display names of users who can be added to the workspace as members.
   * 
   * @example
   * doctest****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

