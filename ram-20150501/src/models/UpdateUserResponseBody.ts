// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * @example
   * This is a cloud computing engineer.
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
   * xiaoq****
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * xiaoq****@example.com
   */
  email?: string;
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
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * xiaoq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
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

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user.
   */
  user?: UpdateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: UpdateUserResponseBodyUser,
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

