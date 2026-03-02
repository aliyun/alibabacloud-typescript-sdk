// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserFromGroupRequest extends $dara.Model {
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
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

