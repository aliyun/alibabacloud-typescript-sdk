// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToDesktopOversoldUserGroupRequest extends $dara.Model {
  addUserAmount?: number;
  endUserId?: string;
  oversoldGroupId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addUserAmount: 'AddUserAmount',
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addUserAmount: 'number',
      endUserId: 'string',
      oversoldGroupId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

