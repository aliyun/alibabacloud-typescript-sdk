// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser extends $dara.Model {
  accelerateBandwidth?: number;
  bandwidth?: number;
  clientIp?: string;
  isStaticIp?: number;
  state?: number;
  userMail?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateBandwidth: 'AccelerateBandwidth',
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      isStaticIp: 'IsStaticIp',
      state: 'State',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateBandwidth: 'number',
      bandwidth: 'number',
      clientIp: 'string',
      isStaticIp: 'number',
      state: 'number',
      userMail: 'string',
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

export class DescribeSmartAccessGatewayClientUsersResponseBodyUsers extends $dara.Model {
  user?: DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser },
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

export class DescribeSmartAccessGatewayClientUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62F4CF10-F909-487E-8E95-BC35457C5F50
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  users?: DescribeSmartAccessGatewayClientUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: DescribeSmartAccessGatewayClientUsersResponseBodyUsers,
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

