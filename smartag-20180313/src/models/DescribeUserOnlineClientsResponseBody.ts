// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserOnlineClientsResponseBodyUsersUser extends $dara.Model {
  clientIp?: string;
  onlineTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      onlineTime: 'OnlineTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      onlineTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBodyUsers extends $dara.Model {
  user?: DescribeUserOnlineClientsResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeUserOnlineClientsResponseBodyUsersUser },
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

export class DescribeUserOnlineClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7108A98F-C47D-45F7-A4D8-C2E3022735DA
   */
  requestId?: string;
  users?: DescribeUserOnlineClientsResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: DescribeUserOnlineClientsResponseBodyUsers,
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

