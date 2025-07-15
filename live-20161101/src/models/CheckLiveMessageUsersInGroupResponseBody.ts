// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckLiveMessageUsersInGroupResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is in the group.
   * 
   * @example
   * false
   */
  online?: boolean;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * uid1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      online: 'Online',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      online: 'boolean',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLiveMessageUsersInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1F68D81-1543-1FE4-B56E-82200DD2****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of users queried.
   */
  users?: CheckLiveMessageUsersInGroupResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': CheckLiveMessageUsersInGroupResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

