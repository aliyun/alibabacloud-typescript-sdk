// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersInRecycleBinResponseBodyUsersUser extends $dara.Model {
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

export class ListUsersInRecycleBinResponseBodyUsers extends $dara.Model {
  user?: ListUsersInRecycleBinResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersInRecycleBinResponseBodyUsersUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersInRecycleBinResponseBody extends $dara.Model {
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
  users?: ListUsersInRecycleBinResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      users: ListUsersInRecycleBinResponseBodyUsers,
    };
  }

  validate() {
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

