// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserRequest extends $dara.Model {
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

