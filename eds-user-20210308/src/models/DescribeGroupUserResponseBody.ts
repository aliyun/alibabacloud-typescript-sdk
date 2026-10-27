// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupUserResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-91mvbosdjsdfh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Development team
   */
  groupName?: string;
  /**
   * @remarks
   * The number of members.
   * 
   * @example
   * 1
   */
  userCount?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      userCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupUserResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * > **[Deprecated]** This field is deprecated.
   * 
   * @example
   * xx-xx-xx
   */
  address?: string;
  /**
   * @remarks
   * > **[Deprecated]** This field is deprecated.
   * 
   * @example
   * https://avatar.****.com
   */
  avatar?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * alex****@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * alex****
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2024-08-26T02:59:22.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the member was added.
   * 
   * @example
   * 2024-08-26T02:59:22.000+00:00
   */
  gmtJoinGroup?: string;
  /**
   * @remarks
   * > **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 123
   */
  jobNumber?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * alex
   */
  nickName?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 138****1111
   */
  phone?: string;
  /**
   * @remarks
   * The remarks of the user.
   * 
   * @example
   * remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      avatar: 'Avatar',
      email: 'Email',
      endUserId: 'EndUserId',
      gmtCreated: 'GmtCreated',
      gmtJoinGroup: 'GmtJoinGroup',
      jobNumber: 'JobNumber',
      nickName: 'NickName',
      phone: 'Phone',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      avatar: 'string',
      email: 'string',
      endUserId: 'string',
      gmtCreated: 'string',
      gmtJoinGroup: 'string',
      jobNumber: 'string',
      nickName: 'string',
      phone: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * > **[Deprecated]** This field is deprecated.
   */
  groups?: DescribeGroupUserResponseBodyGroups[];
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA8D67CB-345D-5CDA-986E-FFAC7D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of members.
   */
  users?: DescribeGroupUserResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeGroupUserResponseBodyGroups },
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeGroupUserResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

