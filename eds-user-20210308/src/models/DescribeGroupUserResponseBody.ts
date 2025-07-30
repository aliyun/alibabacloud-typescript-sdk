// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupUserResponseBodyGroups extends $dara.Model {
  /**
   * @example
   * ug-91mvbosdjsdfh****
   */
  groupId?: string;
  groupName?: string;
  /**
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
   * @example
   * xx-xx-xx
   */
  address?: string;
  /**
   * @example
   * https://avatar.****.com
   */
  avatar?: string;
  /**
   * @example
   * alex****@aliyun.com
   */
  email?: string;
  /**
   * @example
   * alex****
   */
  endUserId?: string;
  /**
   * @example
   * 2024-08-26T02:59:22.000+00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-08-26T02:59:22.000+00:00
   */
  gmtJoinGroup?: string;
  /**
   * @example
   * 123
   */
  jobNumber?: string;
  /**
   * @example
   * alex
   */
  nickName?: string;
  /**
   * @example
   * 188888****
   */
  phone?: string;
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
  groups?: DescribeGroupUserResponseBodyGroups[];
  nextToken?: string;
  /**
   * @example
   * AA8D67CB-345D-5CDA-986E-FFAC7D0****
   */
  requestId?: string;
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

