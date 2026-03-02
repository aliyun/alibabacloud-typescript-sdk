// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInRecycleBinResponseBodyUser extends $dara.Model {
  createDate?: string;
  deleteDate?: string;
  displayName?: string;
  recycleDate?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deleteDate: 'DeleteDate',
      displayName: 'DisplayName',
      recycleDate: 'RecycleDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deleteDate: 'string',
      displayName: 'string',
      recycleDate: 'string',
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

export class GetUserInRecycleBinResponseBody extends $dara.Model {
  requestId?: string;
  user?: GetUserInRecycleBinResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserInRecycleBinResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

