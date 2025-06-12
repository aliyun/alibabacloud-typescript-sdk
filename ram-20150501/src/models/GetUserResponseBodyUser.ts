// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * @example
   * Cloud computing engineer
   */
  comments?: string;
  /**
   * @remarks
   * The point in time when the RAM user was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The point in time when the RAM user last logged on to the Alibaba Cloud Management Console by using the password. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * 86-1860000****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The point in time when the information about the RAM user was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2015-02-11T03:15:21Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 222748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      lastLoginDate: 'string',
      mobilePhone: 'string',
      updateDate: 'string',
      userId: 'string',
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

