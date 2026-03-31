// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForGroupResponseBodyUsersUser extends $dara.Model {
  displayName?: string;
  joinDate?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      joinDate: 'JoinDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      joinDate: 'string',
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

export class ListUsersForGroupResponseBodyUsers extends $dara.Model {
  user?: ListUsersForGroupResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyUsersUser },
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

export class ListUsersForGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.````
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  users?: ListUsersForGroupResponseBodyUsers;
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
      users: ListUsersForGroupResponseBodyUsers,
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

